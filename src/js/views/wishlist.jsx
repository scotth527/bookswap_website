import React from "react";
import { withRouter } from "react-router-dom";
import SearchModal from "../component/searchmodal.jsx";
import Item from "../component/library/item.jsx";
import PropTypes from "prop-types";
import "../../styles/wishlist.css";
import { Context } from "../store/appContext.jsx";
import Usermodal from "../component/usermodal.jsx";
import Trade from "../component/trade.jsx";

export class Wishlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showOwnersModal: false,
			bookid: 0,
			key: "owners",
			user: null,
			showTradeModal: false
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
				<div className="row">
					<div className="col-9 mx-auto">
						<h1 className="text-center">Wishlist</h1>
						<Context.Consumer>
							{({ store, actions }) => {
								return store.wishlist.map((item, index) => {
									return (
										<Item
											key={index}
											id={item}
											buttonName="Find users who own this book"
											deleteStuff={() => {
												actions.deleteFromWishlist(
													index
												);
											}}
											addStuff={() => {
												this.setState({
													key: "owners",
													bookid: item,
													showOwnersModal: true
												});
												actions.fetchOwners(item);
											}}
										/>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
				<SearchModal
					show={this.state.showModal}
					onClose={() => this.setState({ showModal: false })}
				/>
				{this.state.showTradeModal && (
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
				)}
				{this.state.showOwnersModal && (
					<Usermodal
						show={this.state.showOwnersModal}
						onClose={() =>
							this.setState({ key: "", showOwnersModal: false })
						}
						userKey={this.state.key}
						id={parseInt(this.state.bookid)}
						divtitle="Users who own this book"
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
											key: "",
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
				<div className="row mt-5 text-right">
					<div
						style={{
							position: "fixed",
							bottom: "20px",
							overflow: "hidden",
							height: "100px",
							marginTop: "30px"
						}}
						className=" col-12 mx-auto ">
						<i
							id="addButton"
							onClick={() => this.setState({ showModal: true })}
							style={{
								fontSize: "3em"
							}}
							className="btn far fa-plus-square"
						/>
					</div>
				</div>
			</div>
		);
	}
}

Wishlist.propTypes = {
	//id: PropTypes.string,
	history: PropTypes.object,
	match: PropTypes.object,
	onDelete: PropTypes.func,
	delete: PropTypes.func
};
export default withRouter(Wishlist);
