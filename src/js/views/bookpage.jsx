import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import "../../styles/bookpage.css";
import StoreAddModal from "../component/confirmtostoremodal.jsx";
import WishAddModal from "../component/confirmwishmodal.jsx";
import Usermodal from "../component/usermodal.jsx";
import Trade from "../component/trade.jsx";
import ErrorModal from "../component/errormodal.jsx";

export class BookPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showConfirmLibModal: false,
			itemToAdd: 0,
			key: "",
			showConfirmWishModal: false,
			showOwnersModal: false,
			user: null,
			showTradeModal: false,
			showError: false,
			book: null
		};
	}

	componentDidMount() {
		fetch(
			[
				"https://backend-final-project-crivera09.c9users.io/api/books/",
				this.props.match.params.theid
			].join("")
		)
			.then(response => response.json())
			.then(data => {
				let state = this.state;
				state.book = data;
				this.setState({ state });
			})
			.catch(error => console.log(error));
	}

	itemToAddChanger(bookNumber) {
		let toAdd = this.state.itemToAdd;
		toAdd = bookNumber;
		this.setState(toAdd);
	}

	shorten(description) {
		if (description.length > 150) {
			return (
				description.substring(
					0,
					description.substring(0, 200).lastIndexOf(" ")
				) + "..."
			);
		} else return description;
	}

	render() {
		return (
			<div
				className="container-fluid mt-5 d-flex flex-column wrapper"
				style={{
					flexGrow: "1",
					position: "relative"
				}}>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							if (this.state.book !== null) {
								return (
									<div className="mx-auto col-12 text-center">
										<div className="d-flex">
											<img
												className="col-3 "
												src={this.state.book.image}
												alt="..."
											/>
											<div className="col-9 d-flex flex-column mx-auto">
												<h1 className="text-left mb-3">
													{"Title: " +
														this.state.book.title}
												</h1>
												<div className="row mx-auto" />
												<div className="col-12 d-flex mx-auto">
													<div className="col-6 text-left">
														<p>
															{"By: " +
																this.state.book
																	.author}
														</p>
														<p>Genre</p>
														<p>
															{"Language: " +
																this.state.book
																	.editionlanguage}
														</p>
														<p>ISBN</p>
														<p className="text-wrap">
															{"Description: " +
																this.shorten(
																	this.state
																		.book
																		.description
																)}
														</p>
													</div>
													<div className="col-5 d-flex flex-column align-content-end text-wrap">
														<button
															onClick={() =>
																this.setState({
																	showConfirmLibModal: true,
																	showConfirmWishModal: false,
																	showOwnersModal: false,
																	user:
																		store
																			.sessions
																			.profile
																})
															}
															type="button"
															style={{
																whiteSpace:
																	"normal"
															}}
															className="btn btn-dark
														mb-2 ">
															{" "}
															I own it & want to
															trade this book
														</button>
														<button
															onClick={() =>
																this.setState({
																	showConfirmLibModal: false,
																	showConfirmWishModal: true,
																	showOwnersModal: false
																})
															}
															type="button"
															className="btn btn-dark">
															Add to wishlist
														</button>
														<h2>or</h2>
														<button
															onClick={() => {
																this.setState({
																	key:
																		"owners",
																	showConfirmLibModal: false,
																	showConfirmWishModal: false,
																	showOwnersModal: true
																});

																actions.fetchOwners(
																	this.props
																		.match
																		.params
																		.theid
																);
															}}
															type="button"
															style={{
																whiteSpace:
																	"normal"
															}}
															className="btn btn-dark
														mb-2 ">
															{" "}
															Users who OWN this
															book
														</button>
														<button
															onClick={() => {
																this.setState({
																	key:
																		"wishers",
																	showConfirmLibModal: false,
																	showConfirmWishModal: false,
																	showOwnersModal: true
																});
																actions.fetchInterested(
																	this.props
																		.match
																		.params
																		.theid
																);
															}}
															type="button"
															style={{
																whiteSpace:
																	"normal"
															}}
															className="btn btn-dark
														mb-2 ">
															{" "}
															Users who WANT
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							} else {
								return <h1>Not a valid Book</h1>;
							}
						}}
					</Context.Consumer>
				</div>
				{this.state.showConfirmLibModal && (
					<StoreAddModal
						show={this.state.showConfirmLibModal}
						onClose={() =>
							this.setState({ showConfirmLibModal: false })
						}
						id={parseInt(this.props.match.params.theid)}
						sender={this.state.user}
						errorAlert={() =>
							this.setState({
								showConfirmLibModal: false,
								showConfirmWishModal: false,
								showError: true
							})
						}
					/>
				)}
				{this.state.showConfirmWishModal && (
					<WishAddModal
						show={this.state.showConfirmWishModal}
						onClose={() =>
							this.setState({ showConfirmWishModal: false })
						}
						id={parseInt(this.props.match.params.theid)}
						errorAlert={() =>
							this.setState({
								showConfirmLibModal: false,
								showConfirmWishModal: false,
								showError: true
							})
						}
					/>
				)}
				{this.state.showOwnersModal && (
					<Usermodal
						show={this.state.showOwnersModal}
						onClose={() =>
							this.setState({ key: "", showOwnersModal: false })
						}
						userKey={this.state.key}
						id={parseInt(this.props.match.params.theid)}
						onConfirm={id =>
							this.setState({
								showOwnersModal: false,
								user: id,
								showTradeModal: true
							})
						}
					/>
				)}
				{this.state.showTradeModal && (
					<Context.Consumer>
						{({ store, actions }) => {
							console.log(store.library);
							return (
								<Trade
									show={this.state.showTradeModal}
									books={[this.state.book, store.library]}
									sender={this.state.user}
									receiver={store.sessions}
									onReturn={() =>
										this.setState({
											showOwnersModal: true,
											showTradeModal: false
										})
									}
									onConfirm={() => {
										this.setState({
											key: "",
											user: null,
											showOwnersModal: false,
											showTradeModal: false
										});
									}}
								/>
							);
						}}
					</Context.Consumer>
				)}
				{this.state.showError && (
					<ErrorModal
						reveal={this.state.showError}
						onClose={() => this.setState({ showError: false })}
					/>
				)}
			</div>
		);
	}
}

BookPage.propTypes = {
	match: PropTypes.object
};

BookPage.defaultProps = {
	show: false,
	onClose: null,
	showError: false
};
