# yourapp/management/commands/set_common_password.py

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Set a common password for all users'

    def handle(self, *args, **options):
        common_password = 'Klef1234@'

        users = User.objects.all()
        for user in users:
            user.set_password(common_password)
            user.save()

        self.stdout.write(self.style.SUCCESS('Successfully set a common password for all users.'))
