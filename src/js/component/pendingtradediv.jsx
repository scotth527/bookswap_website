import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function Pendingtrade(props) {
	return (
		<div className="d-flex justify-content-between col-10 mx-auto rounded border border-dark text-center mb-2">
			<div className="mr-4">
				<img src={props.requesterpic} />
				<h2>{props.requesterusername} </h2>
				<h3>{props.requestercity} </h3>
				<h3>{props.requesterbook} </h3>
			</div>

			<div className="align-middle">
				<i className="fas fa-exchange-alt" />
			</div>
			<div>
				<img src={props.requestedpic} />
				<h2>{props.requestedusername} </h2>
				<h3>{props.requestedcity} </h3>
				<h3>{props.requestedbook} </h3>
			</div>

			<div
				style={{
					display: props.Trade_is_accepted ? "inline-block" : "none"
				}}
				className="d-flex">
				<i className="fas fa-check-circle" />
				<i className="fas fa-ban" />
			</div>
		</div>
	);
}

Pendingtrade.propTypes = {
	requesterpic: PropTypes.string,
	requesterusername: PropTypes.string,
	requestercity: PropTypes.string,
	requesterbook: PropTypes.string,
	requestedpic: PropTypes.string,
	requestedusername: PropTypes.string,
	requestedcity: PropTypes.string,
	requestedbook: PropTypes.string,
	//index: PropTypes.number,
	Trade_is_accepted: PropTypes.bool
};

Pendingtrade.defaultProps = {
	requesterpic: "Placeholder",
	requesterusername: "Placeholder",
	requestercity: "Placeholder",
	requesterbook: "Placeholder",
	requestedpic: "Placeholder",
	requestedusername: "Placeholder",
	requestedcity: "Placeholder",
	reqquestedbook: "Placeholder",
	//index: PropTypes.number,
	Trade_is_accepted: false
};

export default Pendingtrade;
