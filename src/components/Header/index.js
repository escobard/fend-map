import React, { Component } from 'react';

import styles from './styles.scss'

export default class Header extends Component {
  
  render() {
    return (
      <section id="header" className="col-md-12 col-sm-12">
      	<div className="col-md-3 col-sm-12 header-title">
      		UdaciMap
      	</div>
      	<div className="col-md-9 col-sm-12 header-links">
      		<a href="#github">About</a>
      	</div>
      </section>
    );
  }
}
