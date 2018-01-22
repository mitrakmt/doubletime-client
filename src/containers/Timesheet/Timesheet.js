import React, { Component } from 'react';
import TimesheetRows from 'components/TimesheetRows/TimesheetRows';

const rowsTest = [1, 2, 3];

class Timesheet extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}

	render() { 
		return (
			<TimesheetRows timesheetRows={rowsTest} />
		);
	}
}
 
export default Timesheet;