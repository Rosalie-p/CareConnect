from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from patients.models import Patient


class Referral(models.Model):

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('completed', 'Completed'),
        ('rejected', 'Rejected'),
    ]

    patient = models.ForeignKey(
        Patient,
        on_delete=models.CASCADE,
        related_name='referrals'
    )

    referred_by = models.ForeignKey(
        User,
        on_delete=models.PROTECT,
        related_name='created_referrals'
    )

    referral_reason = models.TextField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )

    referral_date = models.DateTimeField(auto_now_add=True)

    notes = models.TextField(blank=True)

    def __str__(self):
        return f"Referral for {self.patient} - {self.status}"
