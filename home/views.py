from dataclasses import fields
import profile
from pyexpat import model
from django.http import HttpResponse, JsonResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .serializers import UserSerializers, PaymentSerializers, SportPaymentSerializer, EventSerializers, ProfileSerializers, TeamSerializers
from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .models import Profile, Event, Payment, Team, SportPayment, TeamLeader, TeamMember
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
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import PasswordResetForm

from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.contrib.auth.forms import PasswordResetForm
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.contrib import messages

import requests

api = Instamojo(api_key=settings.API_KEY, auth_token=settings.AUTH_TOKEN)
# Create your views here.

def home(request):
    return HttpResponse("<h1>Samyak Project</h1>")

def test(request):
    return HttpResponse("<h1>Samyak Project Testing Page</h1>")

@login_required(login_url='/admin')
def admin_dashboard(request):
    if not request.user.is_superuser:
        return redirect('/')
    user_count = User.objects.filter().count
    payment_count = Payment.objects.filter(payment_status=True).count()
    total_amount = payment_count * 480
    CSE = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="CSE").count()
    BT = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BT").count()
    ME = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="ME").count()
    EEE = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="EEE").count()
    CE = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="CE").count()
    ECM = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",  
                                       user__profile__branch="ECM").count()
    ECE = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="ECE").count()
    AIDS = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="AI&DS").count()
    CSIT = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="CS&IT").count()
    
    BBA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BBA").count()

    MBA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="MBA").count()

    LLB = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="LLB").count()

    BCom = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="B.COM").count()

    MCom = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="M.COM").count()

    BFA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BFA").count()

    Arch = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="ARCHITECTURE").count()

    FED = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="FED").count()

    MCA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="MCA").count()

    BCA = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BCA").count()

    BSCVC = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="B.SC.VC").count()

    BPharam = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="B.PHARM").count()

    MPharam = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="M.PHARM").count()
    
    Agri = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="AGRICULTURE").count()
    
    BHM = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BHM").count()
    
    BAIAS = Payment.objects.filter(payment_status=True, user__profile__college_name="KL Vijayawada",
                                       user__profile__branch="BA-IAS").count()

    context = {'user_count': user_count, 'payment_count': payment_count, 'total_amount': total_amount,
        'CSE': CSE, 'BT': BT, 'ME': ME, 'EEE' : EEE, 'CE' : CE, 'ECM': ECM, 'ECE': ECE, 'AIDS': AIDS, 'CSIT': CSIT,
        'BBA': BBA, 'MBA': MBA, 'LLB': LLB, 'BCom': BCom, 'MCom': MCom, 'BFA': BFA, 'BCA': BCA, 'Arch': Arch, 'FED': FED,
        'MCA': MCA, 'BCA': BCA, 'BSCVC': BSCVC, 'BPharam': BPharam, 'MPharam': MPharam, 'Agri': Agri, 'BHM': BHM, 'BAIAS': BAIAS}
    return render(request, 'admin_dashboard.html', context)

class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializers
    queryset = User.objects.all()   
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        return Response({'status': 'NOPEE!'})

    def create(self, request, pk=None):
        print(request.data)
        displayData = request.data
        print("IN CREATE")
        if User.objects.filter(username=displayData['username']).exists():
            return Response({"status": False, "message": "Username Already Exists.!"})
        else:
            u = User.objects.create_user(username=displayData['username'], first_name=displayData['first_name'], last_name=displayData['last_name'], email=displayData['email'], password=displayData['password'])
            Profile.objects.create(user=u, phone=displayData['phoneno'], college_name=displayData['college'], branch=displayData['branch']
            , year_of_study=displayData['year'], gender=displayData['gender'])
            return Response({"status": True, "message": "POST, World!"})

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
class SportPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SportPayment
        fields = '__all__'
class ProfileTempSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['phone','branch','year_of_study','gender','college_name','is_verified']
class TeamLeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamLeader
        fields = ['team_name', 'phoneno', 'college_name', 'gender', 'game_type', 'team_count', 'payment_status']
class UserDetailsSerializer(serializers.ModelSerializer):
    profile = ProfileTempSerializers()
    payment = PaymentTempSerializers()
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'profile', 'payment']
class SportUserDetailsSerializer(serializers.ModelSerializer):
    teamleader = TeamLeaderSerializer()
    payment = SportPaymentSerializer()
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'teamleader', 'payment']
    
class UserAPIView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserDetailsSerializer
    def get_object(self):
        return self.request.user
class ProfileView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserDetailsSerializer
    def get_queryset(self):
        # print(self.request.user)
        # image = requests.get('https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Username%20:%20190030240%0AFull%20Name%20:%20Sri%20Hasan%20Prakash%0APayment%20Status%20:%20Paid&choe=UTF-8')
        result = User.objects.filter(username=self.request.user)     # result.append(image)
        return result
