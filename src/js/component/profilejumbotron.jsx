import React from "react";

function Profilebanner(props) {
	return (
		<div>
			<div className="mt-5 jumbotron jumbotron-fluid">
				<div className="container d-flex ">
					<img
						src="https://picsum.photos/150/150/?random"
						className="floatLeft mr-3"
						alt="..."
						style={{ borderRadius: "50%" }}
					/>
					<h1 className="lead">Welcome (User)!</h1>
				</div>
			</div>
		</div>
	);
}

export default Profilebanner;
