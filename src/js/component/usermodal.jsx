import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Userdiv from "./userdiv.jsx";

export class Usermodal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSelf: this.props.show,
			showTrade: false
		};
	}

	render() {
		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{ display: this.state.show ? "inline-block" : "none" }}>
				<div className="modal-dialog " role="document">
					<div className="modal-content col-12">
						<div className="modal-header">
							<h5 className="modal-title  mx-auto text-center">
								{this.props.divtitle}
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
						<div className="modal-body mx-auto col-12 d-flex flex-column">
							<Context.Consumer>
								{({ store, actions }) => {
									return actions
										.searchUsersForID(
											this.props.id,
											this.props.userKey
										)
										.map((item, index) => {
											return (
												<Userdiv
													key={index}
													id={item.id}
													//index={index}
													Picurl="https://picsum.photos/50/50/?random"
													City={item.city}
													Username={item.username}
												/>
											);
										});
								}}
							</Context.Consumer>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								onClick={() => this.props.onClose()}
								className="btn btn-secondary mr-2"
								data-dismiss="modal">
								Cancel
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
Usermodal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number,
	userKey: PropTypes.string,
	divtitle: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Usermodal.defaultProps = {
	show: false,
	onClose: null,
	divtitle: "Users"
};

export default withRouter(Usermodal);
