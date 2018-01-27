import React from 'react';
import { Text } from '@blueprintjs/core';

const DateRange = () => (
	<div className="dateRange">
		<Text>
			Thursday January 1st
		</Text>
		<button>Back</button>
		<button>Forward</button>
		<button>Today</button>
	</div>
);

export default DateRange;