import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import glampingsReducer from './reducers/glampingReducer';
import glampingSlice from '../Features/gampling/gamplingSlice';

const rootReducer = combineReducers({
  glampings: glampingsReducer,
  glampingForm: glampingSlice,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
