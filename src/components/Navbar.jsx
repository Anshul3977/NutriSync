import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box, Switch } from '@mui/material'; // Importing Material UI components
import './Navbar.css'; // You can keep some custom styling if necessary

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
    <AppBar position="static" color={darkMode ? "default" : "primary"}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" color="inherit">
            NutriSync
          </Typography>
        </Box>
        <Box>
          <Button component={Link} to="/" color="inherit" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button component={Link} to="/login" color="inherit" sx={{ mx: 1 }}>
            Login
          </Button>
          <Button component={Link} to="/signup" color="inherit" sx={{ mx: 1 }}>
            Signup
          </Button>
        </Box>
        <Box>
          <Typography variant="body2" color="inherit" sx={{ mr: 1 }}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Typography>
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            color="default"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
