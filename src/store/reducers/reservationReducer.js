const initialState = {
  reservations: [],
  isLoading: true,
  error: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESERVATIONS_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_RESERVATIONS_SUCCESS':
      return {
        ...state, reservations: action.payload, isLoading: false, error: null,
      };
    case 'FETCH_RESERVATIONS_FAILURE':
      return {
        ...state, reservations: [], isLoading: false, error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
