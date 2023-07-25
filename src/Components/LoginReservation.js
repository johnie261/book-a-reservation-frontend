import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../store/actions/userActions';

const LoginReservation = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);

  const handleLogin = async () => {
    if (username.trim() !== '') {
      await dispatch(login(username));
      setUsername('');
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
        <p>You need to login first.</p>
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

export default LoginReservation;
