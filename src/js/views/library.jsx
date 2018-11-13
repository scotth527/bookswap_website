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
			bookid: 0,
			key: ""
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
									key={store.books[item].id}
									title={store.books[item].title}
									description={store.books[item].description}
									buttonName="Find users who want this book"
									deleteStuff={() =>
										actions.deleteFromLibrary(index)
									}
									addStuff={() =>
										this.setState({
											key: "wishlist",
											bookid: store.books[item].id,
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
						divtitle="Users who are interested in the book"
					/>
				)}
			</div>
		);
	}
}
export default Library;
