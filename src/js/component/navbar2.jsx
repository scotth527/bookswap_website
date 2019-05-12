import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem
} from "reactstrap";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Link, withRouter } from "react-router-dom";
import { LogIn } from "../component/login.jsx";
import { SignUp } from "../component/signup.jsx";
import { Context } from "../store/appContext.jsx";
//import DropDown from "../component/dropdown.jsx";
import { baseUrl } from "../constant.jsx";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			showSignUpModal: false,
			showLogInModal: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar
					className="d-flex align-items-center"
					color="light"
					light
					expand="md">
					<strong>
						<Link style={{ color: "black" }} to={baseUrl}>
							BookSwap ⇌
						</Link>
					</strong>
					<NavbarToggler onClick={this.toggle} />

					<Collapse isOpen={this.state.isOpen} navbar>
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.sessions.loggedIn) {
									return (
										<Nav
											className="ml-auto align-middle"
											navbar>
											<NavItem>
												<Link to={baseUrl + "browse"}>
													<button
														type="button"
														style={{
															whiteSpace: "normal"
														}}
														className="btn btn-dark  mb-lg-0 mb-sm-2  mb-2 mr-2">
														{" "}
														Browse
													</button>
												</Link>
												<Link to={baseUrl + "wishlist"}>
													<button
														type="button"
														style={{
															whiteSpace: "normal"
														}}
														className="btn btn-dark  mb-lg-0 mb-sm-2  mb-2 mr-2">
														{" "}
														Wishlist
													</button>
												</Link>
											</NavItem>
											<NavItem>
												<Link to={baseUrl + "library"}>
													<button
														type="button"
														style={{
															whiteSpace: "normal"
														}}
														className="btn btn-dark mb-lg-0 mb-sm-2  mb-2 mr-2">
														{" "}
														My Library
													</button>
												</Link>
											</NavItem>
											<NavItem>
												<Link to={baseUrl + "trades"}>
													<button
														type="button"
														style={{
															whiteSpace: "normal"
														}}
														className="btn btn-dark mb-lg-0 mb-sm-2  mb-2 mr-2">
														{" "}
														Trades
													</button>
												</Link>
											</NavItem>
											<NavItem>
												<Link to={baseUrl + "account"}>
													<button
														type="button"
														style={{
															whiteSpace: "normal"
														}}
														className="btn btn-dark mb-lg-0 mb-sm-2  mb-2 mr-2
																">
														{" "}
														My Account
													</button>
												</Link>
											</NavItem>
											<NavItem>
												<Link to={baseUrl}>
													<button
														onClick={() =>
															actions.logout()
														}
														className="btn btn-danger mb-lg-0 mb-sm-2  mb-2 mr-2
																">
														Logout
													</button>
												</Link>
											</NavItem>
										</Nav>
									);
								} else {
									return (
										<Nav
											className="ml-auto align-middle"
											navbar>
											<NavItem>
												<button
													onClick={() =>
														this.setState({
															showSignUpModal: true,
															showLogInModal: false
														})
													}
													className="nav-item btn btn-outline-dark mb-lg-0 mb-sm-2  mb-2 mr-2 my-2 my-sm-0 ml-auto"
													type="submit">
													Sign Up
												</button>
											</NavItem>
											<NavItem>
												<button
													onClick={() =>
														this.setState({
															showSignUpModal: false,
															showLogInModal: true
														})
													}
													className="nav-item btn btn-outline-dark mb-lg-0 mb-sm-2  mb-2 mr-2 my-2 my-sm-0"
													type="submit">
													Log In
												</button>
											</NavItem>
										</Nav>
									);
								}
							}}
						</Context.Consumer>
					</Collapse>
					<SignUp
						show={this.state.showSignUpModal}
						onClose={() =>
							this.setState({ showSignUpModal: false })
						}
					/>
					<LogIn
						show={this.state.showLogInModal}
						onClose={() => this.setState({ showLogInModal: false })}
					/>
				</Navbar>
			</div>
		);
	}
}
