# from django.contrib import admin
from django.urls import path
from citizenship import views
from utilis import file_validation

urlpatterns = [
    
    path('', views.index, name='index'),
    path('verify/', views.verify, name='verify'),
    # Citizenship Details Submission
    path('citizenship_details/', views.citizenship_details, name='citizenship_details'),
    
    # Validate Video Frames and Audio Data
    path('citizenship_validate/', file_validation.citizenship_validate, name='citizenship_validate')
 
]
