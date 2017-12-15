import React, { Component } from 'react';

import styles from './styles.scss'

const listItem = ({item}) =>{

	let {title, longitude, latitude} = item;

    return (
    	<article>
    		<h3>{title}</h3>
    		<span>{longitude}</span>
    		<span>{latitude}</span>
    	</article>
    );
}

export default listItem;