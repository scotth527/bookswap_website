import React from "react";
import Item from "../component/library/item.jsx";

export class Library extends React.Component {
	render() {
		return (
			<div className="container" style={{ wordWrap: "break-word" }}>
				<Item newItem={true} />
				<Item />
			</div>
		);
	}
}
export default Library;
