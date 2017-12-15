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

  submitLabel(event){
    event.preventDefault();
    this.props.addLabel(this.state.markerLabel)
    this.setState({markerLabel: ''})
  }

  inputChange(event){
    this.setState({markerLabel: event.target.value})
  }
  render() {
    return (
      <div id="marker-label">
        <form onSubmit={this.submitLabel} className="input-group col-md-12">
          <label className="col-md-10" htmlFor="new-marker">
            <input
             placeholder="Enter your marker label"
             value={this.state.markerLabel}
             onChange={this.inputChange}
             className="form-control"
             name="new-marker" 
             type="text"/>
          </label>
          <button type="submit" className="col-md-2">Clear</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps({markers}){
  return {markers}
}

export default connect(mapStateToProps, {addLabel})(Marker)