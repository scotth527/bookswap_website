import React from "react";

import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

function Profilebanner(props) {
	return (
		<div>
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="mt-2 jumbotron jumbotron-fluid">
							<div className="container d-flex ">
								<img
									src="https://picsum.photos/150/150/?random"
									className="floatLeft mr-3"
									alt="..."
									style={{ borderRadius: "50%" }}
								/>
								<div className="d-flex flex-column">
									<h1 className="lead">
										{"Welcome " +
											store.profile.user.username +
											"!"}
									</h1>
									<p>
										{" "}
										{"Full Name: " +
											store.profile.first_name +
											" " +
											store.profile.last_name}{" "}
									</p>
									<p>
										{" "}
										{"Address: " +
											store.profile.address}{" "}
									</p>
									<p>
										{" "}
										{"Email: " + store.sessions.user.email}
									</p>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		</div>
	);
}

export default Profilebanner;
