import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../store/actions/userActions';
import '../assets/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);

  const handleLogin = async () => {
    if (username.trim() !== '') {
      try {
        await dispatch(login(username));
        setUsername('');
      } catch (error) {
        throw new Error(error.message);
      }
    }
  };

  const handleGuestLogin = () => {
    dispatch(logout());
    setUsername('');
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome to Our App!</h1>
        <div className="underline underline-login" />
        <p>Please log in to reserve and view your reservations.</p>
        <div className="login-input">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="input-field"
          />
          <button type="button" onClick={handleLogin} className="login-btn">Log In</button>
          <button type="button" onClick={handleGuestLogin} className="login-btn">Continue as Guest</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
