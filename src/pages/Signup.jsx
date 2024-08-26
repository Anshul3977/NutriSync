import { useState } from 'react';
import { signup } from '../services/api';
import './Auth.css';

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
      
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data : error.message);
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Signup for NutriSync</h2>
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
          required
        />
        <button type="submit" className="auth-button">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
