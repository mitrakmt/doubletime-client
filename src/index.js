import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import App from 'containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './main.css';


render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();
