from django.shortcuts import render
from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer


# GET all tasks and POST a new task
class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


# GET, PUT and DELETE a single task
class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer