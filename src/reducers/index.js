import { combineReducers } from 'redux';

import markers from './markers'
import label from './label'

const rootReducer = combineReducers({
  markers,
  label
});

export default rootReducer;
