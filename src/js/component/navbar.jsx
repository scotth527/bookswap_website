import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import { Link, withRouter } from "react-router-dom";
import { LogIn } from "../component/login.jsx";
import { SignUp } from "../component/signup.jsx";
import { Context } from "../store/appContext.jsx";
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
			<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
				<ul className="nav">
					<li className="nav-item">
						<Link className="navbar-brand" to="/">
							BookSwap ⇌
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/">
							<button
								type="button"
								style={{
									whiteSpace: "normal"
								}}
								className="btn btn-dark mr-2 ">
								{" "}
								Home
							</button>
						</Link>
					</li>
					<li className="nav-item" style={{ float: "left" }}>
						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
						</form>
					</li>
				</ul>
				<button
					style={{ float: "right" }}
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
						id="navbarSupportedContent"
						className="collapse navbar-collapse">
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.sessions.loggedIn) {
									return (
										<ul className="navbar-nav">
											<li className="nav-item mr-1">
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
											</li>
											<li className="nav-item mr-1">
												<Link to="/library">
													<button
														type="button"
														style={{
															whiteSpace: "normal"
														}}
														className="btn btn-dark
																mb-2 ">
														{" "}
														My Library
													</button>
												</Link>
											</li>
											<li className="nav-item mr-1">
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
											</li>
											<li className="nav-item mr-1">
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
											</li>
											<li className="nav-item mr-1">
												<Link to="/">
													<button
														onClick={() =>
															actions.logout()
														}
														className="btn btn-danger
																	mb-2 ">
														Logout
													</button>
												</Link>
											</li>
										</ul>
									);
								} else {
									return (
										<ul className="navbar-nav">
											<li className="nav-item mr-1">
												<button
													onClick={() =>
														this.setState({
															showSignUpModal: true,
															showLogInModal: false
														})
													}
													className="nav-item btn btn-outline-Sign Up my-2 my-sm-0 ml-auto"
													type="submit">
													Sign Up
												</button>
											</li>
											<li className="nav-item mr-1">
												<button
													onClick={() =>
														this.setState({
															showSignUpModal: false,
															showLogInModal: true
														})
													}
													className="nav-item btn btn-outline-Log In my-2 my-sm-0"
													type="submit">
													Log In
												</button>
											</li>
										</ul>
									);
								}
							}}
						</Context.Consumer>

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
