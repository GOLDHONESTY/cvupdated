from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cvregister', views.cvregister, name='cvregister'),
    path('login', views.login, name='login'),
    path('register', views.register, name='register'),
    path('resu/<int:id>', views.resu, name='resu'),
    path('resu2/<int:id>', views.resu2, name='resu2'),
    path('resu3/<int:id>', views.resu3, name='resu3'),
    path('cvdownload', views.cvdownload, name='cvdownload'),
    path('logout', views.logout, name='logout'),
    #path('see/<int:id>', views.see, name='see'),

]