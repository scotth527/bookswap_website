import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class SearchModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			books: []
		};
		let bookSearch = search => {
			fetch("https://www.googleapis.com/books/v1/volumes?q=" + search, {
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(response => response.json())
				.then(data => {
					let state = this.state.books;
					for (let i = 0; i < 10; i++) {
						state.push(data.items[i]);
					}
					this.setState({ state });
				})
				.catch(error => console.log(error));
		};
		let keyPress = e => {
			if (e.keyCode == 13) {
				bookSearch(this.state.search);
				// put the login here
			}
		};
	}

	render() {
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
								What books are you looking to read?
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
							<form className="form-inline ">
								<i
									className="col-1 fa fa-search"
									aria-hidden="true"
								/>
								<input
									className="form-control form-control-sm ml-3 col-10"
									type="text"
									onChange={e => {
										this.setState({
											search: e.target.value
										});
									}}
									onKeyDown={() => {
										this.keyPress;
									}}
									placeholder="Search"
									aria-label="Search"
								/>
							</form>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								onClick={() => this.props.onClose()}
								className="btn btn-secondary"
								data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
/**
 * Define the data-types for
 * your component's properties
 **/
SearchModal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
SearchModal.defaultProps = {
	show: false,
	onClose: null
};

export default withRouter(SearchModal);
