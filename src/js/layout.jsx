import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
<<<<<<< HEAD
import { Account } from "./views/account.jsx";
=======
//import { Demo } from "./views/demo.jsx";
//import { Single } from "./views/single.jsx";
import { Library } from "./views/library.jsx";
>>>>>>> 319ba77dec33707241c900e6891f7ded9e706085
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
<<<<<<< HEAD
						<Route exact path="/home" component={Home} />
						<Route exact path="/account" component={Account} />
=======
						<Route exact path="/" component={Home} />
						<Route exact path="/library" component={Library} />
>>>>>>> 319ba77dec33707241c900e6891f7ded9e706085
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
