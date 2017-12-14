import React, { Component } from 'react';

import styles from './styles.scss'

class Map extends Component {
  constructor(props){
  	super(props);

  	this.state={
    	markers:[]
    }

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

  placeMarker(location, map){
  	console.log(location, map)

  	let infoContent = 'TEST'

  	let infoWindow = new google.maps.InfoWindow({
  		content: infoContent
  	})

    let marker = new google.maps.Marker({
        position: location, 
        map: map,
        title: 'test'
    })
    marker.addListener('click', function(){
    	infoWindow.open(map, marker)
    })
    map.panTo(location) 	
  }

  render() {
    return (
      <div>
        <div id="map" style={{height: "500px", width: '100%'}}></div>
      </div>
    )
  }
}

export default Map;