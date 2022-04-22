from django.db.models import fields
from rest_framework import serializers
from .models import *
from urlShortener.models import *

class URLSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortener
        fields = [ 
            "long_url"
        ]