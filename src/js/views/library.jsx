import React from "react";
import NewItem from "../component/library/new_item.jsx";
import Item from "../component/library/item.jsx";
import { Context } from "../store/appContext.jsx";
import Usermodal from "../component/usermodal.jsx";
import "../../styles/library.css";

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
				className="container-fluid wrapper"
				style={{
					wordWrap: "break-word",
					marginTop: "50px",
					flexGrow: "1",
					position: "relative"
				}}>
				<NewItem className="modal-dialog" />
				<Context.Consumer>
					{({ store, actions }) => {
						return store.library.map((item, index) => {
							return (
								<Item
									id={actions.searchBookByID(item).id}
									key={index}
									title={actions.searchBookByID(item).title}
									description={
										actions.searchBookByID(item).description
									}
									buttonName="Find users who want this book"
									deleteStuff={() =>
										actions.deleteFromLibrary(index)
									}
									addStuff={() =>
										this.setState({
											key: "wishlist",
											bookid: actions.searchBookByID(item)
												.id,
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
