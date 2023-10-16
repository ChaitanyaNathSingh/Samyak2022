from email.policy import default
from enum import unique
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=10, default=999999999)
    college_name = models.CharField(max_length=100)
    branch = models.CharField(max_length=20)
    year_of_study = models.TextField(max_length=15, default=1)
    gender = models.CharField(max_length=6)
    otp = models.CharField(max_length=5, default=00000)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username


class Event(models.Model):
    event_cat = models.CharField(max_length=100)
    event_type = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    name = models.CharField(default=None, primary_key=True, max_length=100)
    description = models.TextField(default=None, max_length=2000)
    guidelines = models.TextField(default=None, max_length=2000)
    no_of_rounds = models.IntegerField(default=1)
    round_1_details = models.TextField(default=None, max_length=2000)
    round_2_details = models.TextField(default=None, max_length=2000)
    round_3_details = models.TextField(default=None, max_length=2000)
    team_size = models.IntegerField(default=1)
    mode_of_conduct = models.CharField(max_length=20)
    event_core = models.CharField(max_length=50, default=None)
    event_core_phone = models.CharField(max_length=10, default=999999999)
    event_coordinator = models.CharField(max_length=50, default=None)
    event_coordinator_phone = models.CharField(
        max_length=10, default=999999999)
    cash_prize_1 = models.IntegerField(default=500)
    cash_prize_2 = models.IntegerField(default=500)
    cash_prize_3 = models.IntegerField(default=500)
    date = models.DateTimeField()
    venue = models.CharField(default='CSE Block', max_length=30)
    event_image = models.CharField(max_length=200, default=None)


class Payment(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    receipt_id = models.CharField(max_length=100)
    mojo_id = models.CharField(max_length=100)
    transaction_amount = models.IntegerField(default=480)
    payment_status = models.BooleanField(default=False)
    payment_time = models.DateTimeField(auto_now=True, blank=True)


class Team(models.Model):
    id = models.BigIntegerField(default=0, primary_key=True)
    fullname = models.CharField(default=None, max_length=100)
    department = models.CharField(default='CSE', max_length=50)
    wing = models.CharField(default=None, max_length=1000)
    designation = models.CharField(default=None, max_length=1000)
    gmail = models.CharField(default=None, max_length=1000)
    instagram = models.CharField(default=None, max_length=1000)
    twitter = models.CharField(default=None, max_length=1000)
    facebook = models.CharField(default=None, max_length=1000)
    linkedin = models.CharField(default=None, max_length=1000)
    team_image = models.ImageField(upload_to='team_data/')
    is_paid = models.BooleanField(default=False)


class TeamLeader(models.Model):
    team_name = models.CharField(max_length=100, default=None, null=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phoneno = models.CharField(max_length=10, default=999999999)
    college_name = models.CharField(max_length=30, default=None)
    gender = models.CharField(max_length=6)
    game_type = models.CharField(max_length=100, default=None)
    team_count = models.IntegerField(default=0)
    payment_status = models.BooleanField(default=False)
    otp = models.CharField(max_length=5, default=00000)
    is_verified = models.BooleanField(default=False)
    def __str__(self):
        return self.user.username


class TeamMember(models.Model):
    username = models.CharField(max_length=100, default=None)
    first_name = models.CharField(max_length=100, default=None)
    last_name = models.CharField(max_length=100, default=None)
    payment_status = models.BooleanField(default=False)
    team_leader = models.ForeignKey(
        TeamLeader, on_delete=models.CASCADE, related_name='teamleader')

    def __str__(self):
        return self.username


class SportPayment(models.Model):
    team_leader = models.OneToOneField(TeamLeader, on_delete=models.CASCADE)
    receipt_id = models.CharField(max_length=100)
    mojo_id = models.CharField(max_length=100)
    transaction_amount = models.IntegerField(default=1150)
    payment_status = models.BooleanField(default=False)
    payment_time = models.DateTimeField(auto_now=True, blank=True)





class LearnathonFaculty(models.Model):
    empid = models.CharField(max_length=100, default=None)
    klumailid = models.CharField(max_length=100, default=None)
    is_verified = models.BooleanField(default=False)
    otp = models.CharField(max_length=5, default=00000)

    def __str__(self):
        return self.empid + ' ' + self.klumailid

class BusinessSystem(models.Model):
    num = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100, default=None)
    full_name = models.CharField(max_length=100, default=None, null=True)

    def __str__(self):
        return self.num+" "+self.name

class LearnathonStudent(models.Model):
    studentId = models.CharField(max_length=100, default=None)
    group_name = models.CharField(max_length=100, default=None)
    cluster = models.IntegerField(default=0)
    business_system = models.ForeignKey(BusinessSystem, on_delete=models.CASCADE, default=None)
    branch = models.CharField(max_length=100, default=None) # CSE or CSEIT
    subject = models.CharField(max_length=100, default=None) # PFSD or MSWD
    is_absent = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return self.studentId + ' ' + self.group_name


class FacultyData(models.Model):
    empid = models.CharField(max_length=100, default=None, primary_key=True)
    name = models.CharField(max_length=100, default=None)
    mail_id = models.CharField(max_length=100, default=None) 

    def __str__(self):
        return self.empid + ' ' + self.name


class MSWDRubric(models.Model):
    student = models.ForeignKey(LearnathonStudent, on_delete=models.CASCADE)
    review1_score = models.IntegerField(default=0)
    review1_total = models.IntegerField(default=20)
    review1_time = models.DateTimeField(auto_now=False, blank=True, null=True, default=None)
    review2_score = models.IntegerField(default=0)
    review2_total = models.IntegerField(default=25)
    review2_time = models.DateTimeField(auto_now=False, blank=True, null=True, default=None)
    review3_score = models.IntegerField(default=0)
    review3_total = models.IntegerField(default=25)
    review3_time = models.DateTimeField(auto_now=False, blank=True, null=True, default=None)
    review4_score = models.IntegerField(default=0)
    review4_total = models.IntegerField(default=25)
    review4_time = models.DateTimeField(auto_now=False, blank=True, null=True, default=None)

    def __str__(self):
        return self.student.group_name

class PFSDRubric(models.Model):
    student = models.ForeignKey(LearnathonStudent, on_delete=models.CASCADE)
    review1_score = models.IntegerField(default=0)
    review1_total = models.IntegerField(default=20)
    review1_time = models.DateTimeField(auto_now=False, blank=True, null=True, default=None)
    review2_score = models.IntegerField(default=0)
    review2_total = models.IntegerField(default=20)
    review2_time = models.DateTimeField(auto_now=False, blank=True, null=True, default=None)
    review3_score = models.IntegerField(default=0)
    review3_total = models.IntegerField(default=15)
    review3_time = models.DateTimeField(auto_now=False, blank=True, null=True, default=None)
    review4_score = models.IntegerField(default=0)
    review4_total = models.IntegerField(default=20)
    review4_time = models.DateTimeField(auto_now=False, blank=True, null=True, default=None)

    def __str__(self):
        return self.student.group_name
