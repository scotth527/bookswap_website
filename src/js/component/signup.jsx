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
			password: "",
			user: {
				username: "",
				password: ""
			}
		};
	}

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
												<h2>First Name</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={e =>
													this.setState.user({
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
													this.setState.user({
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
													this.setState.user({
														address:
															event.target.value
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
													this.setState.user({
														address:
															event.target.value
													})
												}
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
															this.setState.user({
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
														id="password"
														placeholder="Password"
														aria-describedby="password"
														required
														onChange={e =>
															(this.user.password1 =
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
																	id="password1"
																	placeholder="Confirm Password"
																	aria-describedby="password1"
																	required
																	onChange={e =>
																		(this.user.password2 =
																			e.target.value)
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
														type="text"
														placeholder="Month/Day/Year"
														onChange={event =>
															this.setState.user({
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
										id="inputState"
										className="form-control">
										<option selected>
											Favorite Genre{" "}
										</option>
										<option>Sci-fi</option>
										<option>Romance</option>
										<option>Horror</option>
										<option>Biography</option>
										<option>Comedy</option>
										<option>Teen Drama</option>
										<option>Adult Fiction</option>
									</select>

									<div className="mx-auto" />
									<Context.Consumer>
										{({ store, actions }) => {
											return (
												<button
													className="btn btn-primary"
													type="button"
													onClick={() =>
														actions.registerUser(
															this.state.user
														)
													}>
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
