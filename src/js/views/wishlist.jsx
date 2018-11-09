import React from "react";
import { withRouter } from "react-router-dom";
import SearchModal from "../component/searchmodal.jsx";
import Item from "../component/library/item.jsx";
import PropTypes from "prop-types";
import "../../styles/wishlist.css";
import "../../styles/bookpage.css";
import { Context } from "../store/appContext.jsx";

export class Wishlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	render() {
		return (
			<div
				className="mt-5 container-fluid wrapper"
				style={{
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
											title={item.title}
											description={item.description}
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
