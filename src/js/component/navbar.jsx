import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import { Link, withRouter } from "react-router-dom";
import { LogIn } from "../component/login.jsx";
import { SignUp } from "../component/signup.jsx";
//import DropDown from "../component/dropdown.jsx";

export class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSignUpModal: false,
			showLogInModal: false
		};
	}
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="#">
					Book Pals
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div style={{ display: this.props.show }}>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</Link>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
						</form>
						<div>
							<Link to="/wishlist">
								<button
									type="button"
									style={{
										whiteSpace: "normal"
									}}
									className="btn btn-dark
														mb-2 ">
									{" "}
									Wishlist
								</button>
							</Link>
							<Link to="/library">
								<button
									type="button"
									style={{
										whiteSpace: "normal"
									}}
									className="btn btn-dark
														mb-2 ">
									{" "}
									Library
								</button>
							</Link>
							<Link to="/trades">
								<button
									type="button"
									style={{
										whiteSpace: "normal"
									}}
									className="btn btn-dark
														mb-2 ">
									{" "}
									Trades
								</button>
							</Link>
							<Link to="/account">
								<button
									type="button"
									style={{
										whiteSpace: "normal"
									}}
									className="btn btn-dark
														mb-2 ">
									{" "}
									My Account
								</button>
							</Link>
							<button
								onClick={() =>
									this.setState({
										showSignUpModal: true,
										showLogInModal: false
									})
								}
								className="btn btn-outline-Sign Up my-2 my-sm-0 ml-auto"
								type="submit">
								Sign Up
							</button>
						</div>
						<button
							onClick={() =>
								this.setState({
									showSignUpModal: false,
									showLogInModal: true
								})
							}
							className="btn btn-outline-Log In my-2 my-sm-0"
							type="submit">
							Log In
						</button>
						<SignUp
							show={this.state.showSignUpModal}
							onClose={() =>
								this.setState({ showSignUpModal: false })
							}
						/>
						<LogIn
							show={this.state.showLogInModal}
							onClose={() =>
								this.setState({ showLogInModal: false })
							}
						/>
						{console.log(this.state)}
					</div>
				</div>
			</nav>
		);
	}
}

NavBar.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.string
};

NavBar.defaultProps = {
	show: false,
	onClose: null
};

export default withRouter(NavBar);