class SportProfileView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = SportUserDetailsSerializer
    def get_queryset(self):
        # print(self.request.user)
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
        # phone = request.data.phone
        payment_obj, _ = Payment.objects.get_or_create(
            user=user,
            payment_status=False
        )
        # #uname = request.user
        try:
            response = api.payment_request_create(
                amount=480,
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
                return Response("ERROR")

        except Exception as e:
            print("ERROR RESPOONSE")
            return Response("ERROR")

    
class PaymentSuccessView(APIView):
    def get(self, request):
        payment_request_id = request.GET.get('payment_request_id')
        payment_id = request.GET.get('payment_id')
        response = api.payment_request_payment_status(
            id=payment_request_id,
            payment_id=payment_id,
        )
        # print(payment_request_id, payment_id)
        # print(response)
        username = response['payment_request']['buyer_name']   # username
        u = User.objects.get(username=username)
        stats = response['payment_request']['payment']['status']
        # print(stats)
        if stats != "Failed":
            payment_obj = Payment.objects.get(user=u)
            # if payment obj is not null
            if payment_obj is not None:
                payment_obj.payment_status = True
                payment_obj.mojo_id = response['payment_request']['payment']['payment_id']
                payment_obj.save()
                p = Profile.objects.get(user=u)
                p.is_paid = True
                p.save()
                # return Response({"status" : True})
                return HttpResponseRedirect("https://klsamyak.in/profile")
            else:
                HttpResponseRedirect("https://klsamyak.in/login")
        else:
            print("PAYMENT FAILED")
            return HttpResponseRedirect("https://klsamyak.in/profile")
    
    def post(self):
        return Response({'status': 'post request'})








class SportPaymentView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = SportPaymentSerializer

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
        teamleader = TeamLeader.objects.get(username=username)
        print(teamleader)
        # phone = request.data.phone
        payment_obj, _ = SportPayment.objects.get_or_create(
            team_leader=teamleader,
            payment_status=False
        )
        # #uname = request.user
        try:
            response = api.payment_request_create(
                amount=1150,
                purpose='Samyak Registration Fee',
                buyer_name=username,
                email=email,
                phone=phone,
                redirect_url='https://klsamyakbackend.in/home/sportpaymentsuccess'
            )
            print(response)
            if(response['success']):
                payment_obj.receipt_id = response['payment_request']['id']
                payment_obj.transaction_amount = int(float(response['payment_request']['amount']))
                payment_obj.save()
                print(response['payment_request']['longurl'])
                return Response(response['payment_request']['longurl'])
            else:
                return Response("ERROR")

        except Exception as e:
            print("ERROR RESPOONSE")
            return Response("ERROR")

    
class SportPaymentSuccessView(APIView):
    def get(self, request):
        payment_request_id = request.GET.get('payment_request_id')
        payment_id = request.GET.get('payment_id')
        response = api.payment_request_payment_status(
            id=payment_request_id,
            payment_id=payment_id,
        )
        # print(payment_request_id, payment_id)
        # print(response)
        username = response['payment_request']['buyer_name']   # username
        tl = TeamLeader.objects.get(username=username)
        stats = response['payment_request']['payment']['status']
        # print(stats)
        if stats != "Failed":
            payment_obj = SportPayment.objects.get(team_leader=tl)
            # if payment obj is not null
            if payment_obj is not None:
                payment_obj.payment_status = True
                payment_obj.mojo_id = response['payment_request']['payment']['payment_id']
                payment_obj.save()
                tl.payment_status = True
                tl.save()
                TeamMember.objects.filter(team_leader=tl).update(payment_status=True)
                return HttpResponseRedirect("https://klsamyak.in/sport-profile")
            else:
                HttpResponseRedirect("https://klsamyak.in/login")
        else:
            print("PAYMENT FAILED")
            return HttpResponseRedirect("https://klsamyak.in/profile")
    
    def post(self):
        return Response({'status': 'post request'})



class EventsViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializers
    queryset = Event.objects.all()   
    permission_classes = [permissions.AllowAny]
    # def create(self, request, pk=None):
    #     # allEvents = Event.objects.all()
    #     print(request)
    #     return Response({'data': 'hi'})

class EventInfoView(APIView):
    permission_classes = [permissions.AllowAny]
    # receive dynamic routes of eventId


    def get(self, request):
        event_name = request.GET.get('name')
        print(event_name)
        if not event_name:
            return Response({'status': 'error'})
        try:
            event = Event.objects.get(name=event_name)
        except:
            return Response({'status': False, "message": "Event not found"})
        return Response({"status": True, "data": EventSerializers(event).data})
