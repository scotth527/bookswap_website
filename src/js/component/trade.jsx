import React from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import Item from "./library/item.jsx";
import Userdiv from "./userdiv.jsx";

export class Trade extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show,
			book: this.props.book,
			sender: this.props.sender,
			receiver: this.props.receiver
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
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
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
							<div className="row justify-content-center">
								<div className="col-12 mb-2">
									<div className="row">
										<div className="mx-auto">
											<p>The book</p>
										</div>
									</div>
								</div>
								<div className="col-10">
									<Item id={this.props.book} simple={true} />
								</div>
								<div className="col-12 my-2">
									<div className="row">
										<div className="mx-auto">
											<p>will be sent by</p>
										</div>
									</div>
								</div>
								<Context.Consumer>
									{({ store, actions }) => {
										let sender = actions.searchUser(
											this.state.sender
										);
										let receiver = actions.searchUser(
											this.state.receiver
										);

										return (
											<React.Fragment>
												<div className="col-8">
													<Userdiv
														id={sender.id}
														//Picurl="https://picsum.photos/50/50/?random"
														City={sender.city}
														Username={
															sender.username
														}
													/>
												</div>
												<div className="col-12 my-2">
													<div className="row">
														<div className="mx-auto">
															<p>to</p>
														</div>
													</div>
												</div>
												<div className="col-8">
													<Userdiv
														id={receiver.id}
														//Picurl="https://picsum.photos/50/50/?random"
														City={receiver.city}
														Username={
															receiver.username
														}
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
