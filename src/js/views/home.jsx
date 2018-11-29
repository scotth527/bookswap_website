import React from "react";
import { Link, withRouter } from "react-router-dom";
import HomePage from "./homepage.jsx";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<HomePage />
			</div>
		);
	}
}
export default withRouter(Home);
