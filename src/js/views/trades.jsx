import React from "react";

import { Context } from "../store/appContext.jsx";

import Pendingtrade from "../component/pendingtradediv.jsx";

export class Trades extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			accepted: false
		};
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<React.Fragment>
								<h1 className="text-center">
									Pending trade requests
								</h1>

								{store.trades
									.filter(item => item.is_accepted == false)
									.map((item, index) => {
										return (
											<Pendingtrade
												key={index}
												requesterpic={
													actions.searchUser(
														item.requesterid
													).image
												}
												requesterusername={
													actions.searchUser(
														item.requesterid
													).username
												}
												requestercity={
													actions.searchUser(
														item.requesterid
													).city
												}
												requesterbook={
													actions.searchBookByID(
														item.requesterbook
													).title
												}
												requestedpic={
													actions.searchUser(
														item.requestedid
													).image
												}
												requestedusername={
													actions.searchUser(
														item.requestedid
													).username
												}
												requestedcity={
													actions.searchUser(
														item.requestedid
													).city
												}
												requestedbook={
													actions.searchBookByID(
														item.requestedbook
													).title
												}
												Trade_is_accepted={
													item.is_accepted
												}
											/>
										);
									})}

								<h1 className="text-center">
									Accepted trade requests
								</h1>
								{store.trades
									.filter(item => item.is_accepted == true)
									.map((item, index) => {
										return (
											<Pendingtrade
												key={index}
												requesterpic={
													actions.searchUser(
														item.requesterid
													).image
												}
												requesterusername={
													actions.searchUser(
														item.requesterid
													).username
												}
												requestercity={
													actions.searchUser(
														item.requesterid
													).city
												}
												requesterbook={
													actions.searchBookByID(
														item.requesterbook
													).title
												}
												requestedpic={
													actions.searchUser(
														item.requestedid
													).image
												}
												requestedusername={
													actions.searchUser(
														item.requestedid
													).username
												}
												requestedcity={
													actions.searchUser(
														item.requestedid
													).city
												}
												requestedbook={
													actions.searchBookByID(
														item.requestedbook
													).title
												}
												Trade_is_accepted={
													item.is_accepted
												}
											/>
										);
									})}
							</React.Fragment>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
export default Trades;
