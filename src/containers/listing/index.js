import React, { Component } from 'react';
import { connect } from 'react-redux'

import ListItem from '../../components/listItem'

import styles from './styles.scss'

class Listing extends Component {

  renderListItems(listItems){
  	return listItems.map((item, index) => {
	  		return (
	  			<ListItem item={item} key={index}/>
	  		)
  		}
  	)
  }

  render() {
    return (
      <main id="listing" className="container">
        {this.renderListItems(this.props.markers)}
      </main>
    );
  }
}

function mapStateToProps({markers}){
	return {markers}
}

export default connect(mapStateToProps)(Listing)
