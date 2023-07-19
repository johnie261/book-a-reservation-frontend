import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import glampingsReducer from './reducers/glampingReducer';

const rootReducer = combineReducers({
  glampings: glampingsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
