import React from "react";
import ReactDom from "react-dom";
import { Link, withRouter } from "react-router-dom";

export class HomePage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="jumbotron" style={{ background: "#007bff" }}>
					<div className="row">
						<div className="col-md-4">
							<div className="card">
								<h5
									className="card-title text-center"
									style={{
										paddingTop: "1px",
										margin: "15px"
									}}>
									Mass Effect: Revelation
								</h5>
								<div
									className="card mx-auto"
									style={{
										width: "20rem",
										margin: "60px"
									}}>
									<img
										className="card-img-top"
										src="https://books.google.com/books/content/images/frontcover/fYj94qmCi_MC?fife=w400-h600"
										alt="Card image cap"
										style={{
											width: "15rem",
											padding: "1px",
											margin: "30px"
										}}
									/>
									<div
										className="container text-center"
										style={{
											background: "#00ffff",
											height: "15rem",
											margin: "7px"
										}}>
										<p className="card-text mx-auto">
											Every advanced society in the galaxy
											relies on the technology of the
											Protheans, an ancient species that
											vanished fifty thousand years ago.
											After discovering a cache of
											Prothean technology on Mars in 2148,
											humanity is spreading to the stars;
											the newest interstellar species,
											struggling to carve out its place in
											the greater galactic community.
										</p>
									</div>
								</div>
								<li className="homepage mx-auto">
									<Link to="/account">
										<button
											type="button"
											style={{
												background: "#ffc107",
												whiteSpace: "normal"
											}}
											className="btn btn-dark
																mb-2 ">
											{" "}
											Book Info
										</button>
									</Link>
								</li>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card mx-auto">
								<h5
									className="card-title text-center"
									style={{
										paddingTop: "1px",
										margin: "15px"
									}}>
									Assassins Creed: The Secret Crusade
								</h5>
								<div
									className="card"
									style={{
										width: "20rem",
										margin: "60px"
									}}>
									<img
										className="card-img-top"
										src="https://i.ebayimg.com/images/g/yjAAAOSwSlBYv1oS/s-l640.jpg"
										alt="Card image cap"
										style={{
											width: "15rem",
											padding: "1px",
											margin: "30px"
										}}
									/>
									<div
										className="card-body text-center"
										style={{
											background: "#00ffff",
											height: "15rem",
											margin: "7px"
										}}>
										<p className="card-text">
											Altair embarks on a formidable
											mission - one that takes him
											throughout the Holy Land and shows
											him the true meaning of the
											Assassins Creed. To demonstrate his
											commitment, Altair must defeat nine
											deadly enemies, including Templar
											leader, Robert de Sable
										</p>
									</div>
								</div>

								<li className="homepage mx-auto">
									<Link to="/account">
										<button
											type="button"
											style={{
												background: "#ffc107",
												whiteSpace: "normal"
											}}
											className="btn btn-dark
																mb-2 ">
											{" "}
											Book Info
										</button>
									</Link>
								</li>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card">
								<h5
									className="card-title text-center"
									style={{
										paddingTop: "1px",
										margin: "15px"
									}}>
									Halo: The Fall of Reach
								</h5>
								<div
									className="card"
									style={{
										width: "20rem",
										margin: "60px"
									}}>
									<img
										className="card-img-top mx-auto"
										src="https://img.thriftbooks.com/api/images/l/2ccd4c14a9c11747b1b06272ff7f377d1c025924.jpg"
										alt="Card image cap"
										style={{
											width: "15rem",
											padding: "1px",
											margin: "60px"
										}}
									/>
									<div
										className="card-body text-center"
										style={{
											background: "#00ffff",
											height: "15rem",
											margin: "7px"
										}}>
										<p className="card-text">
											Halo: The Fall of Reach is a
											military science fiction novel by
											Eric Nylund, set in the Halo
											universe, and acts as a prequel to
											Halo: Combat Evolved, the first game
											in the series. The book was released
											in October 2001 and is the first
											Halo novel. It takes place in the
											26th century across several planets
											and locations.
										</p>
									</div>
								</div>
								<li className="homepage mx-auto">
									<Link to="/account">
										<button
											type="button"
											style={{
												background: "#ffc107",
												whiteSpace: "normal"
											}}
											className="btn btn-dark
																mb-2 ">
											{" "}
											Book Info
										</button>
									</Link>
								</li>
							</div>
						</div>
					</div>
				</div>

				<h6
					style={{
						margin: "10px",
						padding: "0px"
					}}>
					{" "}
					Other Books{" "}
				</h6>

				<div className="d-flex justify-content col-10 mx-auto rounded border border-dark text-center mb-6">
					<div className="row">
						<button
							className="btn btn"
							type="button"
							style={{
								padding: "10px",
								marginTop: "50px",
								marginBottom: "50px",
								marginLeft: "5px"
							}}
						/>
						<div className="row" style={{ margin: "10px" }}>
							<div className="mx-auto col-10 d-flex" />
							<div className="">
								<img
									src="https://images.gr-assets.com/books/1320522306l/3135895.jpg"
									alt="Card image"
									style={{
										float: "left",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1432730315l/256683.jpg"
									alt="Card image"
									style={{
										float: "left",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1534130425l/39104180.jpg"
									alt="Card image"
									style={{
										float: "left",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1540576045l/21898227.jpg"
									alt="Card image"
									style={{
										float: "left",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1531268627l/40779585.jpg"
									alt="Card image"
									style={{
										float: "left",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1540605277l/42096026.jpg"
									alt="Card image"
									style={{
										float: "left",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1538770998l/39208006.jpg"
									alt="Card image"
									style={{
										float: "left",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1513994596l/36680955.jpg"
									alt="Card image"
									style={{
										float: "left",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1536676048l/39332510.jpg"
									alt="Card image"
									style={{
										float: "left",
										width: "7rem",
										padding: "10px"
									}}
								/>
								<img
									src="https://images.gr-assets.com/books/1513423421l/36317119.jpg"
									alt="Card image"
									style={{
										float: "left",
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
