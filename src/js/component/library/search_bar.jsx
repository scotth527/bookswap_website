import React from "react";

import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

export class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false,
			drop: {
				button: "Title",
				item: 0
			},
			input: ""
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen,
			drop: prevState.drop,
			input: prevState.input
		}));
	}

	onClick(drop) {
		let state = this.state;
		state.drop = drop;
		this.setState(state);
	}

	onChange(input) {
		let state = this.state;
		state.input = input;
		this.setState(state);
	}

	render() {
		return (
			<ul className="nav nav-pills">
				<div className="row justifiy-content-around">
					<li className="nav-item">
						<div className="dropdown col-3">
							<Dropdown
								isOpen={this.state.dropdownOpen}
								toggle={this.toggle}>
								<DropdownToggle caret>
									{this.state.drop.button}
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem
										onClick={e =>
											this.onClick({
												button: e.target.innerHTML,
												item: 0
											})
										}>
										Title
									</DropdownItem>
									<DropdownItem
										onClick={e =>
											this.onClick({
												button: e.target.innerHTML,
												item: 1
											})
										}>
										Author
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</li>
					<li className="nav-item col-6">
						<div className="col-12">
							<input
								className="col-12 form-control"
								type="search"
								placeholder="Search for..."
								onChange={e => this.onChange(e.target.value)}
								value={this.state.input}
							/>
						</div>
					</li>
					<li className="nav-item col-2">
						<div className="col-12">
							<button className="btn btn-primary">Search</button>
						</div>
					</li>
				</div>
			</ul>
		);
	}
}
export default SearchBar;
