import React, { Component } from 'react';

import styles from './styles.scss'

export default class Footer extends Component {
  
  render() {
    return (
      <footer className="col-md-12 col-sm-12">
        <div className="col-md-6 copyright">Copyright</div>
        <div className="col-md-6 about">About</div>
      </footer>
    );
  }
}
