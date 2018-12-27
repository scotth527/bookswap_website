import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Userdiv from "./userdiv.jsx";

export class Usermodal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
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
									return store[this.props.userKey].map(
										(profile, index) => {
											console.log(profile);
											const user = profile["id"];
											if (typeof user === "undefined") {
												return (
													<h2 key={index}>
														{" "}
														Error retrieving user
													</h2>
												);
											} else {
												return (
													<Userdiv
														key={profile["id"]}
														id={profile["id"]}
														//index={index}
														Picurl="https://picsum.photos/50/50/?random"
														City={profile["city"]}
														Username={
															profile["user"]
																.username
														}
														getUserID={id =>
															this.setState({
																user: profile
															})
														}
													/>
												);
											}
										}
									);
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
									this.props.onConfirm(this.state.user);
								}}
								type="button"
								className="btn btn-primary btn"
								disabled={this.state.user ? false : true}>
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
