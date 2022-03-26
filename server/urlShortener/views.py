from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404 # We will use it later

from django.http import HttpResponse 

# Create your views here.

def home_view(request):
    return HttpResponse("Hello world")