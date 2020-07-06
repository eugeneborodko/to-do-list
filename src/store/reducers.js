import { combineReducers } from 'redux';
import inputReducer from './input/reducers';

export default combineReducers({
  input: inputReducer,
});