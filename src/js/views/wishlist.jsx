import React from "react";

export class Wishlist extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-9 mx-auto">
						<h1 className="text-center">Wishlist</h1>
						<div className="col-2 mx-auto text-center">
							<i
								style={{ fontSize: "3em" }}
								className="btn far fa-plus-square"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Wishlist;
