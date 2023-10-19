from django.contrib import admin
from .models import BusinessSystem, FacultyData, LearnathonFaculty, LearnathonStudent, MSWDRubric, PFSDRubric, Profile, Event, Payment, Team, TeamLeader, TeamMember
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
















# LEARNATHON (15/10/2022) (STUDENT ATTENDANCE and REMARKS)
class LearnathonFacultyAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('empid', 'klumailid', 'otp', 'is_verified')
    search_fields = ('empid', 'klumailid')
    save_as = True
    save_on_top = True
admin.site.register(LearnathonFaculty, LearnathonFacultyAdmin)

class BusinessSystemResource(resources.ModelResource):
    class Meta:
        model = BusinessSystem
        import_id_fields = ['num']
        skip_unchanged = True
        report_skipped = True
class BusinessSystemAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = BusinessSystemResource
    list_display = ('num', 'name', 'full_name')
    search_fields = ('num', 'name', 'full_name')
    save_as = True
    save_on_top = True
admin.site.register(BusinessSystem, BusinessSystemAdmin)

class LearnathonStudentResource(resources.ModelResource):
    class Meta:
        model = LearnathonStudent
        exclude = ('id',)
        skip_unchanged = True
        report_skipped = True
class LearnathonStudentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('studentId', 'group_name', 'cluster', 'business_system', 'branch', 'subject', 'is_absent', 'updated_at')
    search_fields = ('studentId', 'group_name', 'cluster', 'business_system_id__num', 'business_system_id__name', 'branch', 'subject', 'is_absent')
    list_filter = ('is_absent', 'cluster', 'branch', 'subject')
    save_as = True
    save_on_top = True
admin.site.register(LearnathonStudent, LearnathonStudentAdmin)

class FacultyDataResource(resources.ModelResource):
    class Meta:
        model = FacultyData
        import_id_fields = ['empid']
        skip_unchanged = True

        report_skipped = True
class FacultyDataAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = FacultyDataResource
    list_display = ('empid', 'mail_id', 'name')
    search_fields = ('empid', 'mail_id', 'name')
    save_as = True
    save_on_top = True
admin.site.register(FacultyData, FacultyDataAdmin)


class MSWDRubricResource(resources.ModelResource):
    studentId = fields.Field(column_name='Id Number')
    groupName = fields.Field(column_name='Group Name')
    review1Score = fields.Field(column_name='Review1 Score')
    review1Total = fields.Field(column_name='Review1 Total')
    review1Time = fields.Field(column_name='Review1 Time')
    review2Score = fields.Field(column_name='Review2 Score')
    review2Total = fields.Field(column_name='Review2 Total')
    review2Time = fields.Field(column_name='Review2 Time')
    review3Score = fields.Field(column_name='Review3 Score')
    review3Total = fields.Field(column_name='Review3 Total')
    review3Time = fields.Field(column_name='Review3 Time')
    review4Score = fields.Field(column_name='Review4 Score')
    review4Total = fields.Field(column_name='Review4 Total')
    review4Time = fields.Field(column_name='Review4 Time')
    def dehydrate_studentId(self, obj):
        return obj.student.studentId
    def dehydrate_groupName(self, obj):
        return obj.student.group_name
    def dehydrate_review1Score(self, obj):
        return obj.review1_score
    def dehydrate_review1Total(self, obj):
        return obj.review1_total
    def dehydrate_review1Time(self, obj):
        return obj.review1_time
    def dehydrate_review2Score(self, obj):
        return obj.review2_score
    def dehydrate_review2Total(self, obj):
        return obj.review2_total
    def dehydrate_review2Time(self, obj):
        return obj.review2_time
    def dehydrate_review3Score(self, obj):
        return obj.review3_score
    def dehydrate_review3Total(self, obj):
        return obj.review3_total
    def dehydrate_review3Time(self, obj):
        return obj.review3_time
    def dehydrate_review4Score(self, obj):
        return obj.review4_score
    def dehydrate_review4Total(self, obj):
        return obj.review4_total
    def dehydrate_review4Time(self, obj):
        return obj.review4_time
    class Meta:
        model = MSWDRubric
        fields = ('studentId', 'group_name', 'review1_score', 'review1_total', 'review1_time', 'review2_score', 'review2_total', 'review2_time', 'review3_score', 'review3_total', 'review3_time', 'review4_score', 'review4_total', 'review4_time')
        skip_unchanged = True
        report_skipped = True
        exclude = ('id', 'updated_at', 'created_at')
class MSWDRubricAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = MSWDRubricResource
    list_display = ('studentID', 'groupName', 'review1_score', 'review1_total', 'review1_time', 'review2_score', 'review2_total', 'review2_time', 'review3_score', 'review3_total', 'review3_time', 'review4_score', 'review4_total', 'review4_time')
    search_fields = ('review1_score', 'review1_total', 'review2_score', 'review2_total', 'review3_score', 'review3_total', 'review4_score', 'review4_total')
    save_as = True
    save_on_top = True
    def studentID(self, obj):
        return obj.student.studentId
    def groupName(self, obj):
        return obj.student.group_name
admin.site.register(MSWDRubric, MSWDRubricAdmin)


class PFSDRubricResource(resources.ModelResource):
    studentId = fields.Field(column_name='Id Number')
    groupName = fields.Field(column_name='Group Name')
    review1Score = fields.Field(column_name='Review1 Score')
    review1Total = fields.Field(column_name='Review1 Total')
    review1Time = fields.Field(column_name='Review1 Time')
    review2Score = fields.Field(column_name='Review2 Score')
    review2Total = fields.Field(column_name='Review2 Total')
    review2Time = fields.Field(column_name='Review2 Time')
    review3Score = fields.Field(column_name='Review3 Score')
    review3Total = fields.Field(column_name='Review3 Total')
    review3Time = fields.Field(column_name='Review3 Time')
    review4Score = fields.Field(column_name='Review4 Score')
    review4Total = fields.Field(column_name='Review4 Total')
    review4Time = fields.Field(column_name='Review4 Time')
    def dehydrate_studentId(self, obj):
        return obj.student.studentId
    def dehydrate_groupName(self, obj):
        return obj.student.group_name
    def dehydrate_review1Score(self, obj):
        return obj.review1_score
    def dehydrate_review1Total(self, obj):
        return obj.review1_total
    def dehydrate_review1Time(self, obj):
        return obj.review1_time
    def dehydrate_review2Score(self, obj):
        return obj.review2_score
    def dehydrate_review2Total(self, obj):
        return obj.review2_total
    def dehydrate_review2Time(self, obj):
        return obj.review2_time
    def dehydrate_review3Score(self, obj):
        return obj.review3_score
    def dehydrate_review3Total(self, obj):
        return obj.review3_total
    def dehydrate_review3Time(self, obj):
        return obj.review3_time
    def dehydrate_review4Score(self, obj):
        return obj.review4_score
    def dehydrate_review4Total(self, obj):
        return obj.review4_total
    def dehydrate_review4Time(self, obj):
        return obj.review4_time
    class Meta:
        model = PFSDRubric
        fields = ('studentId', 'group_name', 'review1_score', 'review1_total', 'review1_time', 'review2_score', 'review2_total', 'review2_time', 'review3_score', 'review3_total', 'review3_time', 'review4_score', 'review4_total', 'review4_time')
        skip_unchanged = True
        report_skipped = True
        exclude = ('id', 'updated_at', 'created_at')
class PFSDRubricAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    resource_class = PFSDRubricResource
    list_display = ('studentID', 'groupName', 'review1_score', 'review1_total', 'review1_time', 'review2_score', 'review2_total', 'review2_time', 'review3_score', 'review3_total', 'review3_time', 'review4_score', 'review4_total', 'review4_time')
    search_fields = ('review1_score', 'review1_total', 'review2_score', 'review2_total', 'review3_score', 'review3_total', 'review4_score', 'review4_total')
    save_as = True
    save_on_top = True
    def studentID(self, obj):
        return obj.student.studentId
    def groupName(self, obj):
        return obj.student.group_name
admin.site.register(PFSDRubric, PFSDRubricAdmin)