from django.contrib import admin
from .models import BusinessSystem, FacultyData, LearnathonFaculty, LearnathonStudent, MSWDRubric, PFSDRubric, Profile, Event, Payment, Team, TeamLeader, TeamMember,RegisteredEvent
from import_export.admin import ImportExportModelAdmin
from import_export import resources, fields
from django.contrib.auth.models import User

# Register your models here.


class TeamAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('id', 'fullname', 'wing',
                    'designation', 'gmail', 'is_paid')
    list_filter = ('designation', 'wing', 'is_paid')
    search_fields = ('id', 'fullname', 'wing', 'designation', 'gmail')
    ordering = ['id', 'fullname', 'wing', 'designation', 'gmail', 'is_paid']
    save_as = True
    save_on_top = True


admin.site.register(Team, TeamAdmin)


class RegisteredEventAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('user', 'student_id', 'first_name', 'last_name', 'email', 'phone', 'event_name', 'Event_type', 'Event_date', 'Event_venue')
    list_filter = ('event',)
    search_fields = ['student_id', 'first_name', 'last_name', 'event_name', 'email', 'phone', ]
    ordering = ['student_id', 'first_name', 'last_name', 'email', 'phone', 'event_name']

    def Event_type(self, obj):
        return obj.event.event_type

    def Event_date(self, obj):
        return obj.event.date

    def Event_venue(self, obj):
        return obj.event.venue


admin.site.register(RegisteredEvent, RegisteredEventAdmin)

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
        exclude = ('user', 'id', 'gender', 'created_at',
                   'updated_at', 'is_verified')


class ProfileAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = ProfileResource
    list_display = ('user', 'first_name', 'last_name', 'email', 'phone',
                    'branch', 'year_of_study', 'college_name', 'gender', 'is_verified', 'userpaymentstatus')
    list_filter = ('branch', 'gender', 'year_of_study')
    search_fields = ['user__username', 'user__email',
                     'user__first_name', 'user__last_name', 'user__profile__phone']
    ordering = ['user__username', 'branch',
                'year_of_study', 'college_name', 'gender']
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

    def userpaymentstatus(self, obj):
        return Payment.objects.get(user=obj.user).payment_status


admin.site.register(Profile, ProfileAdmin)


class EventResource(resources.ModelResource):

    class Meta:
        model = Event
        skip_unchanged = True
        report_skipped = True
        import_id_fields = ['name']
        exclude = ('id',)


class EventAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = EventResource
    list_display = ('name', 'team_size', 'event_cat',
                    'department', 'event_type', 'date', 'venue')
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
        exclude = ('receipt_id', 'payment_mode')
        import_id_fields = ['user_id']


class PaymentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = PaymentResource
    list_display = ('user', 'firstname', 'lastname', 'receipt_id', 'email', 'userdepartment',
                    'phone', 'transaction_amount', 'payment_status', 'payment_time', 'mojo_id')
    list_filter = ('payment_status', 'user__profile__branch', 'user__profile__year_of_study')
    search_fields = ('user__username', 'user__email', 'user__first_name',
                     'user__last_name', 'user__profile__phone', 'mojo_id')
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
    
    def userdepartment(self, obj):
        return obj.user.profile.branch


admin.site.register(Payment, PaymentAdmin)

# admin.site.register(TeamLeader)
# admin.site.register(TeamMember)

class TeamLeaderResource(resources.ModelResource):
    studentid = fields.Field(column_name='Username')
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
        model = TeamLeader
        exclude = ('user', 'id', 'gender', 'created_at',
                   'updated_at', 'is_verified')


class TeamLeaderAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = TeamLeaderResource
    list_display = ('username', 'first_name', 'last_name', 'email', 'phoneno',
                    'college_name', 'gender', 'game_type', 'team_count', 'is_verified', 'payment_status', 'otp')
    list_filter = ('gender', 'game_type', 'payment_status')
    search_fields = ['user__username', 'user__email',
                     'user__first_name', 'user__last_name', 'phoneno']
    ordering = ['user__username', 'college_name', 'gender']
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


admin.site.register(TeamLeader, TeamLeaderAdmin)


class TeamMemberResource(resources.ModelResource):
    class Meta:
        model = TeamMember
        skip_unchanged = True
        report_skipped = True


class TeamMemberAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = TeamMemberResource
    list_display = ('username', 'team_leader', 'first_name', 'last_name')
    search_fields = ('username', 'first_name', 'last_name',
                     'team_leader_id__user__username')
    save_as = True
    save_on_top = True


admin.site.register(TeamMember, TeamMemberAdmin)