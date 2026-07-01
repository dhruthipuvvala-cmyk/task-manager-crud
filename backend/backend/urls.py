from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def root_view(request):
    return JsonResponse({
        "message": "Task Manager API is running",
        "api_url": "/api/tasks/",
        "admin_url": "/admin/"
    })

urlpatterns = [
    path("", root_view, name="root"),
    path("admin/", admin.site.urls),
    path("api/", include("tasks.urls")),
]