from django.urls import path
from . import views

urlpatterns = [
    path('api/recipe/', views.recipe_view, name='recipe-view'),
]
