import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class BookPage extends React.Component {
	render() {
		return (
			<div className="container-fluid mt-5">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="mx-auto col-12 text-center">
									<div className="d-flex">
										<img
											className="col-3 "
											src="https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
											alt="..."
										/>
										<div className="col-9 d-flex flex-column mx-auto">
											<h1 className="text-left mb-3">
												This will show the demo element:{" "}
												{
													store.demo[
														this.props.match.params
															.theid
													].title
												}
											</h1>
											<div className="row mx-auto" />
											<div className="col-12 d-flex mx-auto">
												<div className="col-6 text-left">
													<p>By: Author</p>
													<p>Genre</p>
													<p># of pages </p>
													<p>Language</p>
													<p>ISBN</p>
													<p className="text-wrap">
														Description
													</p>
												</div>
												<div className="col-5 d-flex flex-column align-content-end text-wrap">
													<button
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
														style={{
															whiteSpace: "normal"
														}}
														className="btn btn-dark
														mb-2 ">
														{" "}
														Find users who own this
														book
													</button>
													<h2>or</h2>
													<button
														onClick
														type="button"
														className="btn btn-dark">
														Add to wishlist
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
			</div>
		);
	}
}

BookPage.propTypes = {
	match: PropTypes.object
};
