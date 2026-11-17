from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponseForbidden
from django.shortcuts import render

from patients.models import Patient
from referrals.models import Referral


@login_required
def dashboard_home(request):
    try:
        profile = request.user.profile
    except Exception:
        return HttpResponseForbidden(
            "Your CareConnect profile has not been created."
        )

    dashboards = {
        'admin': 'dashboard/admin_dashboard.html',
        'doctor': 'dashboard/doctor_dashboard.html',
        'lab_staff': 'dashboard/lab_dashboard.html',
        'facility_staff': 'dashboard/facility_dashboard.html',
    }

    template = dashboards.get(profile.role)

    if not template:
        return HttpResponseForbidden("Invalid account role.")

    context = {
        'profile': profile,
        'user_count': User.objects.count(),
        'patient_count': Patient.objects.count(),
        'referral_count': Referral.objects.count(),
    }

    return render(request, template, context)
