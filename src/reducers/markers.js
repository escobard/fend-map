import { ADD_LABEL } from '../actions/types';

const init = {}

export default function(state = init, action) {
  switch(action.type) {
  case ADD_LABEL:
    return [action.payload, ...state];
  default:
    return state;
  }
}