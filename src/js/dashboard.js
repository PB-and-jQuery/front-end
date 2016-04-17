import React, { Component, PropTypes } from 'react';
// import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';
import Chart from './chart';
import ChartBar from './chart-bar';

export default class Dashboard extends Component {

	render(){
		return(
			<div>
				<h1>Dashboard</h1>
				<Chart />
				<Link to="/ballot">Vote Now</Link>
				<Link to="/">Log Out</Link>
			</div>
		)
	}
}