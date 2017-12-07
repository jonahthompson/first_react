import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class Image extends Component {
	render() {
		return (
		<div className="image-detail media list-group-item">
			<div className="media-left">
				<img src={this.props.image.link} />
			</div>
			<div className="media-body">
				<h4>{this.props.image.title}</h4>
				<p>{this.props.image.description}</p>
				<ProgressBar ups={this.props.image.ups} downs={this.props.image.downs} />
			</div>
		</div>
		);
	}
}
