const initialState = {
  username: '',
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, username: action.payload, error: null };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload };
    case 'LOGOUT':
      return { ...state, username: 'guest', error: null };
    default:
      return state;
  }
};

export default userReducer;
