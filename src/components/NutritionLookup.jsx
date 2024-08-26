import { useState } from 'react';
import { fetchNutritionData } from '../services/api';

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
        <div>
            <h1>Nutrition Lookup</h1>

            {}
            <form onSubmit={handleTextSearch}>
                <input
                    type="text"
                    placeholder="Enter food items, e.g., 3lb carrots and a chicken sandwich"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search Nutrition</button>
            </form>

            {error && <p>{error}</p>}

            {nutritionData && (
                <div>
                    <h2>Nutrition Information</h2>
                    <ul>
                        {nutritionData.map((item, index) => (
                            <li key={index}>
                                <strong>{item.name}</strong>: {item.calories} calories, {item.protein_g}g protein, {item.carbohydrates_total_g}g carbs, {item.fat_total_g}g fat
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {}
            <div className="recipe-search">
                <input
                    type="text"
                    placeholder="Enter a dish name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleRecipeSearch}>Search Recipes</button>
                {recipes.length > 0 && (
                    <div className="recipe-results">
                        <h4>Recipes</h4>
                        <ul>
                            {recipes.map((recipe, index) => (
                                <li key={index}>
                                    <h5>{recipe.title}</h5>
                                    <p>{recipe.ingredients}</p>
                                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NutritionLookup;
