import React, { Component } from 'react';

const ProgressBar = (props) => {
	const {ups, downs} = props;
	
	const upsPercent = `${ups*100/(ups + downs)}%`;
	const downsPercent = `${downs*100/(ups + downs)}%`;

	return (
		<div>
		Ups/Downs
			<div className="progress">
				<div style={{width: upsPercent}} className="progress-bar progress-bar-striped progress-bar-success"></div>
				<div style={{width: downsPercent}} className="progress-bar progress-bar-striped progress-bar-danger"></div>
			</div>
		</div>
	);
}

export default ProgressBar;