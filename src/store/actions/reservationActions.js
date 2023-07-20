import axios from 'axios';

const fetchReservations = (username) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/reservations/list_reservation');
    const filteredReservations = response.data.filter(
      (reservation) => reservation[3] === username,
    );
    dispatch({ type: 'FETCH_RESERVATIONS_SUCCESS', payload: filteredReservations });
  } catch (error) {
    console.error('Error fetching reservations:', error);
    dispatch({ type: 'FETCH_RESERVATIONS_FAILURE', payload: 'Error fetching reservations.' });
  }
};

export default fetchReservations;
