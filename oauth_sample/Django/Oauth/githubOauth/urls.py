
from django.contrib import admin
from django.urls import path , include
from .views import *
from . import views
from dj_rest_auth.views import (LogoutView)

urlpatterns = [
    path('auth/', GithubLogin.as_view()), 
    path('logout/',LogoutView.as_view()),
    ]