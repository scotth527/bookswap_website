import React from "react";
import NewItem from "../component/library/new_item.jsx";
import Item from "../component/library/item.jsx";
import { Context } from "../store/appContext.jsx";
import Usermodal from "../component/usermodal.jsx";

export class Library extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showOwnersModal: false,
			bookid: 0
		};
	}
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
									addStuff={() =>
										this.setState({
											key: "wishlist",
											bookid: item.id,
											showOwnersModal: true
										})
									}
								/>
							);
						});
					}}
				</Context.Consumer>
				{this.state.showOwnersModal && (
					<Usermodal
						show={this.state.showOwnersModal}
						onClose={() =>
							this.setState({ key: "", showOwnersModal: false })
						}
						userKey={this.state.key}
						id={parseInt(this.state.bookid)}
					/>
				)}
			</div>
		);
	}
}
export default Library;
