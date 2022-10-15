from datetime import date, datetime
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

from .models import LearnathonFaculty, MSWDRubric, PFSDRubric, Profile, Event, Payment, Team, TeamLeader, TeamMember, BusinessSystem, LearnathonStudent, FacultyData
import json
import random
import requests

class FacultyLearnathonRegisterView(APIView):
    def get(self, request):
        return Response({"message": "Hello, world!"})

    def post(self, request):
        url = request.build_absolute_uri()
        empid = request.data.get('empid')
        klumailid = request.data.get('klumailid')
        faculty = FacultyData.objects.filter(empid=empid, mail_id=klumailid).exists()
        print(faculty)
        if not faculty:
            return Response({"status": False, "message": "Invalid credentials"})
        password = "Faculty@123"
        otp = random.randint(10000, 99999)
        if not User.objects.filter(username=empid).exists():
            User.objects.create_user(username=empid, email=klumailid, password=password)
            LearnathonFaculty.objects.create(empid=empid, klumailid=klumailid, otp=otp)
        else:
            LearnathonFaculty.objects.filter(empid=empid).update(otp=otp)
        result = requests.post(url+"/../../api/token", data={'username': empid, 'password': password})
        result = result.json()
        empObj = {
            "emp": [
                {
                    'tokens': {
                    'access_token': result['access'],
                    'refresh_token': result['refresh'],
                    },
                },
                {
                    "details": {
                        'empid': empid,
                        'klumailid': klumailid,
                        'isAuth': True,
                        'isVerified': False,
                    }
                }
            ]
        }
        return Response({"status": True, "message": "Successful!", "emp": empObj, "otp": otp})

class VerifyFacultyOTPView(APIView):
    def get(self, request):
        return Response({"message": "Hello, world!"})

    def post(self, request):
        empid = request.data.get('empid')
        otp = request.data.get('otp')
        print(empid, otp)
        if LearnathonFaculty.objects.filter(empid=empid, otp=otp).exists():
            LearnathonFaculty.objects.filter(empid=empid).update(is_verified=True)
            return Response({"status": True, "message": "Successful!"})
        else:
            return Response({"status": False, "message": "Invalid OTP!"})

class BusinessSystemView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        l = BusinessSystem.objects.all()
        # print(l)
        return Response({"status": True, "data": list(l.values())})

    def post(self, request):
        return Response({'message': 'Hello, world!'})

class TeamNumberGroupView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        business_system = request.query_params.get('business_system')
        subject = request.query_params.get('subject')
        l = list(LearnathonStudent.objects.filter(business_system=business_system, subject=subject).values('id', 'studentId', 'group_name'))
        # print(l)
        return Response({"status": True, "data": l})

    def post(self, request):
        return Response({'message': 'Hello, world!'})

class MarkAttendanceView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        return Response({'message': 'Hello, world!'})

    def post(self, request):
        studentIds = request.data['studentIds']
        for i in studentIds:
            student = LearnathonStudent.objects.get(id=i['id'])
            student.is_present = False
            student.updated_at = datetime.now()
            student.save()
        return Response({"status": True, "message": "Attendance marked successfully!!"})


