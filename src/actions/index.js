import {ADD_LABEL} from './types'

export function addLabel(label){
	return {
		type: ADD_LABEL,
		payload: label
	}
}