import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';
// import Chart from './chart';
// import ChartBar from './chart-bar';

export default class Dashboard extends Component {

	render(){
		return(
			<div>
				<h2>Dashboard</h2>
				<Link to="/ballot"><button>Vote Now</button></Link>
				<Link to="/"><button>Log Out</button></Link>
			</div>
		)
	}
}