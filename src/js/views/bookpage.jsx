import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import "../../styles/bookpage.css";
import StoreAddModal from "../component/confirmtostoremodal.jsx";
import WishAddModal from "../component/confirmwishmodal.jsx";
import Usermodal from "../component/usermodal.jsx";

export class BookPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showConfirmLibModal: false,
			itemToAdd: 0,
			key: "",
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
		console.log();
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
							let theBook = store.books.filter(item => {
								return (
									item.id ===
									parseInt(this.props.match.params.theid)
								);
							});
							//console.log(theBook);
							if (theBook.length > 0) {
								return (
									<div className="mx-auto col-12 text-center">
										<div className="d-flex">
											<img
												className="col-3 "
												src={theBook[0].image}
												alt="..."
											/>
											<div className="col-9 d-flex flex-column mx-auto">
												<h1 className="text-left mb-3">
													{"Title: " +
														theBook[0].title}
												</h1>
												<div className="row mx-auto" />
												<div className="col-12 d-flex mx-auto">
													<div className="col-6 text-left">
														<p>
															{"By: " +
																theBook[0]
																	.author}
														</p>
														<p>Genre</p>
														<p>
															{"Language: " +
																theBook[0]
																	.editionlanguage}
														</p>
														<p>ISBN</p>
														<p className="text-wrap">
															{"Description: " +
																this.shorten(
																	theBook[0]
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
																	showOwnersModal: false
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
															onClick={() =>
																this.setState({
																	key:
																		"library",
																	showConfirmLibModal: false,
																	showConfirmWishModal: false,
																	showOwnersModal: true
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
															Users who OWN this
															book
														</button>
														<button
															onClick={() =>
																this.setState({
																	key:
																		"wishlist",
																	showConfirmLibModal: false,
																	showConfirmWishModal: false,
																	showOwnersModal: true
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
					/>
				)}
				{this.state.showConfirmWishModal && (
					<WishAddModal
						show={this.state.showConfirmWishModal}
						onClose={() =>
							this.setState({ showConfirmWishModal: false })
						}
						id={parseInt(this.props.match.params.theid)}
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
					/>
				)}
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

BookPage.defaultProps = {
	show: false,
	onClose: null
};
