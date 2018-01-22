import React from 'react';
import TimesheetRow from 'components/TimesheetRow/TimesheetRow';


const TimesheetRows = props => (
	props.timesheetRows.map(row => <TimesheetRow key={row[0].id} rowEntries={row} />)
);

export default TimesheetRows;