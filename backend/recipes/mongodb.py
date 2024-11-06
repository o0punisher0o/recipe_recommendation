import asyncio
from motor.motor_asyncio import AsyncIOMotorClient

# Подключение к MongoDB
cluster = AsyncIOMotorClient("mongodb+srv://toster:<password>@cluster-url.mongodb.net")
collection = cluster.tostdb.tostusers  # Замените на свою БД и коллекцию

async def get_recipe_by_title(title):
    """Функция для поиска рецепта по названию."""
    document = await collection.find_one({"title": title})
    return document
