from django.shortcuts import render
from django.views import generic
from django.contrib.auth.mixins import LoginRequiredMixin


# Create your views here.

class Principal(LoginRequiredMixin, generic.TemplateView):
    template_name = 'usuarios/principal.html'
    login_url='usuarios:login'
