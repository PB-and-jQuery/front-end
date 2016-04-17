import React, { Component } from 'react';
// import { render } from 'react-dom';
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
				
				<div className="login-reg-parent">

					<div className="login-form">
						<SSF onData={ this.loginDataHandler }>
							<div>
							<h2>Login</h2>
							</div>

							<div>
							<input type="email" name="email" placeholder=" Email" />
							</div>

							<div>
							<input type="password" name="password" placeholder=" Password" />
							</div>

							<div>
							<button>Log in</button>
							</div>
						</SSF>
					</div>

					<div className="register-form">
						<SSF onData={ ::this.registerDataHandler }>
							<div>
							<h2>Register</h2>
							</div>

							<div>
							<input type="text" name="first_name" placeholder=" First Name" />
							</div>

							<div>
							<input type="text" name="last_name" placeholder=" Last Name" />
							</div>

							<div>
							<input type="email" name="email" placeholder=" Email" />
							</div>

							<div>
							<label><p>Voter ID must be exactly 6 characters long</p></label>
							</div>

							<div>
							<input type="text" name="voter_id" placeholder=" Georgia Voter ID #" />
							</div>

							<div>
							<label><p>Password must be 8 character minimum</p></label>
							</div>

							<div>
							<input type="password" name="password" placeholder=" Password" />
							</div>

							<div>
							<button>Register Me</button>
							</div>	
						</SSF>
					</div>
				</div>
			</div>
		)
	}
}
