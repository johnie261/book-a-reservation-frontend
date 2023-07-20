import axios from 'axios';

export const login = (username) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/users/list_users');
    const users = response.data;

    const user = users.find((user) => user[1] === username);

    if (user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { username, userId: user[0] } });
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
