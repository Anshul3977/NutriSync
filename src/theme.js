// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#555B6E',  // Dark grey-blue color
    },
    secondary: {
      main: '#FFD6BA',  // Light peach
    },
    background: {
      default: '#FAF9F9',  // Very light gray
      paper: '#BEE3DB',  // Mint color for cards and paper
    },
    text: {
      primary: '#555B6E',
      secondary: '#89B0AE',  // Desaturated blue-green
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px', // Soft rounded buttons
        },
      },
    },
  },
});

export default theme;
