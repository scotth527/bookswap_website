import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import "../../styles/bookpage.css";
import StoreAddModal from "../component/confirmtostoremodal.jsx";

export class BookPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showConfirmLibModal: false,
			itemToAdd: 0,
			showConfirmWishModal: false,
			showOwnersModal: false
		};
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
							return (
								<div className="mx-auto col-12 text-center">
									<div className="d-flex">
										<img
											className="col-3 "
											src={
												store.books[
													this.props.match.params
														.theid
												].image
											}
											alt="..."
										/>
										<div className="col-9 d-flex flex-column mx-auto">
											<h1 className="text-left mb-3">
												{"Title: " +
													store.books[
														this.props.match.params
															.theid
													].title}
											</h1>
											<div className="row mx-auto" />
											<div className="col-12 d-flex mx-auto">
												<div className="col-6 text-left">
													<p>
														{"By: " +
															store.books[
																this.props.match
																	.params
																	.theid
															].author}
													</p>
													<p>Genre</p>
													<p>
														{"Language: " +
															store.books[
																this.props.match
																	.params
																	.theid
															].editionlanguage}
													</p>
													<p>ISBN</p>
													<p className="text-wrap">
														{"Description: " +
															this.shorten(
																store.books[
																	this.props
																		.match
																		.params
																		.theid
																].description
															)}
													</p>
												</div>
												<div className="col-5 d-flex flex-column align-content-end text-wrap">
													<button
														onClick={() =>
															this.setState({
																showConfirmLibModal: true
															})
														}
														type="button"
														style={{
															whiteSpace: "normal"
														}}
														className="btn btn-dark
														mb-2 ">
														{" "}
														I own it & want to trade
														this book
													</button>
													<button
														type="button"
														className="btn btn-dark">
														Add to wishlist
													</button>
													<h2>or</h2>
													<button
														type="button"
														style={{
															whiteSpace: "normal"
														}}
														className="btn btn-dark
														mb-2 ">
														{" "}
														Users who OWN this book
													</button>
													<button
														type="button"
														style={{
															whiteSpace: "normal"
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
						}}
					</Context.Consumer>
				</div>
				<StoreAddModal
					show={this.state.showConfirmLibModal}
					onClose={() =>
						this.setState({ showConfirmLibModal: false })
					}
				/>
			</div>
		);
	}
}

BookPage.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object,
	onDelete: PropTypes.func,
	delete: PropTypes.func
};