class SaveRubricsView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        return Response({'message': 'Hello, world!'})

    def post(self, request):
        presentStudentIds = request.data['presentStudentIds']
        absentStudentIds = request.data['absentStudentIds']
        total = request.data['total']
        review_type = request.data['review_type']
        subject = request.data['subject']
        # print(studentIds)
        # print(presentStudentIds, absentStudentIds)
        # print(total, review_type, subject)
        for i in presentStudentIds:
            ls = LearnathonStudent.objects.get(id=i['id'])
            if subject == "PFSD":
                if PFSDRubric.objects.filter(student=ls).exists():
                    pfsd = PFSDRubric.objects.get(student=ls)
                    if review_type == 'review1':
                        pfsd.review1_score = total
                        pfsd.review1_time = datetime.now()
                    elif review_type == 'review2':
                        pfsd.review2_score = total
                        pfsd.review2_time = datetime.now()
                    elif review_type == 'review3':
                        pfsd.review3_score = total
                        pfsd.review3_time = datetime.now()
                    elif review_type == 'review4':
                        pfsd.review4_score = total
                        pfsd.review4_time = datetime.now()
                    pfsd.save()
                else:
                    if review_type == 'review1':
                        PFSDRubric.objects.create(student=ls, review1_score=total, review1_time=datetime.now())
                    elif review_type == 'review2':
                        PFSDRubric.objects.create(student=ls, review2_score=total, review2_time=datetime.now())
                    elif review_type == 'review3':
                        PFSDRubric.objects.create(student=ls, review3_score=total, review3_time=datetime.now())
                    elif review_type == 'review4':
                        PFSDRubric.objects.create(student=ls, review4_score=total, review4_time=datetime.now())
            else:
                if MSWDRubric.objects.filter(student=ls).exists():
                    mswd = MSWDRubric.objects.get(student=ls)
                    if review_type == 'review1':
                        mswd.review1_score = total
                        mswd.review1_time = datetime.now()
                    elif review_type == 'review2':
                        mswd.review2_score = total
                        mswd.review2_time = datetime.now()
                    elif review_type == 'review3':
                        mswd.review3_score = total
                        mswd.review3_time = datetime.now()
                    elif review_type == 'review4':
                        mswd.review4_score = total
                        mswd.review4_time = datetime.now()
                    mswd.save()
                else:
                    if review_type == 'review1':
                        MSWDRubric.objects.create(student=ls, review1_score=total, review1_time=datetime.now())
                    elif review_type == 'review2':
                        MSWDRubric.objects.create(student=ls, review2_score=total, review2_time=datetime.now())
                    elif review_type == 'review3':
                        MSWDRubric.objects.create(student=ls, review3_score=total, review3_time=datetime.now())
                    elif review_type == 'review4':
                        MSWDRubric.objects.create(student=ls, review4_score=total, review4_time=datetime.now())
        for i in absentStudentIds:
            ls = LearnathonStudent.objects.get(id=i['id'])
            if subject == "PFSD":
                if PFSDRubric.objects.filter(student=ls).exists():
                    pfsd = PFSDRubric.objects.get(student=ls)
                    if review_type == 'review1':
                        pfsd.review1_score = 0
                        pfsd.review1_time = datetime.now()
                    elif review_type == 'review2':
                        pfsd.review2_score = 0
                        pfsd.review2_time = datetime.now()
                    elif review_type == 'review3':
                        pfsd.review3_score = 0
                        pfsd.review3_time = datetime.now()
                    elif review_type == 'review4':
                        pfsd.review4_score = 0
                        pfsd.review4_time = datetime.now()
                    pfsd.save()
                else:
                    if review_type == 'review1':
                        PFSDRubric.objects.create(student=ls, review1_score=0, review1_time=datetime.now())
                    elif review_type == 'review2':
                        PFSDRubric.objects.create(student=ls, review2_score=0, review2_time=datetime.now())
                    elif review_type == 'review3':
                        PFSDRubric.objects.create(student=ls, review3_score=0, review3_time=datetime.now())
                    elif review_type == 'review4':
                        PFSDRubric.objects.create(student=ls, review4_score=0, review4_time=datetime.now())
            else:
                if MSWDRubric.objects.filter(student=ls).exists():
                    mswd = MSWDRubric.objects.get(student=ls)
                    if review_type == 'review1':
                        mswd.review1_score = 0
                        mswd.review1_time = datetime.now()
                    elif review_type == 'review2':
                        mswd.review2_score = 0
                        mswd.review2_time = datetime.now()
                    elif review_type == 'review3':
                        mswd.review3_score = 0
                        mswd.review3_time = datetime.now()
                    elif review_type == 'review4':
                        mswd.review4_score = 0
                        mswd.review4_time = datetime.now()
                    mswd.save()
                else:
                    if review_type == 'review1':
                        MSWDRubric.objects.create(student=ls, review1_score=0, review1_time=datetime.now())
                    elif review_type == 'review2':
                        MSWDRubric.objects.create(student=ls, review2_score=0, review2_time=datetime.now())
                    elif review_type == 'review3':
                        MSWDRubric.objects.create(student=ls, review3_score=0, review3_time=datetime.now())
                    elif review_type == 'review4':
                        MSWDRubric.objects.create(student=ls, review4_score=0, review4_time=datetime.now())
        return Response({"status": True, "message": "Rubrics saved successfully!!"})