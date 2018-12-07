import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export class IndivTrade extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="col-11 rounded border d-flex justify-content-around border-dark mx-auto mb-2">
				<h5 className="mt-3">
					{this.props.user + " is requesting " + this.props.book}
				</h5>
			</div>
		);
	}
}

IndivTrade.propTypes = {
	user: PropTypes.string,
	book: PropTypes.string
};

export default IndivTrade;
