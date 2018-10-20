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
			<Link to="/home">
				<button
					type="button"
					className="btn btn-outline-dark btn-lg btn-block mb-3"
					style={{ whiteSpace: "normal" }}>
					<h3 className="col-12 text-left">{props.pagetitle}</h3>
					<div className="col-12">{props.pagedescription}</div>
					<i className="far fa-arrow-alt-circle-right" />
				</button>
			</Link>
		</div>
	);
}

export default YourShop;
