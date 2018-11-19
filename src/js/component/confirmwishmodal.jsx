import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class WishAddModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showError: false
		};
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
							<h5 className="modal-title col-8 mx-auto text-center">
								Add to wishlist?
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
								Cancel
							</button>
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<button
											type="button"
											onClick={() => {
												if (
													store.wishlist.find(
														item =>
															item ===
															this.props.id
													) == undefined
												) {
													actions.addToWishlist(
														this.props.id
													);
													this.props.onClose();
												} else {
													{
														this.props.errorAlert();
													}
												}
											}}
											className="btn btn-success"
											data-dismiss="modal">
											Accept
										</button>
									);
								}}
							</Context.Consumer>
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
WishAddModal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number,
	errorAlert: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
WishAddModal.defaultProps = {
	show: false,
	onClose: null
};

export default withRouter(WishAddModal);
