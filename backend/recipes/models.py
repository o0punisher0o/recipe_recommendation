from mongoengine import Document, StringField, ListField, ReferenceField, IntField


class User(Document):
    username = StringField(required=True, unique=True)
    email = StringField(required=True, unique=True)
    favorites = ListField(ReferenceField('Recipe'))


class Recipe(Document):
    DoesNotExist = None
    title = StringField(required=True)
    description = StringField()
    ingredients = ListField(StringField())
    instructions = StringField()
    category = StringField()
    likes = IntField(default=0)
