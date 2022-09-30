from django.contrib import admin
from .models import Profile, Event, Payment, Team
from import_export.admin import ImportExportModelAdmin
from import_export import resources, fields
from django.contrib.auth.models import User

# Register your models here.

class TeamAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('id', 'fullname', 'wing', 'designation', 'gmail', 'is_paid')
    list_filter = ('designation', 'wing', 'is_paid')
    search_fields = ('id', 'fullname', 'wing', 'designation', 'gmail')
    ordering = ['id', 'fullname', 'wing', 'designation', 'gmail', 'is_paid']
    save_as = True
    save_on_top = True


admin.site.register(Team, TeamAdmin)

class ProfileResource(resources.ModelResource):
    studentid = fields.Field(column_name='Id Number')
    fname = fields.Field(column_name='First name')
    lname = fields.Field(column_name='Last name')
    email = fields.Field(column_name='Email')

    def dehydrate_studentid(self, obj):
        return obj.user.username

    def dehydrate_fname(self, obj):
        return obj.user.first_name

    def dehydrate_lname(self, obj):
        return obj.user.last_name

    def dehydrate_email(self, obj):
        return obj.user.email

    class Meta:
        model = Profile
        exclude = ('user', 'id', 'gender', 'created_at','updated_at', 'is_verified')


class ProfileAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = ProfileResource
    list_display = ('user', 'first_name', 'last_name', 'email', 'phone', 'branch', 'year_of_study', 'college_name', 'gender', 'is_verified')
    list_filter = ('branch', 'gender', 'year_of_study')
    search_fields = ['user__username', 'user__email', 'user__first_name', 'user__last_name', 'user__profile__phone']
    ordering = ['user__username', 'branch', 'year_of_study', 'college_name', 'gender']
    save_as = True
    save_on_top = True

    def email(self, obj):
        return obj.user.email

    def username(self, obj):
        return obj.user.username

    def first_name(self, obj):
        return obj.user.first_name

    def last_name(self, obj):
        return obj.user.last_name


admin.site.register(Profile, ProfileAdmin)

class EventAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('name', 'team_size', 'event_cat', 'department','event_type', 'date', 'venue')
    list_filter = ('event_type', 'team_size', 'venue')
    search_fields = ('name', 'team_size', 'event_type', 'date', 'venue')
    ordering = ['name', 'team_size', 'event_type', 'date', 'venue']
    save_as = True
    save_on_top = True


admin.site.register(Event, EventAdmin)

class PaymentResource(resources.ModelResource):
    id = fields.Field(column_name='Id Number')
    fname = fields.Field(column_name='First name')
    lname = fields.Field(column_name='Last name')
    email = fields.Field(column_name='Email')
    phone = fields.Field(column_name='Phone')
    yos = fields.Field(column_name='Year of Study')

    def dehydrate_id(self, obj):
        return obj.user.username

    def dehydrate_fname(self, obj):
        return obj.user.first_name

    def dehydrate_lname(self, obj):
        return obj.user.last_name

    def dehydrate_email(self, obj):
        return obj.user.email

    def dehydrate_phone(self, obj):
        j = Profile.objects.filter(user=obj.user)
        if len(j) == 0:
            return " "
        else:
            return obj.user.profile.phone

    def dehydrate_yos(self, obj):
        j = Profile.objects.filter(user=obj.user)
        if len(j) == 0:
            return " "
        else:
            return obj.user.profile.year_of_study

    class Meta:
        model = Payment
        exclude = ('user', 'receipt_id', 'payment_mode')

class PaymentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = PaymentResource
    list_display = ('user', 'firstname', 'lastname', 'receipt_id', 'email', 'phone', 'transaction_amount', 'payment_status', 'payment_time', 'mojo_id')
    list_filter = ('payment_status',)
    search_fields = ('user__username', 'user__email', 'user__first_name', 'user__last_name', 'user__profile__phone', 'mojo_id')
    ordering = ['user', 'receipt_id', 'payment_time']
    save_as = True
    save_on_top = True

    def firstname(self, obj):
        return obj.user.first_name

    def lastname(self, obj):
        return obj.user.last_name

    def email(self, obj):
        return obj.user.email

    def phone(self, obj):
        return obj.user.profile.phone


admin.site.register(Payment, PaymentAdmin)
