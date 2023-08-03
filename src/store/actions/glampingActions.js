import axios from 'axios';

export const fetchGlampings = () => async (dispatch) => {
  try {
    const response = await axios.get('https://book-a-reservation-backend.onrender.com/glampings/list_glampings');
    dispatch({ type: 'FETCH_GLAMPINGS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_GLAMPINGS_FAILURE', payload: error.message });
  }
};

export const fetchGlampingDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://book-a-reservation-backend.onrender.com/glampings/list_glampings_details/${id}`);
    dispatch({ type: 'FETCH_GLAMPING_DETAILS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_GLAMPING_DETAILS_FAILURE', payload: error.message });
  }
};

export const deleteGlamping = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://book-a-reservation-backend.onrender.com/glampings/destroy_glamping/${id}`);
    dispatch({ type: 'DELETE_GLAMPING', payload: id });
  } catch (error) {
    throw new Error(error.message);
  }
};
