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
					return (
						<div className="col-12 bg-light border border-dark rounded mb-2">
							<div className="row">
								<div className="col-2 my-auto">
									<img src="https://via.placeholder.com/75x75" />
								</div>
								<div className="col-xs-12 col-lg-10 py-2">
									<div className="row">
										<div className="col-8" alt="Title">
											<h5>
												{actions.searchBookByID(
													this.props.id
												).title || "Placeholder"}
											</h5>
										</div>
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
									</div>
									<div className="row">
										<div
											className="col-12"
											alt="Description">
											<p>
												{this.shorten(
													actions.searchBookByID(
														this.props.id
													).description
												) || "PLACEHOLDER"}
											</p>
										</div>
									</div>
									<div className="row justify-content-end pr-2">
										<button
											onClick={() => {
												this.props.addStuff();
											}}
											className="btn btn-sm"
											style={{ whiteSpace: "normal" }}>
											{this.props.buttonName}
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Item.propTypes = {
	id: PropTypes.number,
	buttonName: PropTypes.string,
	addStuff: PropTypes.func,
	deleteStuff: PropTypes.func
};
Item.defaultProps = {
	buttonName: "Name of view"
};

export default Item;
