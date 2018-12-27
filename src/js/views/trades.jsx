import React from "react";

import { Context } from "../store/appContext.jsx";

import Pendingtrade from "../component/pendingtradediv.jsx";

export class Trades extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			accepted: false,
			trades: null
		};
	}

	// componentDidMount() {
	// 	fetch(
	// 		[
	// 			"https://backend-final-project-crivera09.c9users.io/api/trades/",
	// 			3
	// 		].join("")
	// 	)
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			//console.log(data);
	// 			let state = this.state;
	// 			state.trades = [];
	// 			if (data.length > 0) {
	// 				data.map(trade => {
	// 					state.trades.push(trade);
	// 				});
	// 			}
	// 			this.setState({ state });
	// 		})
	// 		.catch(error => console.log(error));
	// }

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
										const book = item.trader.book;
										if (typeof book === "undefined") {
											return (
												<h2 key={index}>
													{" "}
													No book selected
												</h2>
											);
										} else {
											return (
												<Pendingtrade
													key={item.id}
													requesterpic="https://picsum.photos/50/50/?random"
													requesterusername={
														item.requester.profile
															.user.username
													}
													requestercity={
														item.requester.profile
															.city +
														"," +
														item.requester.profile
															.state
													}
													requesterbook={
														item.requester.book
															.title
													}
													requestedpic={
														"https://picsum.photos/50/50/?random"
													}
													requestedusername={
														item.trader.profile.user
															.username
													}
													requestedcity={
														item.trader.profile
															.city +
														"," +
														item.trader.profile
															.state
													}
													requestedbook={
														item.trader.book.title
													}
													Trade_is_accepted={
														item.is_accepted
													}
													confirmTrade={() => {
														actions.acceptTrade(
															item.id
														);
													}}
													rejectTrade={() => {
														actions.cancelTrade(
															item.id
														);
													}}
												/>
											);
										}
									})}

								<h1 className="text-center">
									Accepted trade requests
								</h1>
								{store.trades
									.filter(item => item.is_accepted == true)
									.map((item, index) => {
										const book = item.trader.book;
										if (typeof book === "undefined") {
											return (
												<h2 key={index}>
													{" "}
													No book selected
												</h2>
											);
										} else {
											return (
												<Pendingtrade
													key={item.id}
													requesterpic="https://picsum.photos/50/50/?random"
													requesterusername={
														item.requester.profile
															.user.username
													}
													requestercity={
														item.requester.profile
															.city +
														"," +
														item.requester.profile
															.state
													}
													requesterbook={
														item.requester.book
															.title
													}
													requestedpic={
														"https://picsum.photos/50/50/?random"
													}
													requestedusername={
														item.trader.profile.user
															.username
													}
													requestedcity={
														item.trader.profile
															.city +
														"," +
														item.trader.profile
															.state
													}
													requestedbook={
														item.trader.book.title
													}
													Trade_is_accepted={
														item.is_accepted
													}
													confirmTrade={() => {
														actions.acceptTrade(
															index
														);
													}}
													rejectTrade={() => {
														actions.cancelTrade(
															item.id
														);
													}}
													address={
														item.requester.profile
															.address
													}
													state={
														item.requester.profile
															.state
													}
												/>
											);
										}
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
