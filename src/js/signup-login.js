import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, hashHistory} from 'react-router';
import SSF from 'react-simple-serial-form';
import { ajax, ajaxSetup } from 'jquery';
import Cookies from 'js-cookie';


export default class SignUpLogin extends Component {

	loginDataHandler(loginInfo){
		ajax({
			url: 'https://young-gorge-64909.herokuapp.com/logins', 
			type: 'POST', 
			data: loginInfo,
			cache: false, 
			dataType: 'json',
		}).then((response)=>{
			console.log('login response', response)
			if(response.user.email) {		
				Cookies.set( 'currentUser', response.user.auth_token, { expires: 1 });
				ajaxSetup({ 
					headers: { 'auth-token': response.user.auth_token }
				})
				console.log(response.user.auth_token)
				hashHistory.push('/dashboard');
			} else {
				alert("Login failed, try again");
			}
		})
	}

	registerDataHandler(user) {
		ajax({
			url: 'https://young-gorge-64909.herokuapp.com/registrations', 
			type: 'POST', 
			data: user,
			cache: false, 
			dataType: 'json',
		}).then(response => {
			console.log('Register response-->', response);
			if (response.user.email) {
				// Cookies.set( 'currentUser', response.user.email, { expires: 1 });
				hashHistory.push('/dashboard');
			} else {
				alert("Failed to create account, please make sure all fields are correct");
			}
		})
	}
	
	render(){
		return(
			<div>
				<h1>Welcome</h1>
				
				<div>
					<SSF onData={ this.loginDataHandler }>
						<h1>Login</h1>

						<input type="email" name="email" placeholder=" Email" />

						<input type="password" name="password" placeholder=" Password" />

						<button>Log in</button>
					</SSF>
				</div>

				<div>
					<SSF onData={ ::this.registerDataHandler }>
						<h1>Register</h1>

						<input type="text" name="first_name" placeholder=" First Name" />

						<input type="text" name="last_name" placeholder=" Last Name" />

						<input type="email" name="email" placeholder=" Email" />

						<label>Voter ID must be exactly 6 characters long</label>
						<input type="text" name="voter_id" placeholder=" Georgia Voter ID #" />

						<label>Password must be 8 character minimum</label>
						<input type="password" name="password" placeholder=" Password" />

						<button>Register Me</button>

					</SSF>
				</div>
			</div>
		)
	}
}
