
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import UserProfile


class RegistrationForm(UserCreationForm):

    first_name = forms.CharField(max_length=100)
    last_name = forms.CharField(max_length=100)
    email = forms.EmailField()
    phone_number = forms.CharField(max_length=20)

    role = forms.ChoiceField(
        choices=[
            ('doctor', 'Doctor'),
            ('lab_staff', 'Laboratory Staff'),
            ('facility_staff', 'Facility Staff'),
        ],
        label="Select your role"
    )

    class Meta:
        model = User

        fields = [
            'first_name',
            'last_name',
            'username',
            'email',
            'phone_number',
            'role',
            'password1',
            'password2',
        ]

    def clean_email(self):
        email = self.cleaned_data['email'].strip().lower()

        if User.objects.filter(email__iexact=email).exists():
            raise forms.ValidationError(
                "This email address is already registered."
            )

        return email
