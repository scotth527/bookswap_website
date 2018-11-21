import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Userdiv from "./userdiv.jsx";

export class Usermodal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userid: null
		};
	}

	selector = (e, id, prop) => {
		let key = e.currentTarget.parentNode.childNodes.find(
			e => e.id === this.state.userid.toString()
		);

		if (key !== undefined) {
			key.className = key.className.replace(" bg-secondary", "");
			prop(null);
		} else {
			e.currentTarget.className += " bg-secondary";
			prop(id);
		}
	};

	render() {
		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{
					display: this.props.show ? "inline-block" : "none"
				}}>
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
											this.props.currentUser,
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
													selector={this.selector}
													getUserID={id =>
														this.setState({
															userid: id
														})
													}
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
							<button
								onClick={() => {
									this.props.onConfirm(this.state.userid);
								}}
								type="button"
								className="btn btn-primary btn"
								disabled={this.state.userid ? false : true}>
								Request Trade
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
	onConfirm: PropTypes.func,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number,
	currentUser: PropTypes.number,
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
