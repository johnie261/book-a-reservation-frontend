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
    <div>
      <p>Please log in to view your reservations.</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button type="button" onClick={handleLogin}>Log In</button>
      <button type="button" onClick={handleGuestLogin}>Continue as Guest</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginReservation;