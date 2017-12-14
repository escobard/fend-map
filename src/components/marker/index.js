import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {addLabel} from '../../actions'

import styles from './styles.scss'

class Marker extends Component {
  
  constructor(props){
    super(props);

    this.state = { markerLabel: '' }

    this.inputChange = this.inputChange.bind(this)
    this.submitLabel = this.submitLabel.bind(this)

  }

  submitLabel(){
    console.log('submitted', 'state:', this.state)
  }

  inputChange(event){
    this.setState({markerLabel: event.target.value})
  }
  render() {
    return (
      <div id="marker-label">
        <form onSubmit={this.submitLabel} className="input-group">
          <label htmlFor="new-marker">
            <input
             placeholder="Enter your marker label"
             value={this.state.markerLabel}
             onChange={this.inputChange}
             className="form-control"
             name="new-marker" 
             type="text"/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {})(Marker)