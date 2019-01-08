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
					console.log(this.props.id);
					if (typeof book === "undefined") {
						return <h2> No book selected</h2>;
					} else {
						return (
							<div
								className={
									"col-12 bg-light border border-dark rounded mb-2" +
									this.props.drop
										? "dropdown-toggle"
										: ""
								}
								onClick={() => {
									if (this.props.drop) {
										this.toggle();
									}
								}}>
								<div className="row">
									<div className="col-4 my-auto">
										<img src="https://via.placeholder.com/75x75" />
									</div>
									<div className="col-xs-12 col-lg-8 py-2">
										<div className="row">
											<div
												className={
													"col-" + this.props.simple
														? "12"
														: "8"
												}
												alt="Title">
												<h5 className="px-1">
													{book.title ||
														"Placeholder"}
												</h5>
											</div>
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
											<div className="row justify-content-end pr-2">
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
											<div
												className="col-12"
												alt="Author">
												<p className="text-secondary" />
											</div>
										)}
									</div>
								</div>

								{this.state.toggle && (
									<div className="dropdown-menu" />
								)}
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
	drop: PropTypes.bool
};
Item.defaultProps = {
	buttonName: "Name of view",
	simple: false,
	drop: false
};

export default Item;
