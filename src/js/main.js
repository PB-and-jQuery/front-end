import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';

export default class Main extends Component {
	
	render(){
		return(
			<div>
				<h1>Real Time Polls</h1>

				{ this.props.children }
		        
		        <footer>Official State of Georgia Voting Poll</footer>
			</div>
		)
	}
}
