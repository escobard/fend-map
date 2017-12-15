import {ADD_LABEL, NEW_MARKER} from './types'

export function addLabel(label){
	return {
		type: ADD_LABEL,
		payload: label
	}
}

export function newMarker(label, lon, lat){
	return {
		type: NEW_MARKER,
		payload: {title: label, latitude: lat, longitude: lon}
	}

}