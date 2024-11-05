// src/components/RecipeList.js
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';


function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        fetch('/api/recipes/')
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
                setFilteredRecipes(data);
            })
            .catch(error => console.error("Ошибка загрузки рецептов:", error));
    }, []);
    const handleSearch = (query) => {
        const result = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRecipes(result);
    };

    return (
        <div>
            <h1>Список рецептов</h1>
            <SearchBar onSearch={handleSearch} />
            <ul>
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
