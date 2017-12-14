import React, { Component } from 'react';

import styles from './styles.scss'

import Search from '../../components/search'
import Map from '../../components/map'
import Marker from '../../components/marker'
export default class Main extends Component {
  
  render() {
    return (
      <main id="home" className="container">
        <p>This is where the bulk of the application will reside</p>
        <Search/>
        <Marker />
        <Map />
      </main>
    );
  }
}
