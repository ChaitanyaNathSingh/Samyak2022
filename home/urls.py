from django import views
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('test', views.test, name='test'),
    path("users", views.ProfileView.as_view(), name="profile"),
    path("payment", views.PaymentView.as_view(), name="payment"),
    path("paymentsuccess", views.PaymentSuccessView.as_view(), name="paymentsuccess"),
]