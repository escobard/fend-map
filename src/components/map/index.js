import React, { Component } from 'react';

import styles from './styles.scss'

class Map extends Component {
  componentDidMount () {
    this.map();
  }

  map() {
    return new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: parseFloat(51.507351),
        lng: parseFloat(-0.127758)
      },
      zoom: 10
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

export default Map;