# Generated by Django 4.1.2 on 2022-10-14 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0019_rename_name_learnathonstudent_studentid'),
    ]

    operations = [
        migrations.CreateModel(
            name='LearnathonEmployee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('empid', models.CharField(default=None, max_length=100)),
                ('klumainid', models.CharField(default=None, max_length=100)),
                ('otp', models.CharField(default=0, max_length=5)),
            ],
        ),
    ]
