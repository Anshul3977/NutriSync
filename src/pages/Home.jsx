// Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NutritionLookup from '../components/NutritionLookup';
import { Button, Container, Typography, Box, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [nutritionData, setNutritionData] = useState(null);
  const [recipes, setRecipes] = useState(null);

  const handleNutritionLookup = (data) => {
    setNutritionData(data);
  };

  const handleRecipeSearch = (data) => {
    setRecipes(data);
  };

  return (
    <Container>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" color="primary" gutterBottom>
          Welcome to NutriSync
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Your personalized meal planning assistant.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faSearch} />}
          >
            Explore Recipes
          </Button>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Go to Dashboard
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Nutrition Lookup Section */}
      <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Find Nutritional Data & Recipes
        </Typography>
        <NutritionLookup onNutritionLookup={handleNutritionLookup} onRecipeSearch={handleRecipeSearch} />
        {nutritionData && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5">Nutrition Results:</Typography>
            <pre>{JSON.stringify(nutritionData, null, 2)}</pre>
          </Box>
        )}
        {recipes && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5">Recipe Results:</Typography>
            <pre>{JSON.stringify(recipes, null, 2)}</pre>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default Home;
