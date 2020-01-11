import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApplicationContextProvider } from './application-context';

import Header from './header';

import HomePage from './pages/home';
import FormPage from './pages/form';
import ErrorPage from './pages/error';

function App() {
	return (
		<ApplicationContextProvider font={20}>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/form" component={FormPage} />
					<Route component={ErrorPage} />
				</Switch>
			</Router>
		</ApplicationContextProvider>
	);
}

export default App;
