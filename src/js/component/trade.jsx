import React from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import Item from "./library/item.jsx";
import Userdiv from "./userdiv.jsx";

export class Trade extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show
		};
	}

	render() {
		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{
					display: this.state.show ? "inline-block" : "none"
				}}>
				<div
					className="modal-dialog"
					style={{ maxWidth: "90vw" }}
					role="document">
					<div className="modal-content">
						<div className="modal-header col-12">
							<div className="row justify-context-space-between">
								<div className="col-12" />
								<div className="col-12">
									<div className="row">
										<div className="mx-auto">
											<h5>Confirm Trade Request</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-body">
							<div className="row">
								<Context.Consumer>
									{({ store, actions }) => {
										let sender = actions.searchUser(
											this.props.sender
										);
										let receiver = actions.searchUser(
											this.props.receiver
										);

										return (
											<React.Fragment>
												<div className="col-5">
													<Userdiv
														id={sender.id}
														//Picurl="https://picsum.photos/50/50/?random"
														City={sender.city}
														Username={
															sender.username
														}
													/>
													<Item
														id={this.props.book}
														simple={true}
													/>
												</div>
												<div className="col-2 text-center my-auto">
													<i
														className="fas fa-exchange-alt"
														style={{
															fontSize: "5vw"
														}}
													/>
												</div>
												<div className="col-5">
													<Userdiv
														id={receiver.id}
														//Picurl="https://picsum.photos/50/50/?random"
														City={receiver.city}
														Username={
															receiver.username
														}
													/>
													<Item
														id={this.props.book}
														simple={true}
													/>
												</div>
											</React.Fragment>
										);
									}}
								</Context.Consumer>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								onClick={() => this.props.onReturn()}
								className="btn btn-secondary mr-2"
								data-dismiss="modal">
								Switch Sender
							</button>
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<button
											onClick={() => {
												this.props.onConfirm();
											}}
											type="button"
											className="btn btn-primary btn">
											Confirm Trade
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
Trade.propTypes = {
	show: PropTypes.bool,
	book: PropTypes.number,
	sender: PropTypes.number,
	receiver: PropTypes.number,
	onReturn: PropTypes.func,
	onConfirm: PropTypes.func
	//onExit: PropTypes.func
};
Trade.defaultProps = {
	show: false,
	book: null,
	sender: null,
	receiver: null
};
export default Trade;
