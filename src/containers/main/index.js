import React, { Component } from 'react';

import styles from './styles.scss'

import Search from '../../components/search'
import Map from '../../components/map'
import MarkerLabel from '../../components/markerLabel'

export default class Main extends Component {
  
  render() {
    return (
      <main id="home" className="container">
        <h1>Enter a label, then click on the map to create a map pin</h1>
        <MarkerLabel />
        <Map />
      </main>
    );
  }
}
