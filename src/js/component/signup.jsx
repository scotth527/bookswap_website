import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
//import DropDown from "../component/dropdown.jsx";

export class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: "",
			lastname: "",
			email: "",
			address: "",
			phone: "",
			birthday: "",
			genre: "",
			showDrop: false
		};
	}

	signUp() {
		console.log("this.state", this.state);
		const {
			firstname,
			lastname,
			email,
			address,
			phone,
			birthday,
			genre,
			showDrop
		} = this.state;
	}

	render() {
		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{ display: this.props.show ? "inline-block" : "none" }}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							{this.props.onClose ? (
								<button
									onClick={() =>
										this.setState({
											showSignUpModal: true
										})
									}
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
							<h2>Sign Up</h2>
							<div className="row">
								<div className="modal-body mx-auto col-6">
									<div className="row">
										<div className="form-group">
											<div className="form-inline">
												<h2>First Name</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={event =>
													this.State({
														firstname:
															event.target.value
													})
												}
											/>
										</div>
									</div>
									<div className="row">
										<div className="form-inline">
											<h2>Last Name</h2>
										</div>
										<input
											className="form-control"
											type="text"
											placeholder=""
											onChange={event =>
												this.State({
													lastname: event.target.value
												})
											}
										/>
									</div>
									<div className="row">
										<div className="form-inline">
											<h2>Email</h2>
										</div>
										<input
											className="form-control"
											type="text"
											placeholder=""
											onChange={event =>
												this.State({
													email: event.target.value
												})
											}
										/>
									</div>
									<div className="row">
										<div className="form-inline">
											<h2>Address</h2>
										</div>
										<input
											className="form-control"
											type="text"
											placeholder=""
											onChange={event =>
												this.State({
													address: event.target.value
												})
											}
										/>
									</div>
									<div className="row">
										<div className="form-inline">
											<h2>Phone</h2>
										</div>
										<input
											className="form-control"
											type="text"
											placeholder=""
											onChange={event =>
												this.State({
													phone: event.target.value
												})
											}
										/>
									</div>
									<div className="row">
										<div className="form-inline">
											<h2>Birthday</h2>
										</div>
										<input
											className="form-control"
											type="text"
											placeholder="Month/Day/Year"
											onChange={event =>
												this.State({
													birthday: event.target.value
												})
											}
										/>
									</div>
									<div className="mx-auto">
										<h2>Genre</h2>
									</div>
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
											}
											Genre
										/>
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
									<button
										className="btn btn-primary"
										type="button"
										onClick={() => this.signUp}>
										Submit
									</button>
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
