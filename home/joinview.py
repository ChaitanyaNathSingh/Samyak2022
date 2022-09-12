from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from rest_framework.authentication import SessionAuthentication

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

from django.http import JsonResponse

from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import Profile, Event, Payment, RegisteredEvent, Team

class LoginView(APIView):
    def get(self, request):
        print("login get", request.query_params)
        return Response({"status": True, "message": "GET, World!"})
    
    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        # print(username, password)
        if(request.user.is_authenticated):
            return Response({"status": True, "message": "You should logout first!"})
        status = authenticate(username=username, password=password)
        if status:
            print("Logging in")
            login(request, status)
            return Response({"status": True, "message": "Logged In Successfully.!", "csrftoken": get_token(request)})
        else:
            print("Login Failed")
            return Response({"status": False, "message": "Invalid Credentials.!"})

class RegisterView(APIView):
    def get(self, request):
        print("register get", request.query_params)
        return Response({"status": True, "message": "GET, World!"})
    
    def post(self, request):
        print(request.data)
        displayData = request.data
        print("IN CREATE")
        if User.objects.filter(username=displayData['username']).exists():
            return Response({"status": False, "message": "Username Already Exists.!"})
        elif User.objects.filter(email=displayData['email']).exists():
            return Response({"status": False, "message": "Email Already Exists.!"})
        elif Profile.objects.filter(phone=displayData['phoneno']).exists():
            return Response({"status": False, "message": "Phone Number Already Exists.!"})
        else:
            u = User.objects.create_user(username=displayData['username'], first_name=displayData['first_name'], last_name=displayData['last_name'], email=displayData['email'], password=displayData['password'])
            Profile.objects.create(user=u, phone=displayData['phoneno'], college_name=displayData['college'], branch=displayData['branch']
            , year_of_study=displayData['year'], gender=displayData['gender'])
            login(request, u)
            return Response({"status": True, "message": "Login Successful!!", "csrftoken": get_token(request)})

class LogoutView(APIView):
    # authentication_classes = [SessionAuthentication]
    permission_classes = (AllowAny,)
    def get(self, request):
        print("logging out")
        print(request.user)
        print()
        if request.user.is_authenticated:
            logout(request)
            return Response({"status": True, "message": "Logged Out Successfully.!"})
        return Response({"status": False, "message": "Not Logged In.!"})


@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})

    return JsonResponse({'isAuthenticated': True})

@api_view(['GET'])
def get_csrf(request):
    print("returning csrf token")
    token = get_token(request)
    return Response({"detail": "CSRF cookie set", "csrftoken": token})