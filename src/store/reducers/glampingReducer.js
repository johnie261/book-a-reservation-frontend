const initialState = {
  glampingsList: [],
  glampingDetails: null,
  error: null,
};

const glampingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GLAMPINGS_SUCCESS':
      return { ...state, glampingsList: action.payload, error: null };
    case 'FETCH_GLAMPINGS_FAILURE':
      return { ...state, glampingsList: [], error: action.payload };
    case 'FETCH_GLAMPING_DETAILS_SUCCESS':
      return { ...state, glampingDetails: action.payload, error: null };
    case 'FETCH_GLAMPING_DETAILS_FAILURE':
      return { ...state, glampingDetails: null, error: action.payload };
    default:
      return state;
  }
};

export default glampingsReducer;
