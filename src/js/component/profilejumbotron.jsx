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
											store.sessions.username +
											"!"}
									</h1>
									<p>
										{" "}
										{"Full Name: " +
											store.sessions.firstname +
											" " +
											store.sessions.lastname}{" "}
									</p>
									<p>
										{" "}
										{"Address: " +
											store.sessions.address}{" "}
									</p>
									<p> {"Email: " + store.sessions.email}</p>
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
