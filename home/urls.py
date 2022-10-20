from django import views
from django.contrib import admin
from django.urls import path

from home import learnathonview

from . import views
from . import joinview

urlpatterns = [
    path('', views.home, name='home'),
    path('test', views.test, name='test'),
    path('login', joinview.LoginView.as_view(), name='login'),
    path('register', joinview.RegisterView.as_view(), name='register'),
    path('logout', joinview.LogoutView.as_view(), name='logout'),
    path('update', joinview.UpdateView.as_view(), name='update'),
    path("profile", views.ProfileView.as_view(), name="profile"),
    path("sport-profile", views.SportProfileView.as_view(), name="sportprofile"),
    path("verify_otp", joinview.VerifyOTPView.as_view(), name="verify_otp"),
    path("resend_otp", joinview.ResendOTPView.as_view(), name="resend_otp"),
    path("email", joinview.EmailView.as_view(), name="email"),
    # dynamic route
    path("event/event_name", views.EventInfoView.as_view(), name="event_info"),
    path("session", joinview.session_view, name="session"),
    path("csrf", joinview.get_csrf, name="csrf"),
    path("payment", views.PaymentView.as_view(), name="payment"),
    path("paymentsuccess", views.PaymentSuccessView.as_view(), name="paymentsuccess"),
    path("sportpayment", views.SportPaymentView.as_view(), name="sportpayment"),
    path("sportpaymentsuccess", views.SportPaymentSuccessView.as_view(), name="sportpaymentsuccess"),

    path("sport-register", joinview.SportRegisterView.as_view(), name="sport-register"),
    path("sport-login", joinview.SportLoginView.as_view(), name="sport-login"),
    path("sport-team", joinview.SportTeamView.as_view(), name="add-team"), # to add new team member by team leader



    path("faculty-learnathon-register", learnathonview.FacultyLearnathonRegisterView.as_view(), name="faculty-learnathon-register"),
    path("verify-faculty-otp", learnathonview.VerifyFacultyOTPView.as_view(), name="verify-faculty-otp"),
    path("business-system", learnathonview.BusinessSystemView.as_view(), name="business-system"),
    path("team-number-group", learnathonview.TeamNumberGroupView.as_view(), name="team-number-group"),
    path("mark-attendance", learnathonview.MarkAttendanceView.as_view(), name="mark-attendance"),
    path("save-rubrics", learnathonview.SaveRubricsView.as_view(), name="save-rubrics"),
]