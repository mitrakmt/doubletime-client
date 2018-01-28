import React from 'react';
import { Button, ButtonGroup, Text } from '@blueprintjs/core';

const DateRange = () => (
	<div className="dateRange">
		<Text>
			Monday January 1st - Saturday January 6th
		</Text>
		<ButtonGroup minimal={true} large={false}>
			<Button className="pt-intent-primary" iconName="calendar" intent="primary" text="Pick a date" />
			<Button intent="danger" text="Back" />
			<Button text="This week" />
			<Button intent="warning" text="Forward" />
		</ButtonGroup>
	</div>
);

export default DateRange;