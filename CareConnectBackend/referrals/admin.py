from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Referral


@admin.register(Referral)
class ReferralAdmin(admin.ModelAdmin):

    list_display = (
        'patient',
        'referred_by',
        'status',
        'referral_date',
    )

    list_filter = ('status', 'referral_date')

    search_fields = (
        'patient__first_name',
        'patient__last_name',
        'referred_by__username',
    )

    readonly_fields = ('referral_date',)
