import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import axios from 'axios';
import ImagesList from './ImagesList';

export class App extends Component {
	constructor(props){
		super(props);
		this.state = {images: []};
	}

	componentWillMount(){
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0').then(response => this.setState({images: response.data.data}));
	}

	changeCount(){
		this.setState({count: this.state.count + 1});
	}

	changeHeaders(){
		this.setState({text: this.refs.words.value});
	}

	render(){ 
		return(
			<div className="container">
				<ImagesList images={this.state.images} />
			</div>
		);
	}
}

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById('app'))
});
// {<div>
			// 	<h1 onClick={() => this.changeCount()}>Hello, {this.state.text}!</h1>
			// 	<h2>{this.state.count}</h2>
			// 	<h3>{this.state.count}</h3>
			// 	<input type="text" ref="words" onChange={() => this.changeHeaders()}/>
			// 	<Image />
			// </div>}