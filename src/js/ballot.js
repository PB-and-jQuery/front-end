import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';

export default class Ballot extends Component {

	constructor(...args) {
		super(...args);

		this.state = { candidates: [] };
	}

	componentWillMount() {
		ajax('https://young-gorge-64909.herokuapp.com/candidate').then(candidates => {
			this.setState({candidates})
		})
	}

	candidateMapper(candidate) {
		return (
			<div>
				<input type="radio" name="vote" value={`${candidate.name}     ${candidate.party}`} />
			</div>
		)
	}


	dataHandler(data) => {
		console.log(data)
		ajax('https://young-gorge-64909.herokuapp.com/candidate').then({
			hashHistory.push('/dashboard');
		})
	}



	render(){
		return(
			<div>
				<SSF onData={this.dataHandler}>
					{candidates.map(::this.candidateMapper)}
					<button>Submit Your Vote</button>
				</SSF>
			</div>
		)
	}
}