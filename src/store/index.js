import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import glampingsReducer from './reducers/glampingReducer';

const rootReducer = combineReducers({
  glampings: glampingsReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
