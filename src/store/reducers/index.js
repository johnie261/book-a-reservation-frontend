import { combineReducers } from 'redux';
import glampingReducer from './glampingReducer';

const rootReducer = combineReducers({
  glamping: glampingReducer,
});

export default rootReducer;
