const getState = scope => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			wishlist: [],

			library: []
		},
		actions: {
			changeColor: (element, color) => {
				let store = scope.state.store;
				store.demo[element].background = color;
				scope.setState({ store });
			},

			addToWishlist: bookid => {
				let store = scope.state.store;
				store.wishlist.push(bookid);
				scope.setState(store);
			},

			addToLibrary: bookid => {
				let store = scope.state.store;
				store.library.push(bookid);
				scope.setState(store);
			},

			deleteFromWishlist: id => {
				let mistake = scope.state.store;
				mistake.wishlist.splice(id, 1);
				scope.setState(mistake);
			},

			deleteFromLibrary: id => {
				let mistake = scope.state.store;
				mistake.library.splice(id, 1);
				scope.setState(mistake);
			}

			/*
            deleteItem: (contact) => {
                let mistake = scope.state.store;
                mistake.contacts.splice(contact, 1);
                scope.setState(mistake);
            },
            */
		}
	};
};

export default getState;
