import React from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import PropTypes from "prop-types";

import Userdiv from "./userdiv.jsx";

function Usermodal(props) {
	Userdiv.propTypes = {
		Username: PropTypes.string,
		Picurl: PropTypes.string,
		City: PropTypes.string,
		history: PropTypes.object,
		onClose: PropTypes.func,
		show: PropTypes.bool,
		id: PropTypes.string
	};

	return (
		<div
			className="modal"
			tabIndex="-1"
			role="dialog"
			style={{ display: this.props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title col-8 mx-auto text-center">
							Users who own this book
						</h5>
						{this.props.onClose ? (
							<button
								onClick={() => this.props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body mx-auto col-12">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.users.map((item, index) => {
									return <h1 key={index}> Hello World</h1>;
								});
							}}
						</Context.Consumer>
					</div>

					<div className="modal-footer">
						<button
							type="button"
							onClick={() => this.props.onClose()}
							className="btn btn-secondary"
							data-dismiss="modal">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Usermodal;
