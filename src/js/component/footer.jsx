import React, { Component } from "react";

import "../../styles/footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer
				style={{
					background: "#CCD6DD",
					position: "relative",
					bottom: "0",
					flexShrink: "0",
					height: "40px"
				}}
				className="container-fluid mt-2 text-center border-top border-dark">
				<h2 className="col-12" style={{ fontSize: "10px" }}>
					© Book Swap 2018
				</h2>
			</footer>
		);
	}
}
