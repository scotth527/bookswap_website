import React from "react";

export class Trade extends React.Component {
	constructor() {
		super();
		this.state = {
			url: window.location.pathname.substring(7).split("/")
		};
	}

	render() {
		return (
			<div className="container">
				<div className="row">{console.log(this.state.url)}</div>
			</div>
		);
	}
}
export default Trade;
