import React from "react";
import { Context } from "../store/appContext.jsx";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export class Browse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div />;
	}
}

Browse.propTypes = {
	//id: PropTypes.string,
	history: PropTypes.object,
	match: PropTypes.object,
	onDelete: PropTypes.func,
	delete: PropTypes.func
};
export default withRouter(Browse);
