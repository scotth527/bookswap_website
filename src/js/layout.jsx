import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Account } from "./views/account.jsx";
import { Wishlist } from "./views/wishlist.jsx";
import { Single } from "./views/search.jsx";
//import { Demo } from "./views/demo.jsx";
//import { Single } from "./views/single.jsx";
import { Library } from "./views/library.jsx";
import Store from "./store/appContext.jsx";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/account" component={Account} />
						<Route exact path="/library" component={Library} />
						<Route exact path="/wishlist" component={Wishlist} />
						<Route exact path="/search" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
