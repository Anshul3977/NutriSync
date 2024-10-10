import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NutritionLookup from '../components/NutritionLookup';
import { Button, Container, Typography, Box, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import './Home.css'; // Import the updated CSS

function Home() {
  const [nutritionData, setNutritionData] = useState(null);
  const [recipes, setRecipes] = useState(null);

  const heroTextRef = useRef(null);
  const buttonGroupRef = useRef(null);

  useEffect(() => {
    // GSAP Animations for smooth entry
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
    gsap.fromTo(
      buttonGroupRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power3.out' }
    );
  }, []);

  const handleNutritionLookup = (data) => {
    setNutritionData(data);
  };

  const handleRecipeSearch = (data) => {
    setRecipes(data);
  };

  return (
    <Container maxWidth="lg" className="home-container" sx={{ mt: 4 }}>
      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100vh',
        }}
      >
        <Typography ref={heroTextRef} variant="h2" color="primary" gutterBottom>
          Welcome to NutriSync
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Your personalized meal planning assistant.
        </Typography>
        <Box
          ref={buttonGroupRef}
          sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}
        >
          <Button
            variant="contained"
            color="primary"
            className="explore-btn"
            startIcon={<FontAwesomeIcon icon={faSearch} />}
          >
            Explore Recipes
          </Button>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="secondary"
              className="dashboard-btn"
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Go to Dashboard
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Nutrition Lookup Section */}
      <Paper elevation={3} className="lookup-section">
        <Typography variant="h4" color="primary" gutterBottom>
          Find Nutritional Data & Recipes
        </Typography>
        <NutritionLookup
          onNutritionLookup={handleNutritionLookup}
          onRecipeSearch={handleRecipeSearch}
        />
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
