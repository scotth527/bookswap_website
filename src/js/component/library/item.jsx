import React from "react";
import PropTypes from "prop-types";

import { Context } from "../../store/appContext.jsx";

export class Item extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			toggle: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			toggle: !prevState.toggle
		}));
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
			<Context.Consumer>
				{({ store, actions }) => {
					const book = actions.searchBookByID(this.props.id);
					if (typeof book === "undefined") {
						return <h2> No book selected</h2>;
					} else {
						return (
							<div className="col-12 border border-dark d-flex rounded mb-3 p-4">
								<div className="col-2">
									<img
										style={{
											objectFit: "contain",
											width: "100%",
											height: "100%"
										}}
										className="mx-auto my-auto"
										src={
											book.thumbnail ||
											"https://via.placeholder.com/75x75"
										}
									/>
								</div>
								<div className="d-flex flex-column">
									<div
										style={{ maxHeight: "50px" }}
										className="col-8 d-flex justify-content-between p-0">
										<h5> {book.title || "Placeholder"}</h5>

										{!this.props.simple && (
											<div
												className="col-4 text-right"
												alt="Rating">
												<i
													onClick={() =>
														this.props.deleteStuff()
													}
													className="btn far fa-times-circle"
												/>
											</div>
										)}
									</div>
									{!this.props.simple && (
										<div className="row">
											<div
												className="col-12"
												alt="Description">
												<p>
													{this.shorten(
														book.description
													) || "PLACEHOLDER"}
												</p>
											</div>
										</div>
									)}
									{!this.props.simple && (
										<div className="row justify-content-end mt-5 pr-2">
											<button
												onClick={() =>
													this.props.addStuff()
												}
												className="btn btn-sm"
												style={{
													whiteSpace: "normal"
												}}>
												{this.props.buttonName}
											</button>
										</div>
									)}
									{this.props.drop && (
										<div className="col-12" alt="Author">
											<p className="text-secondary" />
										</div>
									)}
								</div>
							</div>
						);
					}
				}}
			</Context.Consumer>
		);
	}
}
Item.propTypes = {
	id: PropTypes.number,
	buttonName: PropTypes.string,
	addStuff: PropTypes.func,
	deleteStuff: PropTypes.func,
	simple: PropTypes.bool,
	drop: PropTypes.bool,
	thumbnails: PropTypes.string
};
Item.defaultProps = {
	buttonName: "Name of view",
	simple: false,
	drop: false,
	thumbnails: "https://via.placeholder.com/75x75"
};

export default Item;
