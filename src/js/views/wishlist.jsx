import React from "react";
import { withRouter } from "react-router-dom";
import SearchModal from "../component/searchmodal.jsx";
import Item from "../component/library/item.jsx";
import PropTypes from "prop-types";
import "../../styles/wishlist.css";

export class Wishlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-9 mx-auto">
						<h1 className="text-center">Wishlist</h1>
						<Item />
						<Item />
						<Item />
						<div className="col-2 mx-auto text-center">
							<i
								id="addButton"
								onClick={() =>
									this.setState({ showModal: true })
								}
								style={{ fontSize: "3em" }}
								className="btn far fa-plus-square"
							/>
						</div>
					</div>
				</div>
				<SearchModal
					show={this.state.showModal}
					onClose={() => this.setState({ showModal: false })}
				/>
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
