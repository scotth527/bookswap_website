import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function Pendingtrade(props) {
	return (
		<div className="d-flex justify-content-between col-8 mx-auto rounded border border-dark text-center mb-2">
			<div className="mx-auto col-8 d-flex">
				<div className="col-5 ml-2 mr-2 mb-3">
					<img
						className="mt-3"
						alt="user pic"
						src={props.requesterpic}
					/>
					<h2>{props.requesterusername} </h2>
					<h3>{"From: " + props.requestercity} </h3>
					<h3>{"Book: " + props.requesterbook} </h3>
				</div>

				<div>
					<i className="col-1 mt-5 fas fa-exchange-alt" />
				</div>
				<div className="col-5 ml-2 mb-3">
					<img
						className="mt-3"
						alt="user pic"
						src={props.requestedpic}
					/>
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
					className="col-4 d-flex ml-2 mr-1 mt-4">
					<button
						type="button"
						onClick={() => {
							props.rejectTrade();
						}}
						className="btn btn-secondary btn-sm mb-3">
						Reject
					</button>
					<button
						type="button"
						onClick={() => {
							props.confirmTrade();
						}}
						className="btn btn-success btn-sm mb-3">
						Accept
					</button>
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
