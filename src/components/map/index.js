import React, { Component } from 'react';

import styles from './styles.scss'

class Map extends Component {
  componentDidMount () {
    this.map();

    this.map = this.map.bind(this);
    this.placeMarker = this.placeMarker.bind(this);
  }

  map() {
  	let placeMarker = this.placeMarker
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: parseFloat(51.507351),
        lng: parseFloat(-0.127758)
      },
      zoom: 10
    })
    map.addListener('click', function(e) {
	    placeMarker(e.latLng, map);
	});
  }

  placeMarker(location, map){
  	console.log(location, map)
    let marker = new google.maps.Marker({
        position: location, 
        map: map
    });
    map.panTo(location); 	
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