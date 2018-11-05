import React from "react";
import ReactDOM from "react-dom"


export class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email:'',
			address:'',
			phone:'',
			birthday:'',
			genre:''
		}
	}
	
	signUp() {
		console.log('this.state', this.state);
		const { firstname, lastname, email, address, phone, birthday, genre } = this.state
				
	}
	
	render() {
		return (
			<div className="form-inline">
				<h2>Sign Up</h2>
				<div className="form-group">
				<div className="form-inline">
					<h2>First Name</h2>
				</div>
					<input
						className="form-control"
						type="text"
						placeholder="first name"
						onChange={event => this.State({firstname: event.target.value})}
					/>
				<div className="form-inline">
					<h2>Last Name</h2>
				</div>
					<input
						className="form-control"
						type="text"
						placeholder="last name"
						onChange={event => this.State({lastname: event.target.value})}
					/>
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
					<h2>Address</h2>
				</div>
					<input
						className="form-control"
						type="text"
						placeholder="Address"
						onChange={event => this.State({address: event.target.value})}
					/>
				<div className="form-inline">
					<h2>Phone</h2>
				</div>
					<input
						className="form-control"
						type="text"
						placeholder="Phone"
						onChange={event => this.State({phone: event.target.value})}
					/>
				<div className="form-inline">
					<h2>Birthday</h2>
				</div>
					<input
						className="form-control"
						type="text"
						placeholder="Birthday"
						onChange={event => this.State({birthday: event.target.value})}
					/>
				<div className="form-inline">
					<h2>Genre</h2>
				</div>
					<input
						<li class="nav-item dropdown">
        					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        						Genre
        					</a>
        					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
        						<a class="dropdown-item" href="#">Action</a>
        						<a class="dropdown-item" href="#">Another action</a>
        						<div class="dropdown-divider"></div>
        						<a class="dropdown-item" href="#">Something else here</a>
        					</div>
    					</li>
						className="form-control"
						type="text"
						placeholder="Genre"
						onChange={event => this.State({genre: event.target.value})}
					/>
					<button
						className="btn btn-primary"
						type="button"
						onClick={() => this.signUp}
					>
						Submit
					</button>
				</div>
			</div>
			)
	}
}