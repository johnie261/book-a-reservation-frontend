const initialState = {
  username: '',
  userId: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state, username: action.payload.username, userId: action.payload.userId, error: null,
      };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload };
    case 'LOGOUT':
      return {
        ...state, username: 'guest', userId: null, error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
