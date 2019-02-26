import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import YourShop from "../component/shopbutton.jsx";
import Profilebanner from "../component/profilejumbotron.jsx";
import "../../styles/index.css";
import Wishprev from "../component/wishlistprev.jsx";
import { Context } from "../store/appContext.jsx";
import TradesPrev from "../component/tradesprev.jsx";

export class Account extends React.Component {
	render() {
		Account.propTypes = {
			pagetitle: PropTypes.string,
			pagedescription: PropTypes.string
		};

		let options = [
			{
				name: "Your Shop",
				description:
					"Manage your books that you plan to trade away. Add books to your shop to start trading!",
				link: "/library",
				uniqueinfo: "# of Books"
			},
			{
				name: "Wishlist",
				description:
					"Let others know what books you would like to read! Someone out there might have what you want!",
				link: "/wishlist",
				uniqueinfo: "# of Books"
			},
			{
				name: "Your Trades",
				description:
					"Keep track of incoming and outgoing orders and pending requests.",
				link: "/trades",
				uniqueinfo: "# of Pending Orders"
			}
		];

		return (
			<div
				className="container-fluid"
				style={{
					paddingBottom: "60px"
				}}>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<Profilebanner
								username={store.profile.user.username}
								firstName={store.profile.first_name}
								lastName={store.profile.last_name}
								address={store.profile.address}
								email={store.sessions.user.email}
							/>
						);
					}}
				</Context.Consumer>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<React.Fragment>
									<YourShop
										pagetitle={options[0].name}
										pagedescription={options[0].description}
										link={options[0].link}
										uniqueinfo={store.library.length}
									/>
									<Wishprev
										pagetitle={options[1].name}
										pagedescription={options[1].description}
										link={options[1].link}
										uniqueinfo={store.wishlist.length}
									/>
									<TradesPrev
										pagetitle={options[2].name}
										pagedescription={options[2].description}
										link={options[2].link}
										uniqueinfo={
											store.trades.filter(
												item =>
													item.is_accepted == false
											).length
										}
									/>
								</React.Fragment>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
export default Account;
