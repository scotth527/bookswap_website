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
			key: "wishers",
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
					minHeight: "75vh",
					position: "relative"
				}}>
				<NewItem className="modal-dialog" />
				<Context.Consumer>
					{({ store, actions }) => {
						return store.library.map((item, index) => {
							return (
								<Item
									thumbnails={item.book.thumbnail}
									id={parseInt(item.book.api_id)}
									key={index}
									title={item.book.title}
									description={item.book.description}
									buttonName="Find users who want this book"
									deleteStuff={() =>
										actions.deleteFromLibrary(item.id)
									}
									userKey={this.state.key}
									addStuff={() => {
										this.setState({
											key: "wishers",
											bookid: item.book.api_id,
											showOwnersModal: true
										});
										actions.fetchInterested(
											item.book.api_id
										);
									}}
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
				{this.state.showTradeModal && (
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<Trade
									show={this.state.showTradeModal}
									books={[this.state.book, store.library]}
									sender={this.state.user}
									receiver={store.sessions}
									onReturn={() =>
										this.setState({
											showOwnersModal: true,
											showTradeModal: false
										})
									}
									onConfirm={() => {
										this.setState({
											user: null,
											showOwnersModal: false,
											showTradeModal: false
										});
									}}
								/>
							);
						}}
					</Context.Consumer>
				)}
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
