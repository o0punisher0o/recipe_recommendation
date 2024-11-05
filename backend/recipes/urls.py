from django.urls import path
from . import views


urlpatterns = [
    path('api/recipes/', views.get_recipes, name='get_recipes'),
    path('recipes/<str:recipe_id>/', views.recipe_detail, name='recipe_detail'),
    path('users/<str:username>/favorites/', views.user_favorites, name='user_favorites'),
]
