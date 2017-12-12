import React, { Component } from 'react'

import Main from './containers/main'

import Header from './components/header'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
    	<div>
	    	<Header />
	    	<Main />
	    	<Footer />
	    </div>
    )
  }
}
