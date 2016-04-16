import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';

export default class Dashboard extends Component {

	render(){
		return(
			<div>
				<h1>Dashboard</h1>
				<Link to="/ballot">Vote Now</Link>
				<Link to="/">Log Out</Link>
			</div>
		)
	}
}