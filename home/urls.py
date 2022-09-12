from django import views
from django.contrib import admin
from django.urls import path
from . import views
from . import joinview

urlpatterns = [
    path('', views.home, name='home'),
    path('test', views.test, name='test'),
    path('login', joinview.LoginView.as_view(), name='login'),
    path('register', joinview.RegisterView.as_view(), name='register'),
    path('logout', joinview.LogoutView.as_view(), name='logout'),
    path("profile", views.ProfileView.as_view(), name="profile"),
    path("session", joinview.session_view, name="session"),
    path("csrf", joinview.get_csrf, name="csrf"),
    path("payment", views.PaymentView.as_view(), name="payment"),
    path("paymentsuccess", views.PaymentSuccessView.as_view(), name="paymentsuccess"),
]