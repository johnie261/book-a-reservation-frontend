import axios from 'axios';

export const FETCH_GLAMPINGS_REQUEST = 'FETCH_GLAMPINGS_REQUEST';
export const FETCH_GLAMPINGS_SUCCESS = 'FETCH_GLAMPINGS_SUCCESS';
export const FETCH_GLAMPINGS_FAILURE = 'FETCH_GLAMPINGS_FAILURE';

export const fetchGlampings = () => (dispatch) => {
  dispatch({ type: FETCH_GLAMPINGS_REQUEST });

  axios
    .get('http://localhost:3000/glampings/list_glampings')
    .then((response) => {
      // Modify the response data to match the expected shape
      const modifiedData = response.data.map(([name, glampingType]) => ({
        name,
        glampingType,
      }));

      dispatch({ type: FETCH_GLAMPINGS_SUCCESS, payload: modifiedData });
    })
    .catch((error) => {
      dispatch({ type: FETCH_GLAMPINGS_FAILURE, payload: error.message });
    });
};