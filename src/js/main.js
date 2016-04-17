import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';

export default class Main extends Component {
	
	render(){
		return(
			<div className="main">

				<div className="main-header">
					
					<div>
						<img className="main-flag" src="../images/georgia-flag.jpg" alt="Flag of the State of Georgia" />
					</div>
					
					<div><h1>Vote ATL</h1></div>
				
				</div>


				{ this.props.children }

			</div>
		)
	}
}


// height="200" width="500"

// height="150" width="400" 