import React from "react";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from "reactstrap";

const items = [
	{
		src:
			"https://farm9.staticflickr.com/8074/8435321969_c1eea0631a_o_d.jpg",
		altText: "Giving books a new life",
		caption: "The end of a story doesn't have to end on the last page."
	},
	{
		src:
			"https://amp.businessinsider.com/images/55a50e76ecad04f77dce0995-750-562.jpg",
		altText: "Create a wishlist, and make a library of books you own!",
		caption: "Then we will find you users who own those books!"
	},
	{
		src:
			"https://www.davishighnews.com/wp-content/uploads/2018/09/351.jpeg",
		altText: "Have fun swapping! ",
		caption: "It's that simple!"
	}
];

class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map(item => {
			return (
				<CarouselItem
					className="custom-tag"
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}>
					<img
						style={{ height: "100%" }}
						className="col-12"
						src={item.src}
						alt={item.altText}
					/>
					<CarouselCaption
						captionText={item.caption}
						captionHeader={item.altText}
					/>
				</CarouselItem>
			);
		});

		return (
			<React.Fragment>
				<Carousel
					className="custom-tag"
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}>
					<CarouselIndicators
						items={items}
						activeIndex={activeIndex}
						onClickHandler={this.goToIndex}
					/>
					{slides}
					<CarouselControl
						direction="prev"
						directionText="Previous"
						onClickHandler={this.previous}
					/>
					<CarouselControl
						direction="next"
						directionText="Next"
						onClickHandler={this.next}
					/>
				</Carousel>
				<style>{`.custom-tag {
                width: 100%;
                height: 500px;
              }`}</style>
			</React.Fragment>
		);
	}
}

export default Introduction;
