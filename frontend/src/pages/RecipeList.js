import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/api/recipes/')
      .then(response => {
        console.log(response.data);  // Проверка данных в консоли
        setRecipes(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Рецепты</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
