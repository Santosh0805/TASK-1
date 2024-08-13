import { combineReducers } from 'redux';
import someReducer from './someReducer'; // Example reducer

const rootReducer = combineReducers({
  someReducer, // Combine your reducers here
});

export default rootReducer;
