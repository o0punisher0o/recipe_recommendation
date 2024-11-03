from django.shortcuts import render
from django.http import JsonResponse
from .models import Recipe, User


def recipe_list(request):
    recipes = Recipe.objects()
    data = [{"title": recipe.title, "description": recipe.description} for recipe in recipes]
    return JsonResponse(data, safe=False)


def recipe_detail(request, recipe_id):
    try:
        recipe = Recipe.objects.get(id=recipe_id)
        data = {
            "title": recipe.title,
            "description": recipe.description,
            "ingredients": recipe.ingredients,
            "instructions": recipe.instructions
        }
        return JsonResponse(data)
    except Recipe.DoesNotExist:
        return JsonResponse({"error": "Recipe not found"}, status=404)


def user_favorites(request):
    return None