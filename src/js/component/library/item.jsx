import React from "react";
import PropTypes from "prop-types";

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
			<div className="col-12 bg-light border border-dark rounded mb-2">
				<div className="row">
					<div className="col-2 my-auto">
						<img src="https://via.placeholder.com/75x75" />
					</div>
					<div className="col-10 py-2">
						<div className="row">
							<div className="col-8" alt="Title">
								<h5>{this.props.title}</h5>
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
								<p>{this.shorten(this.props.description)}</p>
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
Item.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
};
Item.defaultProps = {
	title: "Placeholder",
	description: "PLACEHOLDER"
};

export default Item;
