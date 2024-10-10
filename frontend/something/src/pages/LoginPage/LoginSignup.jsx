import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function LoginSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password
    };

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Logged in successfully:', data);
        // Save the token in localStorage or cookies
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user.id);
        
        // Redirect to admin page
        navigate('/admin');
      } else {
        setError(data.msg); // Display error message from backend
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <section>
      <div className="login">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="inputBox">
            <input type="submit" value="Login" id="btn" />
          </div>
        </form>

        <p className="subheading">
          Do not have an account? <Link to='/signup'>Signup</Link>
        </p>
      </div>
    </section>
  );
}

export default LoginSignup;
