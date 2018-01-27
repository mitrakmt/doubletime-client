import React from 'react';

const TimeBox = props => (
	<div className="timeBox">
		<input type="text" value={props.hours} />
		<span>{props.note}</span>
	</div>
);

export default TimeBox;