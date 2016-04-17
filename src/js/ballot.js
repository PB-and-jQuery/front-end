import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';

export default class Ballot extends Component {

	dataHandler(){
		hashHistory.push('/dashboard');
		alert('Thank you for submitting your vote for Mayor of Atlanta!');
	}


	render(){
		return(
			<div className="ballot">
				<div className="ballot-title">
					2017 Mayoral Election | City of Atlanta
				</div>
				<SSF onData={this.dataHandler}>
					<div>
						<input type="radio" name="vote" value="John D. Isaacks | Republican Candidate" /> John D. Isaacks | Republican Candidate
					</div>
					<div>
						<input type="radio" name="vote" value="Britton Stanhope Butler | Democratic Candidate" /> Britton Stanhope Butler, Esq. | Democratic Candidate
					</div>
					<div>
						<input type="radio" name="vote" value="Lindsey Owings | Independent Candidate" /> Lindsey Owings | Independent Candidate
					</div>
					<div>
						<button>Submit Your Vote</button>
					</div>
				</SSF>
			</div>
		)
	}
}

// 	constructor(...args) {
// 		super(...args);

// 		this.state = { candidates: [] };
// 		console.log('candidates array:', this.state.candidates);
// 	}

// 	componentWillMount() {
// 		ajax('https://young-gorge-64909.herokuapp.com/candidates').then(candidates => {
// 			this.setState({candidates});
// 		})
// 	}

// 	candidateMapper(candidate) {
// 		return (
//			<div>
//				<input type="radio" name="vote" value={`${candidate.name}  ${candidate.party}`} />
//			</div>
// 		)
// 	}

// 	dataHandler(vote){
// 		ajax({
// 			url: 'https://young-gorge-64909.herokuapp.com/votes',
// 			type: 'POST',
// 			data: vote,
// 			cache: false,
// 			dataType: 'json',
// 		}).then(response => {
// 			console.log('Vote Response-->', response);
// 			hashHistory.push('/dashboard');
// 		})
// 	}


// 	render(){
// 		let { candidates } = this.state;
// 		console.log('candidates:', candidates);
// 		let normalData = candidates.candidates;
// 		console.log('normalData = ', normalData)
// 		return(
// 			<div>
// 				<SSF onData={this.dataHandler}>
// 					{normalData.map(::this.candidateMapper)}
// 					<button>Submit Your Vote</button>
// 				</SSF>
// 			</div>
// 		)
// 	}
// }