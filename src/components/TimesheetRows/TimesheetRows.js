import React from 'react';
import TimesheetRow from 'components/TimesheetRow/TimesheetRow';

const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const TimesheetRows = props => (
	props.timesheetRows.map(row => <TimesheetRow workingDays={workingDays} />)
);

export default TimesheetRows;