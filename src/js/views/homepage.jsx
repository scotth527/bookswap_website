import React from "react";
import ReactDom from "react-dom";
import { Link, withRouter } from "react-router-dom";
import { baseUrl } from "../constant.jsx";
import Introduction from "../component/carousel.jsx";
import { Alert } from "reactstrap";
import Featured from "../component/featuredbooks.jsx";

export class HomePage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div
					className="container-fluid"
					style={{
						background: "#CCD6DD",
						paddingTop: "15px",
						paddingBottom: "15px"
					}}>
					<div className="mb-4 col-lg-9 col-12 mx-auto d-flex justify-content-center">
						<Introduction />
					</div>
					<Alert color="light">Featured books! Check them out!</Alert>
					<div className="row mb-5">
						<Featured />
					</div>

					<Alert className="mt-5 mb-5" color="light">
						More books! Check them out!
					</Alert>

					<div className="container-fluid justify-content col-10 mx-auto rounded border border-dark text-center mt-5 mb-5">
						<div className="row" style={{ margin: "5px" }}>
							<div className="mx-auto col-10 d-flex" />
							<div className="">
								<img
									src="https://images.gr-assets.com/books/1320522306l/3135895.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1432730315l/256683.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1534130425l/39104180.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1540576045l/21898227.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1531268627l/40779585.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1540605277l/42096026.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1538770998l/39208006.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1513994596l/36680955.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1536676048l/39332510.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1513423421l/36317119.jpg"
									alt="Card image"
									style={{
										flex: "1",
										width: "7rem",
										padding: "10px"
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(HomePage);
