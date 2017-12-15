import { ADD_LABEL } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case ADD_LABEL:
  	return action.payload
  default:
    return state;
  }
}