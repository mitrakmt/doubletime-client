import React from 'react';
import TimesheetRow from 'components/TimesheetRow/TimesheetRow';

const workingDays = [{ hours: '1:03', note: 'test' }, { hours: '1:03', note: 'test' }, { hours: '1:03', note: 'test' }, { hours: '1:03', note: 'test' }];

const TimesheetRows = props => (
	props.timesheetRows.map(row => <TimesheetRow workingDays={workingDays} />)
);

export default TimesheetRows;