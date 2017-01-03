from rest_framework import serializers
from .models import quiz
#from .models import bingo

class quizSerializer(serializers.ModelSerializer):
    class Meta:
        model = quiz
        fields = ('quiz_number', 'question', 'answer', 'genre', 'solved')

#class bingoSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = bingo
#        fields = ('name', 'display_name')
