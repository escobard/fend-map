import React, { Component } from 'react';

import styles from './styles.scss'

const listItem = ({item}) =>{

	let {title, longitude, latitude} = item;

    return (
    	<article>
    		<h3>Location Title: {title}</h3>
    		<span>Longitude: {longitude}</span>
    		<br/>
    		<span>Latitude: {latitude}</span>
    	</article>
    );
}

export default listItem;