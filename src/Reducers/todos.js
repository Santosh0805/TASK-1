import { combineReducers } from 'redux';
import someReducer from './store';

const rootReducer = combineReducers({
  someReducer,
});

export default rootReducer;
