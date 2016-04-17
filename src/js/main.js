import React, { Component, PropTypes } from 'react';
// import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';

export default class Main extends Component {
	
	render(){
		return(
			<div className="main">
				<div>
					<img className="main-flag" src="../images/ga-atlanta.gif" alt="Flag of the City of Atlanta, GA"/>
				</div>
				<div>VoteLanta</div>
				<div>
					<img className="main-flag" src="../images/georgia-flag.jpg" alt="Flag of the State of Georgia" />
				</div>


				{ this.props.children }
		        
		        <footer>Official State of Georgia Voting Poll</footer>
			</div>
		)
	}
}


// height="200" width="500"

// height="150" width="400" 