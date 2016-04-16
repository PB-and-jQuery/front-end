import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';

export default class Ballot extends Component {

	render(){
		return(
			<div>
				<h1>Ballot</h1>
				<Link to="/dashboard">Submit Vote</Link>
				<Link to="/dashboard">Cancel</Link>
			</div>
		)
	}
}