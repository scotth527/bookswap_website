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
										margin: "1px"
									}}>
									Mass Effect: Revelation
								</h5>
								<div
									className="card"
									style={{
										width: "20rem"
									}}>
									<img
										src="https://books.google.com/books/content/images/frontcover/fYj94qmCi_MC?fife=w400-h600"
										alt="Card image"
										style={{
											width: "15rem",
											padding: "3px"
										}}
									/>
									<div
										className="container text-center"
										style={{
											height: "15rem",
											background: "#00ffff",
											margin: "7px"
										}}>
										<div className="row">
											<div className="col-sm-12">
												<p className="card-text">
													Every advanced society in
													the galaxy relies on the
													technology of the Protheans,
													an ancient species that
													vanished fifty thousand
													years ago. After discovering
													a cache of Prothean
													technology on Mars in 2148,
													humanity is spreading to the
													stars; the newest
													interstellar species,
													struggling to carve out its
													place in the greater
													galactic community.
												</p>
											</div>
										</div>
									</div>
								</div>
								<a
									className="btn btn-warning"
									style={{
										width: "5rem",
										margin: "80px",
										padding: "2px"
									}}>
									Book Info
								</a>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card">
								<h5
									className="card-title text-center"
									style={{
										paddingTop: "1px",
										margin: "1px"
									}}>
									Assassins Creed: The Secret Crusade
								</h5>
								<div
									className="card"
									style={{
										width: "20rem"
									}}>
									<img
										className="card-img-top"
										src="https://i.ebayimg.com/images/g/yjAAAOSwSlBYv1oS/s-l640.jpg"
										alt="Card image cap"
										style={{
											width: "15rem",
											padding: "3px"
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
								<a
									className="btn btn-warning"
									style={{
										width: "5rem",
										margin: "80px",
										padding: "2px"
									}}>
									Book Info
								</a>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card">
								<div className="card-body">
									<h5
										className="card-title text-center"
										style={{
											paddingTop: "1px",
											margin: "1px"
										}}>
										Halo: The Fall of Reach
									</h5>
									<div
										className="card"
										style={{ width: "20rem" }}>
										<img
											className="card-img-top"
											src="https://img.thriftbooks.com/api/images/l/2ccd4c14a9c11747b1b06272ff7f377d1c025924.jpg"
											alt="Card image cap"
											style={{
												width: "15rem",
												padding: "3px"
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
												military science fiction novel
												by Eric Nylund, set in the Halo
												universe, and acts as a prequel
												to Halo: Combat Evolved, the
												first game in the series. The
												book was released in October
												2001 and is the first Halo
												novel. It takes place in the
												26th century across several
												planets and locations.
											</p>
										</div>
									</div>
									<a
										className="btn btn-warning"
										style={{
											width: "5rem",
											margin: "80px",
											padding: "2px"
										}}>
										Book Info
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="">
					<div
						className=""
						style={{ width: "645px", margin: "3px 10px 0 0" }}>
						<div
							className="whitetable_top"
							inline-style={{
								height: "13px",
								position: "relative",
								top: "1px",
								textAlign: "left",
								fontSize: "10pt"
							}}
						/>
						<div className="whitetable_content">
							<div className="whitetable_content_bg">
								<div
									className=""
									style={{
										paddingTop: "0px",
										height: "175px"
									}}>
									<div className="black3 bold">
										Other Books
									</div>
									<div
										className="floatLeft"
										stryle={{
											width: "22px",
											position: "relative",
											top: "58px",
											marginLeft: "-3px"
										}}>
										<img
											className=""
											style={{
												cursor: "default",
												opacity: "1"
											}}
										/>
									</div>
									<div
										className="floatLeft"
										id="slide_container"
										style={{
											position: "relative",
											paddingTop: "17px",
											paddingRight: "1px",
											marginLeft: "1px",
											marginRight: "3px",
											height: "140px",
											width: "575px",
											overflow: "hidden"
										}}>
										<div
											className=""
											id="recent_home"
											style={{
												left: "opx",
												width: "3000px",
												position: "relative"
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(HomePage);
