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
			offeredBook: -1,
			trader: null
		};
	}

	componentDidMount() {
		fetch(
			[
				"https://backend-final-project-crivera09.c9users.io/api/inv/",
				this.props.books[0].id,
				"/",
				this.props.sender.id
			].join("")
		)
			.then(response => response.json())
			.then(data => {
				let state = this.state;
				state.trader = data.id;
				this.setState(state);
			})
			.catch(error => console.log(error));
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
								<React.Fragment>
									<div className="col-5">
										<Userdiv
											id={this.props.sender.id}
											//Picurl="https://picsum.photos/50/50/?random"
											City={this.props.sender.city}
											Username={
												this.props.sender.user.username
											}
										/>
										<Item
											id={parseInt(
												this.props.books[0].api_id
											)}
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
											id={this.props.receiver.id}
											//Picurl="https://picsum.photos/50/50/?random"
											City={this.props.receiver.city}
											Username={
												this.props.receiver.user
													.username
											}
										/>
										<Item
											id={this.props.books[1][0].book.id}
											simple={true}
											drop={true}
										/>
										<select
											onChange={e =>
												this.setState({
													offeredBook: e.target.key
												})
											}
											id="inputState"
											className="form-control">
											<option selected>
												Select book to offer
											</option>
											)
											<Context.Consumer>
												{({ store, actions }) => {
													return store.library.map(
														(item, index) => {
															return (
																<option
																	onChange={() =>
																		this.setState(
																			{
																				offeredBook:
																					item.id
																			}
																		)
																	}
																	key={
																		item
																			.book
																			.api_id
																	}>
																	{
																		item
																			.book
																			.title
																	}
																</option>
															);
														}
													);
												}}
											</Context.Consumer>
										</select>
									</div>
								</React.Fragment>
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
												actions.addTradeRequest({
													trader: this.state.trader,
													requester: this.props
														.books[1][0].id,
													status: true
												});
												actions.clearStore();
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
	books: PropTypes.array,
	sender: PropTypes.object,
	receiver: PropTypes.object,
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
