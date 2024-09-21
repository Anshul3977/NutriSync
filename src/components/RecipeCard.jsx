import React from 'react';
import './RecipeCard.css'; // Ensure the styles are imported

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image || 'https://via.placeholder.com/150'} alt={recipe.title} />
      <div className="recipe-info">
        <h3>{recipe.title}</h3>
        <p>{recipe.description || 'No description available.'}</p>
        <button>View Recipe</button>
      </div>
    </div>
  );
}

export default RecipeCard;
