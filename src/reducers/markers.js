import { ADD_LABEL } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
  case ADD_LABEL:
  	// console.log('This is the about content JSON: ', action.payload.data);
    return action.payload.data;
  default:
    return state;
  }
}