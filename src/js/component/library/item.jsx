import React from "react";
import PropTypes from "prop-types";

export class Item extends React.Component {
	constructor(props) {
		super();
		this.state = {
			newItem: props.newItem
		};
	}
	render() {
		if (this.state.newItem) {
			return (
				<React.Fragment>
					<button
						className="btn btn-outline-dark btn-lg btn-block mb-3 border border-dark rounded"
						style={{ whiteSpace: "normal" }}>
						<div className="row">
							<div className="col-2 my-auto">
								<img src="https://via.placeholder.com/75x75" />
							</div>
							<div className="col-10 mx-auto my-auto">
								<h4>Add a Book</h4>
							</div>
						</div>
					</button>

					<hr className="featurette-divider my-3" />
				</React.Fragment>
			);
		} else {
			return (
				<div className="col-12 bg-light border border-dark rounded">
					<div className="row">
						<div className="col-2 my-auto">
							<img src="https://via.placeholder.com/75x75" />
						</div>
						<div className="col-10 py-2">
							<div className="row">
								<div className="col-8" alt="Title">
									Placeholder
								</div>
								<div className="col-4 text-right" alt="Rating">
									<i className="far fa-star" />
									<i className="far fa-star" />
									<i className="far fa-star" />
									<i className="far fa-star" />
									<i className="far fa-star" />
								</div>
							</div>
							<div className="row">
								<div className="col-12" alt="Description">
									PLACEHOLDER
								</div>
							</div>
							<div className="row justify-content-end pr-2">
								<button
									className="btn"
									style={{ whiteSpace: "normal" }}>
									View Book Page
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}
Item.propTypes = {
	newItem: PropTypes.boolean
};
Item.defaultTypes = {
	newItem: false
};
export default Item;
