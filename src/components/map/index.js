import React, { Component } from 'react';
import { connect } from 'react-redux'

import {newMarker} from '../../actions'

import styles from './styles.scss'

class Map extends Component {
  constructor(props){
  	super(props);

  	this.state={
    	markers:[]
    }

    this.map = this.map.bind(this);
    this.placeMarker = this.placeMarker.bind(this);
  }

  componentDidMount () {
    this.map();
    this.map = this.map.bind(this);
    console.log('PROPS', this.props)

  }

  map() {
  	let placeMarker = this.placeMarker
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 37.8044843,
        lng: -122.4143109
      },
      zoom: 16
    })

    this.renderMarkers(this.props.markers, map);

    map.addListener('click', function(e) {
	    placeMarker(e.latLng, map);
	});
  }

  marker(location, map){
    return new google.maps.Marker({
        position: location, 
        map: map,
    })
  }

  infoWindow(infoContent){
    return new google.maps.InfoWindow({
      content: infoContent
    })
  }

  infoListener(marker, infoWindow){
    marker.addListener('click', function(){
      infoWindow.open(map, marker)
    })
  }

  placeMarker(location, map){
  	console.log(location)
    let {lat, lng} = location;

    this.props.newMarker('TEST', lat(), lng()); 
  	
    let infoWindow = this.infoWindow('TEST')

    let marker = this.marker(location,map);
    let markerListener = this.infoListener(marker, infoWindow);
    map.panTo(location)	
  }

  renderMarkers(markers, map){
    markers.map((marker, index) => {
      let {title, latitude, longitude} = marker;
      let location = {lat: latitude, lng: longitude};
      let newMarker = this.marker(location, map)
      let infoWindow = this.infoWindow(title)
      let markerListener = this.infoListener(newMarker, infoWindow);
    })
  }
  
  render() {
    console.log('PROPS', this.props)
    return (
      <div>
        <div id="map" style={{height: "500px", width: '100%'}}></div>
      </div>
    )
  }
}

function mapStateToProps({markers}){
  return{markers}
}

export default connect(mapStateToProps, {newMarker})(Map);