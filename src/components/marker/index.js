import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {addLabel} from '../../actions'

import styles from './styles.scss'

export default class Marker extends Component {
  
  render() {
    return (
      <div id="marker-label">
        <form>
          <label htmlFor="new-marker">
            <input name="new-marker" type="text"/>
          </label>
        </form>
      </div>
    );
  }
}

connect(null, {})(Marker)