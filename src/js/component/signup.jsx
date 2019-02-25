import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
//import DropDown from "../component/dropdown.jsx";

export class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			address: "",
			city: "",
			state: "",
			birthday: "",
			favorite_genre: "",
			library: [],
			wishlist: [],
			user: {
				username: "",
				email: "",
				password: ""
			}
		};
	}

	change = function(event) {
		this.setState({ favorite_genre: event.target.value });
	};

	passwordCheck(event) {
		event.preventDefault();
		var user = this.getUser();

		if (user.password1 == user.password2) {
			user.password = user.password1;
			return true;
		} else {
			alert("The passwords do not match!");
		}
	}

	render() {
		let password1 = "";
		let password2 = "";

		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{ display: this.props.show ? "inline-block" : "none" }}>
				<div
					className="modal-dialog"
					role="document"
					style={{ maxWidth: "60vw" }}>
					<div className="modal-content">
						<div className="modal-header">
							<h2>Sign Up</h2>
							{this.props.onClose ? (
								<button
									onClick={() => this.props.onClose()}
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							) : (
								""
							)}
						</div>
						<div className="container mx-auto">
							<div className="row ml-auto">
								<div className="modal-body mx-auto col-9">
									<div className="row">
										<div className="form-group">
											<div className="form-inline">
												<h2 htmlFor="validationDefault01">
													First Name
												</h2>
											</div>
											<input
												id="validationDefault01"
												className="form-control"
												type="text"
												placeholder=""
												onChange={e =>
													this.setState({
														first_name:
															e.target.value
													})
												}
											/>
											<div className="form-inline">
												<h2>Address</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={event =>
													this.setState({
														address:
															event.target.value
													})
												}
											/>
											<div className="form-inline">
												<h2>City</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={event =>
													this.setState({
														city: event.target.value
													})
												}
											/>
											<div className="form-inline">
												<h2>State</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={event =>
													this.setState({
														state:
															event.target.value
													})
												}
											/>
											<div className="form-inline">
												<h2>Username</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={event => {
													let user = Object.assign(
														{},
														this.state.user
													); //creating copy of object
													user.username =
														event.target.value; //updating value
													this.setState({ user });
												}}
											/>
											<div className="form-inline">
												<h2>Email</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={event => {
													let user = Object.assign(
														{},
														this.state.user
													); //creating copy of object
													user.email =
														event.target.value; //updating value
													this.setState({ user });
												}}
											/>
										</div>

										<div className="modal-body ml-auto col-4">
											<div className="row">
												<div className="form-group">
													<div className="form-inline">
														<h2>Last Name</h2>
													</div>
													<input
														className="form-control"
														type="text"
														placeholder=""
														onChange={event =>
															this.setState({
																last_name:
																	event.target
																		.value
															})
														}
													/>

													<div className="form-inline">
														<h2>Password</h2>
													</div>
													<input
														type="password"
														className="form-control"
														id="password1"
														placeholder="Password"
														aria-describedby="password"
														required
														onChange={e =>
															(password1 =
																e.target.value)
														}
													/>
													<div className="form-row">
														<div className="col-md-12 mb-3">
															<label htmlFor="password1">
																Confirm Password
															</label>
															<div className="input-group">
																<div className="input-group-prepend">
																	<span
																		className="input-group-text"
																		id="password1"
																	/>
																</div>
																<input
																	type="password"
																	className="form-control"
																	id="password2"
																	placeholder="Confirm Password"
																	aria-describedby="password1"
																	required
																	onChange={e =>
																		(password2 =
																			e
																				.target
																				.value)
																	}
																/>
															</div>
														</div>
													</div>
													<div className="form-inline">
														<h2>Birthday</h2>
													</div>
													<input
														className="form-control"
														type="date"
														placeholder="Month/Day/Year e.g. 12/31/1984"
														onChange={event =>
															this.setState({
																birthday:
																	event.target
																		.value
															})
														}
													/>
												</div>
											</div>
										</div>
									</div>
									<select
										onChange={e => {
											this.change(e);
										}}
										value={this.state.favorite_genre}
										id="inputState"
										className="form-control mb-2">
										<option value="Nothing Selected">
											Favorite Genre
										</option>
										<option value="Sci-fi">Sci-fi</option>
										<option value="Romance">Romance</option>
										<option value="Horror">Horror</option>
										<option value="Biography">
											Biography
										</option>
										<option value="Comedy">Comedy</option>
										<option value="Teen Drama">
											Teen Drama
										</option>
										<option value="Adult Fiction">
											Adult Fiction
										</option>
									</select>

									<div className="mx-auto" />
									<Context.Consumer>
										{({ store, actions }) => {
											return (
												<button
													className="btn btn-primary"
													type="button"
													onClick={() => {
														if (
															password1 ===
															password2
														) {
															let user = Object.assign(
																{},
																this.state.user
															); //creating copy of object
															user.password = password1; //updating value
															this.setState({
																user
															});
															actions.registerUser(
																this.state
															);
															this.props.onClose();
														} else {
															alert(
																"Password is not matching! Please reconfirm password."
															);
														}
													}}>
													Create Account
												</button>
											);
										}}
									</Context.Consumer>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

SignUp.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

SignUp.defaultProps = {
	show: false,
	onClose: null
};

export default withRouter(SignUp);
