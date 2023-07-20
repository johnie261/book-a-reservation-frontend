import axios from 'axios';

export const login = (username) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/users/list_users');
    const users = response.data;
    if (users.includes(username)) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: username });
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'User not found. Please try again.' });
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    dispatch({ type: 'LOGIN_FAILURE', payload: 'Error fetching users.' });
  }
};

export const logout = () => ({
  type: 'LOGOUT',
});
