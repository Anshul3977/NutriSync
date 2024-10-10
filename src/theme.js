// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#555B6E',  // Hampy-like dark color
    },
    secondary: {
      main: '#FFD6BA',  // Light orange/peach accent
    },
    background: {
      default: '#FAF9F9', // Light background
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          padding: '12px 25px',
          textTransform: 'none',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 15px 25px rgba(0,0,0,0.2)',
          },
        },
      },
    },
  },
});

export default theme;
