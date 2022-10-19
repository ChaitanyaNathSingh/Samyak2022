# Generated by Django 4.1.2 on 2022-10-13 19:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0014_profile_is_verified_profile_otp'),
    ]

    operations = [
        migrations.CreateModel(
            name='TeamLeader',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phoneno', models.CharField(default=999999999, max_length=10)),
                ('college_name', models.CharField(default=None, max_length=30)),
                ('gender', models.CharField(max_length=6)),
                ('game_type', models.CharField(default=None, max_length=100)),
                ('team_count', models.IntegerField(default=0)),
                ('payment_status', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterField(
            model_name='payment',
            name='transaction_amount',
            field=models.IntegerField(default=480),
        ),
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(default=None, max_length=100)),
                ('first_name', models.CharField(default=None, max_length=100)),
                ('last_name', models.CharField(default=None, max_length=100)),
                ('payment_status', models.BooleanField(default=False)),
                ('team_leader', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teamleader', to='home.teamleader')),
            ],
        ),
        migrations.CreateModel(
            name='SportPayment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('receipt_id', models.CharField(max_length=100)),
                ('mojo_id', models.CharField(max_length=100)),
                ('transaction_amount', models.IntegerField(default=1150)),
                ('payment_status', models.BooleanField(default=False)),
                ('payment_time', models.DateTimeField(auto_now=True)),
                ('team_leader', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='home.teamleader')),
            ],
        ),
    ]