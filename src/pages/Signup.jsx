import { useState } from 'react';
import { signup } from '../services/api';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(email, password);
      console.log(response);
      setError(''); 
      // Redirect to dashboard or login page after successful signup
      window.location.href = '/login';
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data : error.message);
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Signup for NutriSync
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Signup
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default Signup;
