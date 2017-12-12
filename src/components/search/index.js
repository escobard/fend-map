import React, { Component } from 'react';

import styles from './styles.scss'

export default class Search extends Component {
  
  render() {
    return (
		<div className="form-group">
		  <label htmlFor="usr">Search</label>
		  <input type="text" placeholder="Search" className="form-control" id="usr" />
		  <button>Search</button>
		</div>
    );
  }
}
