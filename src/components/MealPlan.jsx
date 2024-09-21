import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './MealPlan.css';

function MealPlan() {
  const [mealPlan, setMealPlan] = useState([]);
  const [meal, setMeal] = useState("");

  // Load saved meal plan from local storage (if any)
  useEffect(() => {
    const savedPlan = JSON.parse(localStorage.getItem('mealPlan'));
    if (savedPlan) {
      setMealPlan(savedPlan);
    }
  }, []);

  const addMeal = () => {
    if (meal) {
      const updatedPlan = [...mealPlan, meal];
      setMealPlan(updatedPlan);
      setMeal(""); // Clear input
      localStorage.setItem('mealPlan', JSON.stringify(updatedPlan));
    }
  };

  const removeMeal = (index) => {
    const updatedPlan = mealPlan.filter((_, i) => i !== index);
    setMealPlan(updatedPlan);
    localStorage.setItem('mealPlan', JSON.stringify(updatedPlan));
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <h2>Your Meal Plan</h2>
      <div className="mealplan-input">
        <TextField
          label="Add a meal"
          variant="outlined"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addMeal}
          sx={{ mt: 2 }}
        >
          Add Meal
        </Button>
      </div>

      {mealPlan.length > 0 ? (
        <List sx={{ mt: 2 }}>
          {mealPlan.map((mealItem, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => removeMeal(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={mealItem} />
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No meals added yet.</p>
      )}
    </Paper>
  );
}

export default MealPlan;
