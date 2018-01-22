import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TimesheetRows from 'containers/Timesheet/Timesheet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Switch>
					<Route path="/" exact component={TimesheetRows} />
				</Switch>
      </div>
    );
  }
}

export default App;
