from django.urls import path
from . import views

app_name = "usuarios"

urlpatterns = [
    path('', views.LoginUser.as_view(), name = 'login'),
    path('principal/', views.Principal.as_view(), name = 'principal'),
    path('registro/', views.Registro.as_view(), name = 'registro')

]