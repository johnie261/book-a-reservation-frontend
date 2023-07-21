import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import glampingsReducer from './reducers/glampingReducer';
import glampingSlice from '../Features/gampling/gamplingSlice';
import userReducer from './reducers/userReducer';
import reservationReducer from './reducers/reservationReducer';
import reservationSlice from '../Features/reservation/reservationSlice';

const rootReducer = combineReducers({
  glampings: glampingsReducer,
  glampingForm: glampingSlice,
  user: userReducer,
  reservations: reservationReducer,
  reservationForm: reservationSlice,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
