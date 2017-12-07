import React, { Component } from 'react';
import Image from './Image';

export default class ImagesList extends Component {
	render() {
		return (
			<ul className="media-list list-group">{this.props.images.filter(image => !image.is_album).map(image => <Image image={image} key={image.id}/>)}</ul>
		);
	}
}
