import React from "react";
import {
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardDeck,
	CardSubtitle,
	CardBody
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";

const featured = [
	{
		title: "Mass Effect: Revelation",
		image:
			"https://books.google.com/books/content/images/frontcover/fYj94qmCi_MC?fife=w400-h600",
		description:
			"Every advanced society in the galaxy relies on the technology of the Protheans, an ancient species that vanished fifty thousand years ago. After discovering a cache of Prothean technology on Mars in 2148, humanity is spreading to the stars; the newest interstellar species, struggling to carve out its place in the greater galactic community.",
		link: "bookpage/1"
	},
	{
		title: "Assassins Creed: The Secret Crusade",
		image: "https://i.ebayimg.com/images/g/yjAAAOSwSlBYv1oS/s-l640.jpg",
		description:
			"Altair embarks on a formidable mission - one that takes him throughout the Holy Land and shows him the true meaning of the Assassins Creed. To demonstrate his commitment, Altair must defeat nine deadly enemies, including Templar leader, Robert de Sable",
		link: "bookpage/2"
	},
	{
		title: "Halo: The Fall of Reach",
		image:
			"https://img.thriftbooks.com/api/images/l/2ccd4c14a9c11747b1b06272ff7f377d1c025924.jpg",
		description:
			"Halo: The Fall of Reach is a military science fiction novel by Eric Nylund, set in the Halo universe, and acts as a prequel to Halo: Combat Evolved, the first game in the series. The book was released in October 2001 and is the first Halo novel. It takes place in the 26th century across several planets and locations.",
		link: "bookpage/3"
	}
];

const Featured = props => {
	return (
		<CardDeck className="mx-auto d-flex justify-content-between">
			{featured.map((item, index) => {
				return (
					<Card
						className=" col-lg-5 col-12  pt-2 mb-5"
						style={{ maxHeight: "1000px" }}
						key={index}>
						<CardImg
							top
							width="100%"
							src={item.image}
							alt="Card image cap"
						/>
						<CardBody style={{ maxHeight: "700px" }}>
							<CardTitle>{item.title}</CardTitle>
							<CardSubtitle>Description:</CardSubtitle>
							<CardText>{item.description}</CardText>
							<Link to={"/bookswap_website/" + item.link}>
								<Button>View more details</Button>
							</Link>
						</CardBody>
					</Card>
				);
			})}
		</CardDeck>
	);
};

export default Featured;
