# Generated by Django 5.1.4 on 2024-12-12 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Personcv',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=100)),
                ('dateofbirth', models.CharField(max_length=20)),
                ('sex', models.CharField(max_length=10)),
                ('state', models.CharField(max_length=20)),
                ('lga', models.CharField(max_length=100)),
                ('maritalstatus', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=200)),
                ('phonenumber', models.CharField(max_length=30)),
                ('cvemail', models.CharField(max_length=1000)),
                ('institution', models.CharField(max_length=1000)),
                ('qualification', models.CharField(max_length=1000)),
                ('instituteyear', models.CharField(max_length=1000)),
                ('coursestudy', models.CharField(max_length=1000)),
                ('qualificationin', models.CharField(max_length=500)),
                ('yearcomploted', models.CharField(max_length=1000)),
                ('organizationname', models.CharField(max_length=500)),
                ('organizationaddress', models.CharField(max_length=500)),
                ('Position', models.CharField(max_length=500)),
                ('dailytask', models.CharField(max_length=100000)),
                ('yearfrom', models.CharField(max_length=500)),
                ('yearto', models.CharField(max_length=500)),
                ('projecttitle', models.CharField(max_length=500)),
                ('projectdate', models.CharField(max_length=500)),
                ('projectrole', models.CharField(max_length=500)),
                ('ProjectDescription', models.CharField(max_length=10000)),
                ('nameofcertification', models.CharField(max_length=500)),
                ('dateofcertification', models.CharField(max_length=500)),
                ('skills', models.CharField(max_length=500)),
                ('languages', models.CharField(max_length=500)),
                ('hobbies', models.CharField(max_length=500)),
                ('refereename', models.CharField(max_length=500)),
                ('refereetitle', models.CharField(max_length=500)),
                ('refereeorganization', models.CharField(max_length=100)),
                ('refereeaddress', models.CharField(max_length=1000)),
                ('referee_email', models.CharField(max_length=1000)),
            ],
        ),
    ]