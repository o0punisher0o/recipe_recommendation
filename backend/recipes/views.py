from django.http import JsonResponse
from .mongodb import get_recipe_by_title
import asyncio

async def recipe_view(request):
    title = "Спагетти Болоньезе"  # Замените на нужное значение
    document = await get_recipe_by_title(title)
    return JsonResponse(document)
