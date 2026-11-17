
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import login, logout
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm

from .forms import RegistrationForm
from .models import UserProfile


# USER REGISTRATION
def register(request):

    if request.method == 'POST':
        form = RegistrationForm(request.POST)

        if form.is_valid():
            user = form.save()

            UserProfile.objects.create(
                user=user,
                role=form.cleaned_data['role'],
                phone_number=form.cleaned_data['phone_number']
            )

            login(request, user)

            return redirect('profile')

    else:
        form = RegistrationForm()

    return render(request, 'accounts/register.html', {
        'form': form
    })


# USER LOGIN
def user_login(request):

    if request.method == 'POST':
        form = AuthenticationForm(
            request,
            data=request.POST
        )

        if form.is_valid():
            user = form.get_user()

            login(request, user)

            messages.success(
                request,
                'Welcome back to CareConnect!'
            )

            return redirect('profile')

        else:
            messages.error(
                request,
                'Invalid username or password.'
            )

    else:
        form = AuthenticationForm()

    return render(request, 'accounts/login.html', {
        'form': form
    })


# USER LOGOUT
def user_logout(request):

    if request.method == 'POST':
        logout(request)
        messages.success(
            request,
            'You have logged out successfully.'
        )

    return redirect('login')


# USER PROFILE
@login_required
def profile(request):

    return render(request, 'accounts/profile.html', {
        'user': request.user,
        'profile': request.user.profile
    })


# ROLE-BASED DASHBOARD REDIRECTION
def redirect_user(user):

    role = user.profile.role

    if role == 'admin':
        return redirect('admin_dashboard')

    elif role == 'doctor':
        return redirect('doctor_dashboard')

    elif role == 'lab_staff':
        return redirect('laboratory_dashboard')

    elif role == 'facility_staff':
        return redirect('facility_dashboard')

    return redirect('profile')


