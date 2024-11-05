// src/components/RecipeList.js
import React, { useEffect, useState } from 'react';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('/api/recipes/')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error("Ошибка загрузки рецептов:", error));
    }, []);

    return (
        <div>
            <h1>Список рецептов</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
