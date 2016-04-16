// Javascript Entry Point
import React { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { ajax } from 'jquery';
import SSF from 'react-simple-serial-form';
import Moment from 'moment';

import Main from './main';

render ((
	<Router>
		<Route path="/" component={Main}>
			<IndexRoute component={signup-login} />
		</Route>
	</Router>
	), document.querySelector('.app')
	);