import {
    FETCH_GLAMPINGS_REQUEST,
    FETCH_GLAMPINGS_SUCCESS,
    FETCH_GLAMPINGS_FAILURE,
  } from '../actions/glampingActions';
  
  const initialState = {
    glampings: [],
    loading: false,
    error: null,
  };
  
  const glampingReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_GLAMPINGS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_GLAMPINGS_SUCCESS:
        return {
          ...state,
          loading: false,
          glampings: action.payload,
        };
      case FETCH_GLAMPINGS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default glampingReducer;