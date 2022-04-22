from pydoc import resolve
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import *
from rest_framework.response import Response
from rest_framework.views import APIView
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from .models import *
from .serializers import *
from urlShortener.models import *
from rest_framework import status

class getShortenedURL(APIView):
    def post(self, request, format=None): 
        serializer = URLSerializer(data=request.data)
        if serializer.is_valid():
            shortener = Shortener(long_url = request.data['long_url'])
            shortener.save()
            return Response(data={"response": False, "error": shortener.short_url })
        
# Create your views here.
