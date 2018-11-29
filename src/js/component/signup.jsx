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
			user: {
				firstname: "",
				lastname: "",
				email: "",
				address: "",
				phone: "",
				birthday: "",
				genre: "",
				library: [],
				wishlist: []
			},
			showDrop: false
		};
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
														firstname:
															e.target.value
													})
												}
											/>

											<div className="form-inline">
												<h2>Email</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={event =>
													this.setState.user({
														email:
															event.target.value
													})
												}
											/>

											<div className="form-inline">
												<h2>Phone</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={event =>
													this.setState.user({
														phone:
															event.target.value
													})
												}
											/>
										</div>

										<div className="modal-body ml-auto col-3">
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
																lastname:
																	event.target
																		.value
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
																	event.target
																		.value
															})
														}
													/>
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

									<div className="mx-auto" />
									<div className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											id="navbarDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
											onClick={() =>
												this.setState({
													showDrop: true
												})
											}>
											Genre
										</a>
										<div
											className="dropdown-menu"
											style={{
												display: this.state.showDrop
													? "inline-block"
													: "hidden"
											}}
											aria-labelledby="navbarDropdown">
											<div
												onClick={() =>
													this.setState({
														showDrop: !this.state
															.showDrop
													})
												}>
												<a className="dropdown-item">
													Action
												</a>
											</div>
											<a
												className="dropdown-item"
												onClick={() =>
													this.setState({
														showDrop: false
													})
												}>
												Another action
											</a>
											<div className="dropdown-divider" />
											<a
												className="dropdown-item"
												onClick={() =>
													this.setState({
														showDrop: false
													})
												}>
												Something else here
											</a>
										</div>
									</div>
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
													Submit
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
