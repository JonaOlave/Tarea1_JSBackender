from django.shortcuts import render
from django.views import generic
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy


# Create your views here.

class Principal(LoginRequiredMixin, generic.TemplateView):
    template_name = 'usuarios/principal.html'
    login_url='usuarios:login'

class SignUpView(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('principal')
    template_name = 'usuarios/registro.html'