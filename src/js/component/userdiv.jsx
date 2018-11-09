import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function Userdiv(props) {
	Userdiv.propTypes = {
		Username: PropTypes.string,
		Picurl: PropTypes.string,
		City: PropTypes.string
	};

	Userdiv.defaultProps = {
		Username: "Placeholder",
		Picurl: "https://picsum.photos/150/150/?random",
		City: "Placeholder"
	};

	return (
		<div className="col-8 mx-auto d-flex border border-dark rounded">
			<img
				src={props.Picurl}
				className="floatLeft mt-2 mb-2 mr-3"
				alt="..."
				style={{ borderRadius: "50%" }}
			/>
			<div className="d-flex flex-column">
				<h1 className="lead">{props.Username}</h1>
				<p> {props.City}</p>
			</div>
			<button type="button" className="btn btn-primary">
				Request Book
			</button>
		</div>
	);
}

export default Userdiv;
