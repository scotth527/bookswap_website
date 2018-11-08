import React, { Component } from "react";

import "../../styles/footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer
				style={{
					position: "absolute",
					bottom: "0",
					left: "0",
					flexShrink: "0",
					height: "40px"
				}}
				className="container-fluid mt-2 text-center border-top border-dark">
				<h2 className="col-12">Footer</h2>
			</footer>
		);
	}
}
