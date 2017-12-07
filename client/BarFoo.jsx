import React, { Component } from 'react';

export default class BarFoo extends Component {
	render(){ 
		return(
			<div>This come from BarFoo. Here's it's data-name {this.props.name}</div>
		);
	}
}