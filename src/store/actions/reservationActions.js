import axios from 'axios';
import { toast } from 'react-toastify';

const fetchReservations = (username) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_RESERVATIONS_REQUEST' });
    const response = await axios.get('https://book-a-reservation-backend.onrender.com/reservations/list_reservation');
    const filteredReservations = response.data.filter(
      (reservation) => reservation[3] === username,
    );
    const reservationsWithGlampingDetails = await Promise.all(
      filteredReservations.map(async (reservation) => {
        const glampingId = reservation[4];
        const glampingDetailsResponse = await axios.get(`https://book-a-reservation-backend.onrender.com/glampings/list_glampings_details/${glampingId}`);
        const glampingDetails = glampingDetailsResponse.data;

        return {
          ...reservation,
          glampingName: glampingDetails.name,
          glampingCity: glampingDetails.location,
        };
      }),
    );

    dispatch({ type: 'FETCH_RESERVATIONS_SUCCESS', payload: reservationsWithGlampingDetails });
  } catch (error) {
    toast.error('Error fetching reservations:', error);
    dispatch({ type: 'FETCH_RESERVATIONS_FAILURE', payload: 'Error fetching reservations.' });
  }
};

export default fetchReservations;
