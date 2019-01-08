import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
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
				<div
					className="modal-dialog"
					role="document"
					style={{ maxWidth: "50vw" }}>
					<div className="modal-content">
						<div className="modal-header">
							<h2>Log In</h2>
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
							<div className="row">
								<div className="modal-body mx-auto col-4">
									<div className="mx-auto">
										<div className="form-group">
											<div className="form-inline">
												<h2>Username</h2>
											</div>
											<input
												className="form-control"
												type="text"
												placeholder=""
												onChange={e =>
													this.setState({
														username: e.target.value
													})
												}
											/>

											<div className="form-inline">
												<h2>Password</h2>
											</div>
											<input
												className="form-control"
												type="Password"
												placeholder=""
												onChange={e =>
													this.setState({
														password: e.target.value
													})
												}
											/>
										</div>
										<Context.Consumer>
											{({ store, actions }) => {
												return (
													<button
														className="btn btn-primary"
														type="button"
														onClick={() => {
															actions.loginUser(
																this.state
															);
															if (
																store.token !=
																undefined
															) {
																this.props.onClose();
															}
														}}>
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
