import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';

export default class SignUpLogin extends Component {

	render(){
		return(
			<div>
				<h1>Welcome</h1>
				<Link to="/dashboard">Login</Link>
				<Link to="/dashboard">Register</Link>
			</div>
		)
	}
}