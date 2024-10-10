import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // For circular menu icon
import './Navbar.css'; // Custom styling

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <AppBar position="static" className="navbar" sx={{ bgcolor: '#FF69B4', padding: '10px' }}>
      <Toolbar className="navbar-toolbar" sx={{ justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        {/* NutriSync logo at the top-left corner */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            position: 'absolute',
            left: '20px',  // Move to the left side
            color: '#fff', // Set the NutriSync text to white
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',  // Optional: Add custom font
          }}
        >
          NutriSync
        </Typography>

        {/* Centered Links with circular white background */}
        <Box className="navbar-links-container" sx={{ backgroundColor: '#fff', borderRadius: '30px', padding: '10px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button component={Link} to="/" color="inherit" className="navbar-link">
            Home
          </Button>
          <Button component={Link} to="/login" color="inherit" className="navbar-link">
            Login
          </Button>
          <Button component={Link} to="/signup" color="inherit" className="navbar-link">
            Signup
          </Button>
        </Box>

        {/* Circular Menu Icon on the right */}
        <IconButton
          edge="end"
          className="menu-icon"
          sx={{
            backgroundColor: '#fff',
            color: '#FF69B4', // Set icon color to pink initially
            borderRadius: '50%',
            position: 'absolute',
            right: '10px',
            width: '50px',
            height: '50px',
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
