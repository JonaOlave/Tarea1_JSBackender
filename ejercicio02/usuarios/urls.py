from django.urls import path
from . import views

app_name = "usuarios"

urlpatterns = [
    path('', views.Inicio.as_view(), name = 'inicio')

]