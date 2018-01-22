import React from 'react';

const TimeBox = props => (
	<div className="timeBox">
		<span>{props.hours}</span>
		<span>{props.note}</span>
	</div>
);

export default TimeBox;