from django.urls import path
from . import views


urlpatterns = [
    path('recipes/', views.recipe_list, name='recipe_list'),
    path('recipes/<str:recipe_id>/', views.recipe_detail, name='recipe_detail'),
    path('users/<str:username>/favorites/', views.user_favorites, name='user_favorites'),
]
