import React, { Component } from 'react';

export default class FooBar extends Component {
	render(){ 
		return(
			<div>FooBar says hello to {this.props.name} who is {this.props.age} who has a dog named {this.props.obj.dog}</div>
		);
	}
}