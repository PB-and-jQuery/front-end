import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';

export default class Ballot extends Component {

	constructor(...args) {
		super(...args);

		this.state = { candidate: [] };
	}

	componentWillMount() {
		ajax('https://young-gorge-64909.herokuapp.com/candidates').then(candidate => {
			this.setState({candidate})
		})
	}

	candidateMapper(candidate) {
		return (
			<div>
				<input type="radio" name="vote" value={`${candidate.name}  ${candidate.party}`} />
			</div>
		)
	}

	dataHandler(vote){
		ajax({
			url: 'https://young-gorge-64909.herokuapp.com/votes',
			type: 'POST',
			data: vote,
			cache: false,
			dataType: 'json',
		}).then(response => {
			console.log('Vote Response-->', response);
			hashHistory.push('/dashboard');
		})
	}


	render(){
		let { candidate } = this.state;
		return(
			<div>
				<SSF onData={this.dataHandler}>
					{candidate.map(::this.candidateMapper)}
					<button>Submit Your Vote</button>
				</SSF>
			</div>
		)
	}
}