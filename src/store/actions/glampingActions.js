import axios from 'axios';

export const fetchGlampings = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/glampings/list_glampings');
    dispatch({ type: 'FETCH_GLAMPINGS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_GLAMPINGS_FAILURE', payload: error.message });
  }
};