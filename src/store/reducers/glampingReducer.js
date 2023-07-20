const initialState = {
  glampingsList: [],
  isLoading: true,
  glampingDetails: null,
  error: null,
};

const glampingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GLAMPINGS_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_GLAMPINGS_SUCCESS':
      return { ...state, glampingsList: action.payload, isLoading: false, error: null };
    case 'FETCH_GLAMPINGS_FAILURE':
      return { ...state, glampingsList: [], isLoading: false, error: action.payload };
    case 'FETCH_GLAMPING_DETAILS_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_GLAMPING_DETAILS_SUCCESS':
      return { ...state, glampingDetails: action.payload, isLoading: false, error: null };
    case 'FETCH_GLAMPING_DETAILS_FAILURE':
      return { ...state, glampingDetails: null, isLoading: false, error: action.payload };
    case 'DELETE_GLAMPING':
      const deletedItemId = action.payload
      return {
        ...state,
        glampingsList: state.glampingsList.filter((item) => item.id !== deletedItemId)
      }
    default:
      return state;
  }
};

export default glampingsReducer;

/*
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
*/