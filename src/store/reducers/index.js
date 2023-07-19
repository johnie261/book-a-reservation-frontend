import { combineReducers } from 'redux';
import glampingReducer from './glampingReducer';
import glampingSlice from '../../Features/gampling/gamplingSlice';

const rootReducer = combineReducers({
  glamping: glampingReducer,
  glampingForm: glampingSlice,
});

export default rootReducer;
