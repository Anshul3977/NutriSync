// RecipeCard.jsx
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: '15px', boxShadow: '5px 5px 10px rgba(0,0,0,0.1)' }}>
      <CardMedia
        component="img"
        height="140"
        image={recipe.image || 'https://via.placeholder.com/150'}
        alt={recipe.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description || 'No description available.'}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary">
            View Recipe
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
