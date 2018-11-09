import React from "react";
import NewItem from "../component/library/new_item.jsx";
import Item from "../component/library/item.jsx";
import { Context } from "../store/appContext.jsx";

export class Library extends React.Component {
	render() {
		return (
			<div
				className="container"
				style={{ wordWrap: "break-word", marginTop: "50px" }}>
				<NewItem className="modal-dialog" />
				<Context.Consumer>
					{({ store, actions }) => {
						return store.library.map((item, index) => {
							return (
								<Item
									key={index}
									title={item.title}
									description={item.description}
									buttonName="Find users who want this book"
								/>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
export default Library;
