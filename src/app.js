import React, { Component } from 'react'

import Main from './containers/main'
import Listing from './containers/listing'

import Header from './components/header'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
    	<div>
	    	<Header />
		    	<Main />
		    	<Listing />
	    	<Footer />
	    </div>
    )
  }
}
