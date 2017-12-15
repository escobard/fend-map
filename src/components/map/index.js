import React, { Component } from 'react';
import { connect } from 'react-redux'

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

    map.addListener('click', function(e) {
	    placeMarker(e.latLng, map);
	});
  }

  marker(location, map, title){
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
  
  placeMarker(location, map){
  	console.log(location, map)

  	let infoWindow = this.infoWindow('TEST')

    let marker = this.marker(location,map);

    console.log('MARKER LAT', marker.position.lat())
    console.log('MARKER LAT', marker.position.lng())
    marker.addListener('click', function(){
    	infoWindow.open(map, marker)
    })
    map.panTo(location) 	
  }

  renderMarkers(markers){
    markers.map((marker, index) =>{

    })
  }
  render() {
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

export default connect(mapStateToProps)(Map);