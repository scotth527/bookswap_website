import React from "react";
import PropTypes from "prop-types";

import { SearchBar } from "./search_bar.jsx";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class NewItem extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			modal: false
		};
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<React.Fragment>
				<button
					className="btn btn-outline-dark btn-lg btn-block mb-3 border border-dark rounded"
					style={{ whiteSpace: "normal" }}
					onClick={this.toggle}>
					<div className="row">
						<div className="col-2 my-auto">
							<img src="https://via.placeholder.com/75x75" />
						</div>
						<div className="col-10 mx-auto my-auto">
							<h4>Add a Book</h4>
						</div>
					</div>
				</button>

				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
					<ModalBody>
						<SearchBar />
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggle}>
							Close
						</Button>
					</ModalFooter>
				</Modal>

				<hr className="featurette-divider my-3" />
			</React.Fragment>
		);
	}
}
NewItem.propTypes = {
	/*
    isOpen:  PropTypes.bool,
    autoFocus: PropTypes.bool,
    centered: PropTypes.bool,
    size: PropTypes.string,
    toggle:  PropTypes.func,
    role: PropTypes.string,
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
    ]),
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
    */
	className: PropTypes.string
	/*
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    ]),
    backdropTransition: PropTypes.shape(Fade.propTypes),
    modalTransition: PropTypes.shape(Fade.propTypes),
    innerRef: PropTypes.object
    */
};

export default NewItem;
