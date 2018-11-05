import React from "react";
import ReactDom from "react-dom"

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			email:'',
			password:''
		}
	}
	
	logIn() {
		console.log('this.state', this.state);
		const { email, password } = this.state;
	}
	render() {
		return (
			<div className="form-inline">
				<h2>Sign Up</h2>
			<div className="form-group">
			<div className="form-inline">
				<h2>Email</h2>
			</div>
				<input
					className="form-control"
					type="text"
					placeholder="Email"
					onChange={event => this.State({email: event.target.value})}
				/>
			<div className="form-inline">
				<h2>Password</h2>
			</div>
				<input
					className="form-control"
					type="Password"
					placeholder="Password"
					onChange={event => this.State({password: event.target.value})}
				/>
				<button
					className="btn btn-primary"
						type="button"
						onClick={() =>this.logIn()}
					>
						Submit
				</button>
				</div>
			</div>
			

			)	
	}
}