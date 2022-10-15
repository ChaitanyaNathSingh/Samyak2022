import re
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

from .models import Profile, Event, Payment, Team, TeamLeader, TeamMember

import requests
import random

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
            p = Profile.objects.filter(user = u)[0]
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
                            'user_phone': p.phone,
                            'isAuth': True,
                            'isVerified': p.is_verified,
                            'isSports': False,
                        }
                    }
                ]
            }
            return Response({"status": True, "message": "Login Successful!!", "user": userobj})
        else:
            print("Login Failed")
            return Response({"status": False, "message": "Invalid Credentials.!"})

class RegisterView(APIView):
    def check_email_client_validity(self, email):
        if len(email) > 7:
            if re.match("^.+@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(]?)$", email) != None:
                return True
        return False
    def check_email_server_validity(self, email):
        return Profile.objects.filter(user__email=email, is_verified=True).exists()


    def get(self):
        # print("register get", request.query_params)
        return Response({"status": True, "message": "GET, World!"})
    
    def post(self, request):
        print(request.data)
        url = request.build_absolute_uri()
        displayData = request.data
        isEmailClientValid = self.check_email_client_validity(displayData['email'])
        isVerifiedEmailExist = self.check_email_server_validity(displayData['email'])
        # random 5 digit number
        otp = random.randint(10000, 99999)
        if User.objects.filter(username=displayData['username']).exists():
            return Response({"status": False, "message": "Username Already Exists.!"})
        elif not isEmailClientValid:
            return Response({"status": False, "message": "Invalid Email.!"})
        elif isVerifiedEmailExist:
            return Response({"status": False, "message": "Email Already Exists.!"})
        elif Profile.objects.filter(phone=displayData['phone']).exists():
            return Response({"status": False, "message": "Phone Number Already Exists.!"})
        else:
            u = User.objects.create_user(username=displayData['username'], first_name=displayData['first_name'], last_name=displayData['last_name'], email=displayData['email'], password=displayData['password'])
            p = Profile.objects.create(user=u, college_name=displayData['college'], branch=displayData['branch'],
            phone=displayData['phone'], year_of_study=displayData['year'], gender=displayData['gender'], otp=otp, is_verified=False)
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
                        'user_phone': p.phone,
                        'isAuth': True,
                        'isVerified': False,
                        'isSports': False,
                        }
                    }
                ]
            }
            return Response({"status": True, "message": "Login Successful!!", "user": userobj, "otp": otp})

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


class EmailView(APIView):
    def get(self, request):
        print("email get", request.query_params)
        return Response({"status": True, "message": "GET, World!"})
    def post(self, request):
        print("email post", request.data)
        data = {
            'service_id': 'service_a5xt44n',
            'template_id': 'template_w7x148g',
            'user_id': 'SRbHPun0G_wQLdZu_',
        }
        result = requests.post('https://api.emailjs.com/api/v1.0/email/send', json=data)
        print(result)
        return Response({"status": True, "message": "POST, World!"})


class VerifyOTPView(APIView):
    def post(self, request):
        print(request.data)
        username = request.data.get('username')
        userObj = User.objects.get(username=username)
        if not request.data.get('isSports'):
            profileObj = Profile.objects.get(user=userObj)
            if profileObj.otp == request.data.get('otp'):
                profileObj.is_verified = True
                profileObj.save()
                return Response({"status": True, "message": "OTP Verified.!"})
        else:
            teamLeaderObj = TeamLeader.objects.get(user=userObj)
            if teamLeaderObj.otp == request.data.get('otp'):
                teamLeaderObj.is_verified = True
                teamLeaderObj.save()
                return Response({"status": True, "message": "Sport OTP Verified.!"})
        return Response({"status": False, "message": "Invalid OTP.!"})

