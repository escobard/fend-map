import { ADD_LABEL } from '../actions/types';

const init = [
	{title:'Maritime Museum', lat:37.80642725377191, lon:-122.42391586303711},
	{title:'The Buena Vista', lat:37.806512020782144, lon:-122.42078304290771},
	{title:'Coit Tower', lat:37.80339253071305, lon:-122.4171781539917},
	{title:"Mamas", lat:37.8024091858777, lon:122.40582704544067},
	{title:'Beach Near Pier 39', lat:37.801459737062025, lon:-122.40953922271729},
	{title:'Lombard Street', lat:37.808698976006795, lon:-122.41170644760132},
]

export default function(state = init, action) {
  switch(action.type) {
  case ADD_LABEL:
    return [action.payload, ...state];
  default:
    return state;
  }
}