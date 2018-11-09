import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	logIn() {
		console.log("this.state", this.state);
		//const { email, password } = this.state;
	}
	render() {
		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{
					display: this.props.show ? "inline-block" : "none"
				}}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							{this.props.onClose ? (
								<button
									onClick={() =>
										this.setState({
											showLogInModal: true,
											showSignUpModal: false
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
						<div className="modal-body mx-auto col-12">
							<div className="form-inline">
								<h2>Log In</h2>
								<div className="container">
									<div className="row">
										<div className="form-group">
											<div className="form-inline">
												<h2>Email</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder="Email"
												onChange={event =>
													this.State({
														email:
															event.target.value
													})
												}
											/>
										</div>
										<div className="row">
											<div className="form-inline">
												<h2>Password</h2>
											</div>
											<input
												className="form-control"
												type="Password"
												placeholder="Password"
												onChange={event =>
													this.State({
														password:
															event.target.value
													})
												}
											/>
										</div>
									</div>
									<button
										className="btn btn-primary"
										type="button"
										onClick={() => this.logIn()}>
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

LogIn.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

LogIn.defaultProps = {
	show: false,
	onClose: null
};

export default withRouter(LogIn);
