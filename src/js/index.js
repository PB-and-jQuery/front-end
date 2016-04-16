// Javascript Entry Point
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { ajax } from 'jquery';
import SSF from 'react-simple-serial-form';
import Moment from 'moment';

import Main from './main';
import SignUpLogin from './signup-login';
import Dashboard from './dashboard';
import Ballot from './ballot';

render (
	<Router history={ hashHistory }>
		<Route path="/" component={ Main }>
			<IndexRoute component={ SignUpLogin } />
			<Route path="/dashboard" component={ Dashboard } />
			<Route path="/ballot" component={ Ballot } />
		</Route>
	</Router>
	, document.querySelector('.app')
	)