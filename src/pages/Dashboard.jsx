import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import MealPlan from '../components/MealPlan'; // Import the MealPlan component

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Your Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Current Meal Plan
            </Typography>
            <MealPlan /> {/* Display the MealPlan component */}
          </Paper>
        </Grid>

        {/* Other sections */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Nutrition Stats
            </Typography>
            <Typography>Track your calories, protein, carbs, and fats here.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
