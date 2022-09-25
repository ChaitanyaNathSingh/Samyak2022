from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
# import authentication classes

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

from django.http import JsonResponse

from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import Profile, Event, Payment, Team

import requests
import json

class LoginView(APIView):
    def get(self, request):
        print("login get", request.query_params)
        return Response({"status": True, "message": "GET, World!"})
    
    def post(self, request):
        url = request.build_absolute_uri()
        username = request.data['username']
        password = request.data['password']
        # print(username, password)
        print(request.user)
        print(request.user.is_authenticated)
        # if(request.user.is_authenticated):
        #     return Response({"status": True, "message": "You should logout first!"})
        status = authenticate(username=username, password=password)
        if status:
            print("Logging in")
            u = User.objects.filter(username=username)[0]
            result = requests.post(url+"/../../api/token", data={'username': username, 'password': password})
            result = result.json()
            userobj ={ 
                'user': [
                    {
                        'tokens': {
                            'access_token': result['access'],
                            'refresh_token': result['refresh'],
                        },
                    },
                    {
                        'details': {
                            'user_id': u.id,
                            'username': u.username,
                            'user_email': u.email,
                            'isAuth': True
                        }
                    }
                ]
            }
            return Response({"status": True, "message": "Login Successful!!", "user": userobj})
        else:
            print("Login Failed")
            return Response({"status": False, "message": "Invalid Credentials.!"})

class RegisterView(APIView):
    def get(self, request):
        print("register get", request.query_params)
        return Response({"status": True, "message": "GET, World!"})
    
    def post(self, request):
        print(request.data)
        url = request.build_absolute_uri()
        displayData = request.data
        print("IN CREATE")
        if User.objects.filter(username=displayData['username']).exists():
            return Response({"status": False, "message": "Username Already Exists.!"})
        elif User.objects.filter(email=displayData['email']).exists():
            return Response({"status": False, "message": "Email Already Exists.!"})
        elif Profile.objects.filter(phone=displayData['phone']).exists():
            return Response({"status": False, "message": "Phone Number Already Exists.!"})
        else:
            u = User.objects.create_user(username=displayData['username'], first_name=displayData['first_name'], last_name=displayData['last_name'], email=displayData['email'], password=displayData['password'])
            Profile.objects.create(user=u, college_name=displayData['college'], branch=displayData['branch'],
            phone=displayData['phone'], year_of_study=displayData['year'], gender=displayData['gender'])
            result = requests.post(url+"/../../api/token", data={'username': displayData['username'], 'password': displayData['password']})
            result = result.json()
            userobj ={ 
                'user': [
                    {
                        'tokens': {
                        'access_token': result['access'],
                        'refresh_token': result['refresh'],
                        },
                    },
                    {
                        'details': {
                        'user_id': u.id,
                        'username': u.username,
                        'user_email': u.email,
                        'isAuth': True
                        }
                    }
                ]
            }
            return Response({"status": True, "message": "Login Successful!!", "csrftoken": get_token(request), "user": userobj})

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

class UpdateView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        print("update get", request.query_params)
        return Response({"status": True, "message": "GET, World!"})
    
    def post(self, request):
        print(request.data)
        username = request.data.get('username')
        userObj = User.objects.get(username=username)
        # check if user with this email exist or not
        if User.objects.filter(email=request.data.get('email')).exclude(id=userObj.id).exists():
            return Response({"status": False, "message": "Account with that email already exists.!"})
        profileObj = Profile.objects.get(user=userObj)
        userObj.first_name = request.data.get('first_name')
        userObj.last_name = request.data.get('last_name')
        userObj.email = request.data.get('email')
        profileObj.year_of_study = request.data.get('year')
        profileObj.college_name = request.data.get('college')
        profileObj.branch = request.data.get('branch')
        profileObj.gender = request.data.get('gender')
        userObj.save()
        profileObj.save()
        return Response({"status": True, "message": "Profile Updated Successfully.!"})


# @authenticate_classes([TokenAuthentication])
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})
    print(request.user)
    return JsonResponse({'isAuthenticated': True})

@api_view(['GET'])
def get_csrf(request):
    print("returning csrf token")
    token = get_token(request)
    return Response({"detail": "CSRF cookie set", "csrftoken": token})