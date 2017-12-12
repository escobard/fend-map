import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import styles from './styles.scss'

export default class Header extends Component {
  
  render() {
    return (
      <section id="header" className="col-md-12 col-sm-12">
      	<div className="col-md-3 col-sm-12 header-title">
      		<Link to={'/'}>UdaciMap</Link>
      	</div>
      	<div className="col-md-9 col-sm-12 header-links">
          <Link to={'/'}>Home</Link>
          <Link to={'listing'}>Listing</Link>
      		<a href="#github">About</a>
      	</div>

      </section>
    );
  }
}
