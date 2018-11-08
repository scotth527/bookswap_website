import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function YourShop(props) {
	YourShop.propTypes = {
		pagetitle: PropTypes.string,
		pagedescription: PropTypes.string
	};

	return (
		<div>
			<div className="card mb-3">
				<div className="card-header text-left">
					<h5 className="card-title">{props.pagetitle}</h5>
				</div>
				<div className="card-body text-center">
					<p className="card-text" style={{ whiteSpace: "normal" }}>
						{props.pagedescription}
					</p>
					<Link to="/home">
						<button
							type="button"
							className="btn btn-outline-dark btn-lg mb-3 text-right"
							style={{ whiteSpace: "normal" }}>
							<i className="far fa-arrow-alt-circle-right" />
						</button>
					</Link>
				</div>
				<div className="card-footer text-muted">2 days ago</div>
			</div>
		</div>
	);
}

export default YourShop;
