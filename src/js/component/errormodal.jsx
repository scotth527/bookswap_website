import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class ErrorModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{
					display: this.props.reveal ? "inline-block" : "none"
				}}>
				<div className="modal-dialog " role="document">
					<div className="modal-content col-12">
						<div className="modal-header">
							<h5 className="modal-title  mx-auto text-center">
								You have already added this book!
							</h5>
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

						<div className="modal-footer">
							<button
								type="button"
								onClick={() => this.props.onClose()}
								className="btn btn-secondary mr-2"
								data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
/**
 * Define the data-types for
 * your component's properties
 **/
ErrorModal.propTypes = {
	onClose: PropTypes.func,
	reveal: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
ErrorModal.defaultProps = {
	reveal: false,
	onClose: null
};

export default withRouter(ErrorModal);
