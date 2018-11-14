import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { LogIn } from "../component/login.jsx";
import { SignUp } from "../component/signup.jsx";

export class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			action: "",
			anotheraction: "",
			somethingelsehere: ""
		};
	}

	DropDown() {
		console.log("this.state", this.state);
	}

	render() {
		return (
			<React.Fragment>
				<div className="form-inline">
					<h2>Genre</h2>
				</div>
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
												showDropDown: true,
												showDropDown: false
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

								<div className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="navbarDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Genre
									</a>
									<div
										className="dropdown-menu"
										aria-labelledby="navbarDropdown">
										<a className="dropdown-item" href="#">
											Action
										</a>
										<a className="dropdown-item" href="#">
											Another action
										</a>
										<div className="dropdown-divider" />
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</div>
								</div>
								<button
									className="btn btn-primary"
									type="button"
									onClick={() => this.dropDown}>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

DropDown.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

DropDown.defaultProps = {
	show: false,
	onClose: null
};

export default withRouter(DropDown);
