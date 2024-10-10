import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Здесь вы можете добавить логику для отправки данных на сервер
    console.log('Logging in with', { username, password });
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
