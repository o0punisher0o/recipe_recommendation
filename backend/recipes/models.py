from djongo import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    ingredients = models.ListField()
    instructions = models.TextField()
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.title
