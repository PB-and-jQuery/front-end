import React, { Component, PropTypes } from 'react';
// import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';

export default class Ballot extends Component {

	dataHandler(data) {
		// console.log('DATA =>', data)

		data.user_id = 1

		ajax({
			url: `/candidates/${data.candidate_id}/votes`,
			data: data,
			type: 'POST'
		}).then(() => {
			hashHistory.push('/dashboard');
		})
		// alert('Thank you for submitting your vote for Mayor of Atlanta!');
		// console.log('E');
	}


	// render(){
	// 	return(
	// 		<div className="ballot">
	// 			<div className="ballot-title">
	// 				2017 Mayoral Election | City of Atlanta
	// 			</div>
	// 			<SSF onData={this.dataHandler}>
	// 				<div>
	// 					<input type="radio" name="vote" value="John D. Isaacks | Republican Candidate" /> John D. Isaacks | Republican Candidate
	// 				</div>
	// 				<div>
	// 					<input type="radio" name="vote" value="Britton Stanhope Butler | Democratic Candidate" /> Britton Stanhope Butler, Esq. | Democratic Candidate
	// 				</div>
	// 				<div>
	// 					<input type="radio" name="vote" value="Lindsey Owings | Independent Candidate" /> Lindsey Owings | Independent Candidate
	// 				</div>
	// 				<div>
	// 					<button>Submit Your Vote</button>
	// 				</div>
	// 			</SSF>
	// 		</div>
	// 	)
	// }





	componentWillMount() {
		console.log('B');
		ajax('https://young-gorge-64909.herokuapp.com/candidates').then(resp => {
			console.log(resp.candidates)
			this.setState({ candidates: resp.candidates});
			console.log('B2')
		})
	}
	constructor(...args) {
		super(...args);

		this.state = { candidates: [] };
		console.log('candidates array:', this.state.candidates);
		console.log('A');
	}

	candidateMapper(candidate) {
		console.log('D');
		return (
			<div>
				{`${candidate.name}  ${candidate.party}`}
				<input type="radio" name="candidate_id" value={`${candidate.id}`} />
			</div>
		)
	}

	render(){
		console.log('C');
		let { candidates } = this.state;
		console.log('candidates:', candidates);
		// let normalData = candidates.candidates;
		// console.log('normalData = ', normalData)
		return(
			<div className="ballot">
				
				<div className="ballot-title">
					<p>2017 Mayoral Election</p>
					<p>City of Atlanta</p>
				</div>
				
				<SSF onData={this.dataHandler}>
					{candidates.map(::this.candidateMapper)}
					<button>Submit Your Vote</button>
				</SSF>

			</div>
		)
	}
}



	// dataHandler(vote){
	// 	ajax({
	// 		url: 'https://young-gorge-64909.herokuapp.com/votes',
	// 		type: 'POST',
	// 		data: vote,
	// 		cache: false,
	// 		dataType: 'json',
	// 	}).then(response => {
	// 		console.log('Vote Response-->', response);
	// 		hashHistory.push('/dashboard');
	// 	})
	// }