import React from "react";
import NewItem from "../component/library/new_item.jsx";
import Item from "../component/library/item.jsx";
import { Context } from "../store/appContext.jsx";
import Usermodal from "../component/usermodal.jsx";
import "../../styles/index.css";
import Trade from "../component/trade.jsx";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export class Library extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showOwnersModal: false,
			bookid: 0,
			key: "",
			showTradeModal: false
		};
	}
	render() {
		return (
			<div
				className="container-fluid wrapper mb-5"
				style={{
					wordWrap: "break-word",
					marginTop: "50px",
					flexGrow: "1",
					position: "relative"
				}}>
				<NewItem className="modal-dialog" />
				<Context.Consumer>
					{({ store, actions }) => {
						return actions
							.searchUser(store.sessions.profile)
							.library.map((item, index) => {
								return (
									<Item
										id={item}
										key={index}
										title={
											actions.searchBookByID(item).title
										}
										description={
											actions.searchBookByID(item)
												.description
										}
										buttonName="Find users who want this book"
										deleteStuff={() =>
											actions.deleteFromLibrary(index)
										}
										userKey={this.state.key}
										addStuff={() =>
											this.setState({
												key: "wishlist",
												bookid: item,
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
						onConfirm={id =>
							this.setState({
								showOwnersModal: false,
								user: id,
								showTradeModal: true
							})
						}
					/>
				)}
				<Trade
					show={this.state.showTradeModal}
					book={parseInt(this.state.bookid)}
					sender={this.state.user}
					receiver={3}
					onReturn={() =>
						this.setState({
							showOwnersModal: true,
							showTradeModal: false
						})
					}
					onConfirm={() =>
						this.setState({
							key: "",
							user: null,
							showTradeModal: false
						})
					}
				/>
			</div>
		);
	}
}

Library.propTypes = {
	//id: PropTypes.string,
	history: PropTypes.object,
	match: PropTypes.object,
	onDelete: PropTypes.func,
	delete: PropTypes.func
};
export default withRouter(Library);
