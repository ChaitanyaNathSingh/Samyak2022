from dataclasses import fields
import profile
from pyexpat import model
from unicodedata import name
from django.http import HttpResponse, JsonResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .serializers import UserSerializers, PaymentSerializers, EventSerializers, ProfileSerializers, RegisteredEventSerializers, TeamSerializers
from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .models import Profile, Event, Payment, RegisteredEvent, Team
from rest_framework import serializers, viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from instamojo_wrapper import Instamojo
from django.conf import settings
from rest_framework.views import APIView

api = Instamojo(api_key=settings.API_KEY, auth_token=settings.AUTH_TOKEN)
# Create your views here.

def home(request):
    return HttpResponse("<h1>Samyak Project</h1>")

def test(request):
    return HttpResponse("<h1>Samyak Project Testing Page</h1>")


class RegisterEventViewSet(viewsets.ModelViewSet):
    serializer_class = RegisteredEventSerializers
    queryset = RegisteredEvent.objects.all()
    permission_classes = [IsAuthenticated]
    def list(self, request):
        user_id = request.user.id
        givenuser_id = request.query_params.get('user_id')
        print(user_id, givenuser_id)
        if str(user_id) == str(givenuser_id):
            return Response(RegisteredEventSerializers(RegisteredEvent.objects.filter(user=User.objects.get(id=user_id)), many=True).data)
        else:
            return Response({'status': False, 'message': 'Not Authorized'})
    def create(self, request, pk=None):
        print(request.data)
        displayData = request.data
        user_id = request.user.id
        event_name = displayData['event_name']
        userobj = User.objects.get(id=user_id)
        first_name = userobj.first_name
        last_name = userobj.last_name
        email = userobj.email
        phone = Profile.objects.get(user=userobj).phone
        college_name = Profile.objects.get(user=userobj).college_name
        reg_id = userobj.username
        eventobj = Event.objects.get(name=event_name)
        print("IN CREATE")
        if RegisteredEvent.objects.filter(event=eventobj, user=userobj).exists():
            return Response({"status": False, "message": "Already Registered.!"})
        else:
            RegisteredEvent.objects.create(user=userobj, event=eventobj, first_name=first_name, last_name=last_name, email=email, phone=phone, college_name=college_name, event_name=event_name, student_id=reg_id)
            return Response({'status': True, 'message': 'New Event Registered'})

class TeamViewSet(viewsets.ModelViewSet):
    serializer_class = TeamSerializers
    queryset = Team.objects.all()
    permission_classes = [IsAuthenticated, IsAdminUser]

class EventsViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializers
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]


class PaymentTempSerializers(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
class ProfileTempSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['phone','branch','year_of_study','gender','college_name']
class UserDetailsSerializer(serializers.ModelSerializer):
    profile = ProfileTempSerializers()
    payment = PaymentTempSerializers()
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'profile', 'payment']
class UserAPIView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserDetailsSerializer
    def get_object(self):
        return self.request.user

      
class ProfileView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserDetailsSerializer
    def get_queryset(self):
        return User.objects.filter(username=self.request.user)

class PaymentView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PaymentSerializers

    def get(self, request):
        print("SUCCESS METHOD")
        print(request)
        Response({"status": 'UNAUTHORIZED'})

    def post(self, request):
        print(request.data)
        print("CONFIGURING PAYMENTS")
        username = request.data['username']
        email = request.data['email']
        phone = request.data['phone']
        user = User.objects.get(username=username)
        print(user)
        #phone = request.data.phone
        payment_obj, _ = Payment.objects.get_or_create(
            user=user,
            payment_status=False
        )
        # #uname = request.user
        try:
            response = api.payment_request_create(
                amount=500,
                purpose='Samyak Registration Fee',
                buyer_name=username,
                email=email,
                phone=phone,
                redirect_url='https://klsamyakbackend.in/home/paymentsuccess'
            )
            print(response)
            if(response['success']):
                payment_obj.receipt_id = response['payment_request']['id']
                payment_obj.transaction_amount = int(float(response['payment_request']['amount']))
                payment_obj.save()
                print(response['payment_request']['longurl'])
                return Response(response['payment_request']['longurl'])
            else:
                return Response(False)

        except Exception as e:
            print("ERROR RESPOONSE")
            return Response({"status": False})

    
class PaymentSuccessView(APIView):
    def get(self, request):
        print()
        payment_request_id = request.GET.get('payment_request_id')
        payment_id = request.GET.get('payment_id')
        response = api.payment_request_payment_status(
            id=payment_request_id,
            payment_id=payment_id,
        )
        # print(payment_request_id, payment_id)
        print(response)
        username = response['payment_request']['buyer_name']   # username
        stats = response['payment_request']['payment']['status']
        print(stats)
        if stats != "Failed":
            payment_obj = Payment.objects.get(receipt_id=payment_request_id)
            payment_obj.payment_status = True
            payment_obj.mojo_id = response['payment_request']['payment']['payment_id']
            payment_obj.save()
            p = Profile.objects.get(user=User.objects.get(username=username))
            p.is_paid = True
            p.save()
            # return Response({"status" : True})
            return HttpResponseRedirect("http://klsamyak.in/profile")
        else:
            return Response({"status" : 'FAILED'})
    
    def post(self, request):
        print("IN POST ReQUUEST")
        return Response({'status': 'post request'})



class EventsViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializers
    queryset = Event.objects.all()   
    permission_classes = [permissions.AllowAny]
    # def create(self, request, pk=None):
    #     # allEvents = Event.objects.all()
    #     print(request)
    #     return Response({'data': 'hi'})