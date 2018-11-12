import React from "react";
import { withRouter } from "react-router-dom";
import SearchModal from "../component/searchmodal.jsx";
import Item from "../component/library/item.jsx";
import PropTypes from "prop-types";
import "../../styles/wishlist.css";
import "../../styles/bookpage.css";
import { Context } from "../store/appContext.jsx";
import Usermodal from "../component/usermodal.jsx";

export class Wishlist extends React.Component {
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
			<div className="container-fluid">
				<div className="row">
					<div className="col-9 mx-auto">
						<h1 className="text-center">Wishlist</h1>
						<Context.Consumer>
							{({ store, actions }) => {
								return store.wishlist.map((item, index) => {
									return (
										<Item
											key={store.books[item].id}
											title={store.books[item].title}
											description={
												store.books[item].description
											}
											buttonName="Find users who own this book"
											deleteStuff={() => {
												actions.deleteFromWishlist(
													index
												);
											}}
											addStuff={() =>
												this.setState({
													key: "library",
													bookid:
														store.books[item].id,
													showOwnersModal: true
												})
											}
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
				{this.state.showOwnersModal && (
					<Usermodal
						show={this.state.showOwnersModal}
						onClose={() =>
							this.setState({ key: "", showOwnersModal: false })
						}
						userKey={this.state.key}
						id={parseInt(this.state.bookid)}
						divtitle="Users who own this book"
					/>
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
	onDelete: PropTypes.func,
	delete: PropTypes.func
};
export default withRouter(Wishlist);
