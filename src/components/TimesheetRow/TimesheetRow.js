import React from 'react';
import TimeBox from 'components/TimeBox/TimeBox';

const TimesheetRow = (props) => (
	<div className="timesheetRow">
		<div className="billingTo-container">
			<h3 className="billingTo-client">Client name</h3>
			<h4 className="billingTo-project">Project name</h4>
		</div>
		{props.rowEntries.map(day => (
			<TimeBox hours={day.hours} key={`${day.hours}${day.note}`} note={day.note} />
		))}
	</div>
);

export default TimesheetRow;