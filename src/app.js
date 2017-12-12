import React, { Component } from 'react'
import {Route} from "react-router-dom";

import Main from './containers/main'
import Listing from './containers/listing'

import Header from './components/header'
import Footer from './components/footer'

export default class App extends Component {
  render() {
    return (
    	<div>
	    	<Header />
	    		<Route exact path="/" component={Main}/>
	    		<Route exact path="/listing" component={Listing}/>
	    	<Footer />
	    </div>
    )
  }
}
