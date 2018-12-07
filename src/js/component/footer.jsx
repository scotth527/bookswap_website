import React, { Component } from "react";

import "../../styles/footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer
				style={{
					flex: "1",
					background: "#CCD6DD",
					position: "relative",
					bottom: "0",
					flexShrink: "0",
					height: "40px"
				}}
				className="container-fluid mt-2 text-center border-top border-dark d-flex justify-content-center">
				<h2
					className="col-12"
					style={{
						width: "100%",

						fontSize: "10px"
					}}>
					© Book Swap 2018
				</h2>
				<a href="#top">Back to Top</a>
			</footer>
		);
	}
}
