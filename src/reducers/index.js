import { combineReducers } from 'redux';

import markers from './markers'

console.log('markers', markers)

const rootReducer = combineReducers({
  markers
});

export default rootReducer;
