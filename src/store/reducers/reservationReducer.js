const initialState = {
  reservations: [],
  error: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESERVATIONS_SUCCESS':
      return { ...state, reservations: action.payload, error: null };
    case 'FETCH_RESERVATIONS_FAILURE':
      return { ...state, reservations: [], error: action.payload };
    default:
      return state;
  }
};

export default reservationReducer;
