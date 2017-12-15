import {ADD_LABEL} from './types'

export function addLabel(label){
	console.log(label)
	return {
		type: ADD_LABEL,
		payload: label
	}
}