class ResendOTPView(APIView):
    def post(self, request):
        username = request.data.get('username')
        userObj = User.objects.get(username=username)
        profileObj = Profile.objects.get(user=userObj)
        # random 5 digit number
        otp = random.randint(10000, 99999)
        profileObj.otp = otp
        profileObj.save()
        return Response({"status": True, "message": "OTP Sent.!", "otp": otp})

class UpdateView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        # print("update get", request.query_params)
        return Response({"status": True, "message": "GET, World!"})
    
    def post(self, request):
        # print(request.data)
        username = request.data.get('username')
        userObj = User.objects.get(username=username)
        profileObj = Profile.objects.get(user=userObj)
        # check if user with this email exist or not
        if not profileObj.is_verified and Profile.objects.filter(user__email=request.data.get('email'), is_verified=True).exclude(id=userObj.id).exists():
            return Response({"status": False, "message": "Account with that email already exists.!"})
        userObj.first_name = request.data.get('first_name')
        userObj.last_name = request.data.get('last_name')
        if not profileObj.is_verified:
            userObj.email = request.data.get('email')
        profileObj.phone = request.data.get('phone')
        profileObj.year_of_study = request.data.get('year')
        profileObj.college_name = request.data.get('college')
        profileObj.branch = request.data.get('branch')
        profileObj.gender = request.data.get('gender')
        userObj.save()
        profileObj.save()
        return Response({"status": True, "message": "Profile Updated Successfully.!"})




class SportLoginView(APIView):
    def post(self, request):
        url = request.build_absolute_uri()
        username = request.data['username']
        password = request.data['password']
        status = authenticate(username=username, password=password)
        if status:
            user = User.objects.get(username=username)
            tl = TeamLeader.objects.get(user=user)
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
                            'user_id': user.id,
                            'username': user.username,
                            'user_email': user.email,
                            'user_phone': tl.phoneno,
                            'isAuth': True,
                            'isVerified': tl.is_verified,
                            'isSports': True,
                        }
                    }
                ]
            }
            return Response({"status": True, "message": "Login Successful!!", "user": userobj})
        else:
            print("Login Failed")
            return Response({"status": False, "message": "Invalid Credentials.!"})

class SportRegisterView(APIView):
    def get(self, request):
        print("sport get", request.query_params)
        return Response({"status": True, "message": "GET, World!"})
    
    def post(self, request):
        otp = random.randint(10000, 99999)
        username = request.data.get('username')
        team_name = request.data.get('teamname')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        email = request.data.get('email')
        password = request.data.get('password')
        user = User.objects.create_user(username=username, first_name=first_name, last_name=last_name, email=email, password=password)
        phoneno = request.data.get('phone')
        college_name= request.data.get('college')
        gender = request.data.get('gender')
        game_type = request.data.get('game')
        team_count = request.data.get('teamsize')
        tl = TeamLeader.objects.create(user=user, team_name=team_name, phoneno=phoneno, college_name=college_name, gender=gender, game_type=game_type, team_count=team_count, otp=otp, is_verified=False)
        url = request.build_absolute_uri()
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
                        'user_id': user.id,
                        'username': user.username,
                        'user_email': user.email,
                        'user_phone': tl.phoneno,
                        'isAuth': True,
                        'isVerified': False,
                        'isSports': True,
                    }
                }
            ]
        }
        # print(userobj)
        # TeamLeader.objects.create(user=user, phoneno=phoneno, game_type=game_type, team_count=team_count)

        return Response({"status": True, "user": userobj, "message": "Leader Registered Successfully.!", "otp": otp})

class SportTeamView(APIView): # adding team member by a team leader
    def post(self, request):
        # print("sport team post", request.data)
        data = request.data
        team_leader = TeamLeader.objects.filter(username=data['teamleader_username'])
        if len(team_leader) == 0:
            return Response({"status": False, "message": "Team Leader not found.!"})
        TeamMember.objects.create(team_leader=team_leader.first(), username=data.get('username'), first_name=data.get('first_name'), last_name=data.get('last_name'))
        return Response({"status": True, "message": "Team Member Added Successfully.!"})


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