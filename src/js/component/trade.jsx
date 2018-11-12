import React from "react";
import PropTypes from 'prop-types';

import { Context } from '../store/appContext.jsx';

import Item from './library/item.jsx';
import Userdiv from './userdiv.jsx';

export class Trade extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show,
			book: this.props.book,
			sender: this.props.sender,
			receiver: this.props.receiver
		};
	}

	render() {
		return (
			<div className="modal" tabindex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
    					<div className="modal-header">
    						<div className="row justify-content-center">
    							<h5 className="modal-title">Confirm Trade Request</h5>
    						</div>
    					</div>
    					<div className="modal-body">
    						<div className="row justify-content-center">
    							<div className="col-12 mb-3">
    								<p>The book</p>
    							</div>
    							<Item id={this.props.book}/>
    							<div className="col-12 my-3">
    								<p>will be sent by</p>
    							</div>
    							<Context.Consumer>
    							{
    								({store, actions}) => {
    									let sender = actions.searchUser(this.state.sender);
    									let receiver = actions.searchUser(this.state.receiver);
    								
    									return (
    										<React.Fragment>
    											<Userdiv
													id={sender.id}
													//Picurl="https://picsum.photos/50/50/?random"
													City={sender.city}
													Username={sender.username}/>
				    							<div className="col-12 my-3">
				    								<p>to</p>
				    							</div>
				    							<Userdiv
													id={receiver.id}
													//Picurl="https://picsum.photos/50/50/?random"
													City={receiver.city}
													Username={receiver.username}/>
    										</React.Fragment>
    									);
    								}
    							}
    							</Context.Consumer>
    						</div>
    					</div>
    				</div>
				</div>
			</div>
		);
	}
}
Trade.propTypes = {
	show: PropTypes.bool,
	book: PropTypes.number,
	sender: PropTypes.number,
	receiver: PropTypes.number,
	onConfirm: PropTypes.func,
	onExit: PropTypes.func
};
Trade.defaultProps = {
	show: false,
	book: null,
	sender: null,
	receiver: null
};
export default Trade;
