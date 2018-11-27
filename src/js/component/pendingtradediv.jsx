import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function Pendingtrade(props) {
	return (
		<div className="d-flex justify-content-between col-8 mx-auto rounded border border-dark text-center mb-2">
			<div className="mx-auto col-8 d-flex">
				<div className="ml-3 mr-4 mb-3">
					<img src={props.requesterpic} />
					<h2>{props.requesterusername} </h2>
					<h3>{"From: " + props.requestercity} </h3>
					<h3>{"Book: " + props.requesterbook} </h3>
				</div>

				<div>
					<i className="mt-5 fas fa-exchange-alt" />
				</div>
				<div className="ml-3 mb-3">
					<img src={props.requestedpic} />
					<h2>{props.requestedusername} </h2>
					<h3>{"From: " + props.requestedcity} </h3>
					<h3>{"Book: " + props.requestedbook} </h3>
				</div>

				<div
					style={{
						display: props.Trade_is_accepted
							? "inline-block"
							: "none"
					}}
					className="d-flex ml-5 mt-4">
					<i
						onClick={() => {
							props.rejectTrade();
						}}
						className="btn fas fa-ban"
					/>
					<i
						onClick={() => {
							props.confirmTrade();
						}}
						className="btn fas fa-check-circle"
					/>
				</div>
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
	Trade_is_accepted: PropTypes.bool,
	confirmTrade: PropTypes.func,
	rejectTrade: PropTypes.func
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
