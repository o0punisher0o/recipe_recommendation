// src/components/RecipeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`/api/recipes/${recipeId}/`)
            .then(response => response.json())
            .then(data => setRecipe(data))
            .catch(error => console.error("Ошибка загрузки рецепта:", error));
    }, [recipeId]);

    if (!recipe) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <h3>Ингредиенты:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Инструкции:</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetails;
