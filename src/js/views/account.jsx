import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import YourShop from "../component/shopbutton.jsx";
import Profilebanner from "../component/profilejumbotron.jsx";

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
					"Manage your books that you plan to trade away. Add books to your shop to start trading!"
			},
			{
				name: "Wishlist",
				description:
					"Let others know what books you would like to read! Someone out there might have what you want!"
			},
			{
				name: "Your Orders",
				description: "Keep track of incoming and outgoing orders."
			},
			{
				name: "Your Information",
				description:
					"Update your information such as your address and contact information."
			}
		];

		return (
			<div className="container">
				<Profilebanner />
				{options.map((item, index) => {
					return (
						<YourShop
							key={index}
							pagetitle={item.name}
							pagedescription={item.description}
						/>
					);
				})}
			</div>
		);
	}
}
export default Account;
