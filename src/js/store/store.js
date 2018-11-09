import Convert from "xml-js";

let cors = "http://cors-anywhere.herokuapp.com/";
let key = "qnZN4IYfVP3fduRalfrFw";

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
			},

			search: (q, field = "all", page = 1) => {
				fetch(
					cors +
						"https://www.goodreads.com/search/index.xml?key=" +
						key +
						"&q=" +
						q +
						"&page=" +
						page +
						"&search[field]=" +
						field
				)
					.then(res => res.text())
					.then(res =>
						Convert.xml2json(res, {
							compact: false,
							spaces: 4
						})
					)
					.then(response => console.log(response))
					.catch(error => console.log(error));
			},

			getBookByID: id => {
				let book = 0;

				fetch(
					"https://www.goodreads.com/book/isbn_to_id/" +
						id +
						"?key=" +
						key
				)
					.then(res => res.json())
					.then(response => {})
					.catch(error => console.log(error));
			},

			getIDByISBN: isbn => {
				let id = 0;

				fetch(
					"https://www.goodreads.com/book/isbn_to_id/" +
						isbn +
						"?key=" +
						key
				)
					.then(res => res.json())
					.then(response => {})
					.catch(error => console.log(error));
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
