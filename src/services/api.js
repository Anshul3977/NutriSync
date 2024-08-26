import axios from 'axios';

// Function to fetch nutrition data
export const fetchNutritionData = async (query) => {
    try {
        const response = await axios.get('https://api.calorieninjas.com/v1/nutrition', {
            params: { query: query },
            headers: { 
                'X-Api-Key': import.meta.env.VITE_CALORIE_NINJAS_API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching nutrition data:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Function to handle user login
export const login = async (email, password) => {
    try {
        const response = await axios.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Function to handle user signup
export const signup = async (email, password) => {
    try {
        const response = await axios.post('/auth/signup', { email, password });
        return response.data;
    } catch (error) {
        console.error('Error during signup:', error.response ? error.response.data : error.message);
        throw error;
    }
};
