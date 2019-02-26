import React from "react";

import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

function Profilebanner(props) {
	Profilebanner.propTypes = {
		username: PropTypes.string,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		address: PropTypes.string,
		email: PropTypes.string
	};

	Profilebanner.defaultProps = {
		username: "Placeholder",
		firstName: "Placeholder",
		lastName: "Placeholder",
		address: "Placeholder",
		email: "Placeholder"
	};
	return (
		<div>
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
							{"Welcome " + props.username + "!"}
						</h1>
						<p>
							{" "}
							{"Full Name: " +
								props.firstName +
								" " +
								props.lastName}{" "}
						</p>
						<p> {"Address: " + props.address} </p>
						<p> {"Email: " + props.email}</p>
					</div>
				</div>
			</div>
			);
		</div>
	);
}

export default Profilebanner;
