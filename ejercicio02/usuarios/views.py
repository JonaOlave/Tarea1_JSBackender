from django.shortcuts import render
from django.views import generic
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy

# Create your views here.

class LoginUser(generic.TemplateView):
    template_name = 'usuarios/login.html'
    success_url = reverse_lazy('principal')

class Principal(LoginRequiredMixin, generic.TemplateView):
    template_name = 'usuarios/principal.html'
    login_url='/'

class Registro(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'usuarios/registro.html'