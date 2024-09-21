import { useState } from 'react';
import { fetchNutritionData } from '../services/api';
import './NutritionLookup.css'; // Ensure this file is updated

function NutritionLookup() {
  const [query, setQuery] = useState('');
  const [nutritionData, setNutritionData] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const handleTextSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchNutritionData(query);
      setNutritionData(data.items);
      setError(null);
    } catch (err) {
      setError('Failed to fetch nutrition data. Please try again.');
      setNutritionData(null);
    }
  };

  const handleRecipeSearch = async () => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'ZHmsOg4G8dwOtoXEcfI/ng==GeaW5iuUKuzluYl3',
        },
      });
      const data = await response.json();
      setRecipes(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch recipes. Please try again.');
      setRecipes([]);
    }
  };

  return (
    <div className="nutrition-lookup">
      <h1>Nutrition Lookup</h1>

      {/* Nutrition Lookup Search */}
      <form onSubmit={handleTextSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter food items, e.g., carrots, chicken sandwich"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search Nutrition</button>
      </form>

      {error && <p className="error">{error}</p>}

      {/* Nutrition Information */}
      {nutritionData && (
        <div className="nutrition-info fade-in">
          <h2>Nutrition Information</h2>
          <div className="nutrition-grid">
            {nutritionData.map((item, index) => (
              <div key={index} className="nutrition-card">
                <h4 className="nutrition-name">{item.name}</h4>
                <p><strong>Calories:</strong> {item.calories} kcal</p>
                <p><strong>Protein:</strong> {item.protein_g}g</p>
                <p><strong>Carbs:</strong> {item.carbohydrates_total_g}g</p>
                <p><strong>Fat:</strong> {item.fat_total_g}g</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recipe Search */}
      <div className="recipe-search">
        <input
          type="text"
          placeholder="Enter a dish name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleRecipeSearch} className="search-button">Search Recipes</button>

        {recipes.length > 0 && (
          <div className="recipe-results slide-in">
            <h4>Recipes</h4>
            <div className="recipe-grid">
              {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card">
                  <h5 className="recipe-title">{recipe.title}</h5>
                  <p className="recipe-ingredients"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                  <p className="recipe-instructions"><strong>Instructions:</strong> {recipe.instructions}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NutritionLookup;
