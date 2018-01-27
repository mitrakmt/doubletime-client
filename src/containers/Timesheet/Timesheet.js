import DateRange from 'components/DateRange/DateRange';
import React, { Component, Fragment } from 'react';
import TimesheetRows from 'components/TimesheetRows/TimesheetRows';


const rowEntries1 = [{ hours: '1:03', note: 'test row1', id: 324 }, { hours: '2:33', note: 'another row' }, { hours: ':03', note: 'did some dev' }, { hours: '21:03', note: 'a really long day' }];
const rowEntries2 = [{ hours: '4:03', note: 'test row2', id: 132 }, { hours: '4:33', note: 'hi row' }, { hours: '4:33', note: 'did some more dev' }, { hours: '0:53', note: 'a short day' }];
const rowEntries3 = [{ hours: '2:03', note: 'test row3', id: 103 }, { hours: '4:15', note: 'here is a row' }, { hours: ':01', note: 'really short dev' }, { hours: '1:03', note: 'a day' }];
const rowsTest = [rowEntries1, rowEntries2, rowEntries3];

class Timesheet extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}

	render() { 
		return (
			<Fragment>
				<DateRange />
				<TimesheetRows timesheetRows={rowsTest} />
			</Fragment>
		);
	}
}
 
export default Timesheet;