# Generated by Django 3.2.9 on 2022-03-27 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_event_department_event_event_cat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='round_1_details',
            field=models.TextField(default=None, max_length=1500),
        ),
        migrations.AlterField(
            model_name='event',
            name='round_2_details',
            field=models.TextField(default=None, max_length=1500),
        ),
        migrations.AlterField(
            model_name='event',
            name='round_3_details',
            field=models.TextField(default=None, max_length=1500),
        ),
    ]
