from mongoengine import Document, StringField, ListField, ReferenceField, IntField
from django.db import models


class User(Document):
    username = StringField(required=True, unique=True)
    email = StringField(required=True, unique=True)
    favorites = ListField(ReferenceField('Recipe'))  # Список избранных рецептов пользователя


class Recipe(Document):
    DoesNotExist = None
    title = StringField(required=True)
    description = StringField()
    ingredients = ListField(StringField())  # Список ингредиентов
    instructions = StringField()
    category = StringField()  # Категория рецепта (например, завтрак, ужин и т.д.)
    likes = IntField(default=0)  # Количество лайков

