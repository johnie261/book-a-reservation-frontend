import axios from 'axios';
import { toast } from 'react-toastify';

export const login = (username) => async (dispatch) => {
  try {
    const response = await axios.get('https://book-a-reservation-backend.onrender.com/users/list_users');
    const users = response.data;

    const user = users.find((user) => user[1] === username);

    if (user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { username, userId: user[0] } });
      toast.success('login successfull');
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'User not found. Please try again.' });
      toast.error('not successfull, user not found');
    }
  } catch (error) {
    toast.error('Error fetching user:', error);
    dispatch({ type: 'LOGIN_FAILURE', payload: 'Error fetching users.' });
  }
};

export const logout = () => ({
  type: 'LOGOUT',
});
