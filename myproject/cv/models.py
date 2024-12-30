from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Personcv(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None ,related_name='personcvs')
    # person details
    fullname = models.CharField(max_length=100)
    dateofbirth = models.CharField(max_length=20)
    sex = models.CharField(max_length=10)
    state = models.CharField(max_length=20)
    lga = models.CharField(max_length=100)
    maritalstatus = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    phonenumber = models.CharField(max_length=30) 
    cvemail = models.CharField(max_length=1000)
    
    #INSTITUTION ATTENDED
    institution = models.JSONField()
    qualification = models.JSONField()
    instituteyear = models.JSONField()
    
    
    #QUALIFICATION OBTAINED
    coursestudy = models.JSONField()
    qualificationin = models.JSONField()
    yearcomploted = models.JSONField()
    
    #WORK EXPERIENCE
    organizationname = models.JSONField()
    organizationaddress = models.JSONField()
    Position = models.JSONField()
    dailytask = models.JSONField()
    yearfrom  = models.JSONField()
    yearto = models.JSONField()
    
    #PROJECT
    projecttitle = models.JSONField()
    projectdate = models.JSONField()
    projectrole = models.JSONField()
    ProjectDescription = models.JSONField()
    
    #CERTIFICATION OBTAINED WITH DATE
    nameofcertification = models.JSONField()
    dateofcertification = models.JSONField()
    
    #SKILLS
    skills = models.JSONField()
    
    #languages
    languages = models.JSONField()
    
    #hobbies
    hobbies = models.JSONField()
    
    #REFERENCES
    refereename = models.JSONField()
    refereetitle = models.JSONField()
    refereeorganization = models.JSONField()
    refereeaddress = models.JSONField()
    referee_email = models.JSONField()
    
