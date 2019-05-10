import Convert from "xml-js";

let cors = "http://cors-anywhere.herokuapp.com/";
let key = "qnZN4IYfVP3fduRalfrFw";

let urls = [
	"https://backend-final-project-crivera09.c9users.io/api/",
	"https://bookswap-backend-scotth527.c9users.io/api/"
];
let currentURL = 1;

const getState = scope => {
	return {
		store: {
			// profile: {
			// 	first_name: "",
			// 	last_name: "",
			// 	address: "",
			// 	birthday: "",
			// 	favorite_genre: "",
			// 	library: [],
			// 	wishlist: [],
			// 	user: null
			// },

			profile: {},

			sessions: {
				user: {
					username: "",
					email: "",
					id: null
				},
				loggedIn: false
			},

			token: "JWT ",

			books: [
				{
					id: -1,
					title: "No Book",
					author: null,
					description: null,
					paperback: null,
					published: null,
					editionlanguage: null,
					image: null
				}
				// {
				// 	id: 1,
				// 	title: "Mass Effect: Revelation",
				// 	author: "Drew Karpyshyn",
				// 	description:
				// 		"Every advanced society in the galaxy relies on the technology of the Protheans, an ancient species that vanished fifty thousand years ago. After discovering a cache of Prothean technology on Mars in 2148, humanity is spreading to the stars; the newest interstellar species, struggling to carve out its place in the greater galactic community.On the edge of colonized space, ship commander and Alliance war hero David Anderson investigates the remains of a top secret military research station; smoking ruins littered with bodies and unanswered questions. Who attacked this post and for what purpose? And where is Kahlee Sanders, the young scientist who mysteriously vanished from the base hours before her colleagues were slaughtered?Sanders is now the prime suspect, but finding her creates more problems for Anderson than it solves. Partnered with a rogue alien agent he can't trust and pursued by an assassin he can't escape, Anderson battles impossible odds on uncharted worlds to uncover a sinister conspiracy . . . one he won't live to tell about. Or so the enemy thinks.",
				// 	paperback: "323 pages",
				// 	published: "May 1st 2007 by Del Rey",
				// 	editionlanguage: "English",
				// 	image:
				// 		"https://images.gr-assets.com/books/1389736825l/231599.jpg"
				// },
				// {
				// 	id: 2,
				// 	title: "Assassin's Creed: The Secret Crusade",
				// 	author: "Oliver Bowden, Andrew Holmes",
				// 	description:
				// 		"Oliver Bowden, Andrew Holmes",
				// 	paperback: "384 pages",
				// 	published: "June 28th 2011 by Ace Books",
				// 	editionlanguage: "English",
				// 	image:
				// 		"https://images.gr-assets.com/books/1388190055l/10048834.jpg"
				// },
				// {
				// 	id: 3,
				// 	title: "Halo: The Fall of Reach",
				// 	author: "Eric S. Nylund",
				// 	description:
				// 		"As the bloody Human-Covenant War rages on Halo, the fate of humankind may rest with one warrior, the lone SPARTAN survivor of another legendary battle... the desperate, take-no-prisoners struggle that led humanity to Halo--the fall of the planet Reach. Now, brought to life for the first time, here is the full story of that glorious, doomed conflict.While the brutal Covenant juggernaut sweeps inexorably through space, intent on wiping out humankind, only one stronghold remains--the planet Reach. Practically on Earth's doorstep, it is the last military fortress to defy the onslaught. But the personnel here have another, higher priority: to prevent the Covenant from discovering the location of Earth.Outnumbered and outgunned, the soldiers seem to have little chance against the Covenant, but Reach holds a closely guarded secret. It is the training ground for the very first super soldiers. Code-named SPARTANs, these highly advanced warriors, specially bioengineered and technologically augmented, are the best in the universe--quiet, professional, and deadly.Now, as the ferocious Covenant attack begins, a handful of SPARTANs stand ready to wage ultimate war. They will kill, they will be destroyed, but they will never surrender. And at least one of them--the SPARTAN known as Master Chief--will live to fight another day on a mysterious and ancient, artificial world called Halo... ",
				// 	paperback: "352 pages",
				// 	published: "October 1st 2001 by Del Rey",
				// 	editionlanguage: "English",
				// 	image:
				// 		"https://images.gr-assets.com/books/1436746591l/60229.jpg"
				// },
				// {
				// 	id: 4,
				// 	title: "Watching the Watchmen",
				// 	author: "Dave Gibbons, Chip Kidd",
				// 	description:
				// 		"Enjoy the ultimate companion to a comics masterpiece, as award-winning artist Dave Gibbons gives his own account of the genesis of WATCHMEN in this dust-jacketed hardback volume, opening his vast personal archives to reveal never-published pages, original character designs, page thumbnails, sketches and much more, including posters, covers and rare portfolio art. Featuring the breathtaking design of Chip Kidd and Mike Essl, WATCHING THE WATCHMEN is both a major art book in its own right, and the definitive companion to the graphic novel that changed an industry.Voted among Time magazine's 100 Best Novels from 1923 to the present, a perennial bestseller over the past twenty years and widely considered the greatest graphic novel of all time, WATCHMEN is a gripping, labyrinthine piece of comic art, which has earned an acclaimed place in modern literary history. I've had a great time, re-visiting the very beginnings of Watchmen and unearthing material I haven't set eyes on for many years. As a fan myself, this is the kind of stuff I eat up and I'm sure the many devotees of the graphic novel will do the same! says Gibbons.© DC Comics 2008. All Rights Reserved. ",
				// 	paperback: "256 pages",
				// 	published: "October 21st 2008 by Titan Books",
				// 	editionlanguage: "English",
				// 	image:
				// 		"https://images.gr-assets.com/books/1320522306l/3135895.jpg"
				// },
				// {
				// 	id: 5,
				// 	title: "City of Bones (The Mortal Instruments #1)",
				// 	author: "Cassandra Clare",
				// 	description:
				// 		"When fifteen-year-old Clary Fray heads out to the Pandemonium Club in New York City, she hardly expects to witness a murder― much less a murder committed by three teenagers covered with strange tattoos and brandishing bizarre weapons. Then the body disappears into thin air. It's hard to call the police when the murderers are invisible to everyone else and when there is nothing―not even a smear of blood―to show that a boy has died. Or was he a boy?This is Clary's first meeting with the Shadowhunters, warriors dedicated to ridding the earth of demons. It's also her first encounter with Jace, a Shadowhunter who looks a little like an angel and acts a lot like a jerk. Within twenty-four hours Clary is pulled into Jace's world with a vengeance when her mother disappears and Clary herself is attacked by a demon. But why would demons be interested in ordinary mundanes like Clary and her mother? And how did Clary suddenly get the Sight? The Shadowhunters would like to know...",
				// 	paperback: "485 pages",
				// 	published: "March 27th 2007 by Margaret K. McElderry Books",
				// 	editionlanguage: "English",
				// 	image:
				// 		"https://images.gr-assets.com/books/1432730315l/256683.jpg"
				// }
			],
			wishlist: [],

			library: [],

			owners: [],

			wishers: [],

			pending: [],

			trades: []
		},
		actions: {
			clearStore: () => {
				let store = scope.state.store;
				store.owners = [];
				store.pending = [];
				scope.setState(store);
			},

			getUserData(scope) {
				let store = scope.state.store;
				if (store.sessions.loggedIn) {
					fetch([urls[currentURL], "retrieveuser/"].join(""), {
						headers: {
							"Content-Type": "application/json",
							Authorization: store.token
						}
					})
						.then(response => response.json())
						.then(data => {
							store.sessions.user = data;
							scope.setState({ store });
							scope.state.actions.fetchProfile(
								store.sessions.user.id
							);
							scope.state.actions.getLibrary(
								store.sessions.user.id
							);
							scope.state.actions.getWishlist(
								store.sessions.user.id
							);
							scope.state.actions.fetchTrades(
								store.sessions.user.id
							);
						});
				}
			},

			loginUser: user => {
				fetch([urls[currentURL], "login/"].join(""), {
					method: "POST", // or 'PUT'
					body: JSON.stringify(user), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						let store = scope.state.store;
						if (data["token"] != undefined) {
							store.token = "JWT " + data["token"];
							store.sessions.loggedIn = true;
							scope.setState({ store });
							scope.state.actions.getUserData(scope);
						} else {
							alert("Incorrect username/password");
						}
					})
					.catch(error => console.error("Error:", error));
			},

			registerUser: user => {
				fetch([urls[currentURL], "register/"].join(""), {
					method: "POST", // or 'PUT'
					body: JSON.stringify(user), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => {
						console.log("Success:", JSON.stringify(response));
					})
					.catch(error => console.error("Error:", error));
			},

			logout: () => {
				let store = scope.state.store;
				store.token = "JWT ";
				store.sessions.loggedIn = false;
				scope.state.actions.clearStore();
				scope.setState({ store });
			},

			searchTradeByID: tradeid => {
				return scope.state.store.trades.find(
					e => e.tradeid === tradeid
				);
			},

			fetchData: () => {
				//fetches books
				fetch(urls[currentURL] + "books/", {
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						let { store } = scope.state;
						store.books = data;
						scope.setState({ store });
					})
					.catch(error => console.log(error));
			},

			fetchBookForPage: id => {
				fetch([urls[currentURL], "books/", id].join(""), {
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(response => response.json())
					.then(data => {
						let store = scope.state.store;
						store.books = [data];
						scope.setState({ store });
					})
					.catch(error => console.log(error));
			},

			fetchProfile: id => {
				fetch([urls[currentURL], "profile/", id].join(""), {
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(response => response.json())
					.then(data => {
						let store = scope.state.store;
						store.profile = data;
						scope.setState({ store });
					})
					.catch(error => console.log(error));
			},

			fetchTrades: id => {
				fetch([urls[currentURL], "trades/", id].join(""), {
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(response => response.json())
					.then(data => {
						let { store } = scope.state;
						store.trades = data;

						scope.setState({ store });
					})
					.catch(error => console.log(error));
			},

			acceptTrade: tradeid => {
				let { store } = scope.state;
				fetch([urls[currentURL], "trades/", tradeid].join(""), {
					method: "PATCH",
					body: JSON.stringify({
						is_accepted: true
					}),
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(response => {
						if (response.ok == true) {
							return scope.setState({ store });
						} else {
							console.log("Something went wrong oops");
						}
					})
					.then(res => {
						scope.state.actions.fetchTrades(
							scope.state.store.sessions.user.id
						);
					})
					.catch(error => console.error("Error:", error));
			},

			cancelTrade: tradeid => {
				fetch([urls[currentURL], "trades/", tradeid].join(""), {
					method: "DELETE",
					headers: {
						Authorization: scope.state.store.token
					} // or 'PUT'
				})
					.then(res => {
						if (res.ok == true) {
							scope.state.actions.fetchTrades(
								scope.state.store.sessions.user.id
							);
						} else {
							console.log("Something went wrong oops");
						}
					})
					.then(res => {
						scope.state.actions.fetchTrades(
							scope.state.store.sessions.user.id
						);
					})
					.catch(error => console.error("Error:", error));
			},

			getWishlist: id => {
				fetch([urls[currentURL], "profile/", id].join(""), {
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(response => response.json())
					.then(data => {
						let { store } = scope.state;
						store.wishlist = [];
						if (data.wishlist.length > 0) {
							data.wishlist.map(book => {
								store.wishlist.push(book);
							});
						}
						//console.log(store);
						scope.setState({ store });
					});
			},

			addToWishlist: wishlistEntry => {
				let { store } = scope.state;
				store.wishlist.push(wishlistEntry);
				//scope.setState({ store });

				fetch(
					[
						urls[currentURL],
						"profile/",
						scope.state.store.sessions.user.id
					].join(""),
					{
						method: "PATCH",
						body: JSON.stringify({
							wishlist: store.wishlist
						}),
						headers: {
							"Content-Type": "application/json",
							Authorization: scope.state.store.token
						}
					}
				)
					.then(response => {
						if (response.ok == true) {
							return response.JSON();
						} else {
							console.log("Something went wrong oops");
						}
					})
					.then(res => {
						scope.state.actions.getWishlist(
							scope.state.store.sessions.user.id
						);
					})
					.catch(error => console.error("Error:", error));
			},

			deleteFromWishlist: wishlistIndex => {
				let store = scope.state.store;
				store.wishlist.splice(wishlistIndex, 1);

				//scope.setState({ store });
				fetch(
					[
						urls[currentURL],
						"profile/",
						scope.state.store.sessions.user.id
					].join(""),
					{
						method: "PATCH",
						body: JSON.stringify({ wishlist: store.wishlist }),
						headers: {
							"Content-Type": "application/json",
							Authorization: scope.state.store.token
						}
					}
				)
					.then(res => {
						if (res.ok == true) {
							scope.state.actions.getWishlist(
								scope.state.store.sessions.user.id
							);
						} else {
							console.log("Something went wrong oops");
						}
					})
					.then(res => {
						scope.state.actions.getWishlist(
							scope.state.store.sessions.user.id
						);
					})

					.catch(error => console.error("Error:", error));
			},

			fetchOwners: bookid => {
				fetch([urls[currentURL], "page/", bookid].join(""), {
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(response => response.json())
					.then(data => {
						let { store } = scope.state;
						store.owners = [];
						if (data.length > 0) {
							data.map(profile => {
								if (
									profile.id !=
									scope.state.store.sessions.user.id
								) {
									store.owners.push(profile);
								}
							});
						}
						scope.setState({ store });
					});
			},

			fetchInterested: bookid => {
				fetch([urls[currentURL], "wishers/", bookid].join(""), {
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(response => response.json())
					.then(data => {
						let { store } = scope.state;
						store.wishers = [];
						if (data.length > 0) {
							data.map(profile => {
								if (
									profile.id !=
									scope.state.store.sessions.user.id
								) {
									store.wishers.push(profile);
								}
							});
						}
						scope.setState({ store });
					})
					.catch(error => console.log(error));
			},

			fetchRequests: id => {
				fetch([urls[currentURL], "requests/", id].join(""), {
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(response => response.json())
					.then(data => {
						let store = scope.state;
						store.profile.requests = {};
						store.profile.requests = data;
						scope.setState({ store });
					})
					.catch(error => console.log(error));
			},

			searchBookByID: bookindex => {
				return scope.state.store.books.find(e => {
					//console.log(e.id + "===" + bookindex);
					return e.id === bookindex;
				});
			},

			getLibrary: id => {
				fetch([urls[currentURL], "library/", id].join(""), {
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(response => response.json())
					.then(data => {
						let { store } = scope.state;
						store.library = [];
						if (data.length > 0) {
							data.map(book => {
								store.library.push(book);
							});
						}
						console.log(store.library);
						//console.log(store);
						scope.setState({ store });
					})
					.catch(error => console.log(error));
			},

			addToLibrary: addToInventoryEntry => {
				fetch([urls[currentURL], "library/"].join(""), {
					method: "POST", // or 'PUT'
					body: JSON.stringify(addToInventoryEntry), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(res => res.json())
					.then(response => {
						console.log("Success:", JSON.stringify(response));
						scope.state.actions.getLibrary(
							scope.state.store.sessions.user.id
						);
					})
					.catch(error => console.error("Error:", error));
			},

			deleteFromLibrary: id => {
				fetch([urls[currentURL], "library/", id].join(""), {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
					// or 'PUT'
				})
					.then(res => {
						if (res.ok == true) {
							scope.state.actions.getLibrary(
								scope.state.store.sessions.user.id
							);
						} else {
							console.log("Something went wrong oops");
						}
					})
					.then(res => {
						scope.state.actions.getLibrary(
							scope.state.store.sessions.user.id
						);
					})
					.catch(error => console.error("Error:", error));
			},

			addTradeRequest: tradeRequest => {
				fetch([urls[currentURL], "trades/"].join(""), {
					method: "POST", // or 'PUT'
					body: JSON.stringify(tradeRequest), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json",
						Authorization: scope.state.store.token
					}
				})
					.then(res => res.json())
					.then(response => {
						console.log("Success:", JSON.stringify(response));
						scope.state.actions.getLibrary(
							scope.state.store.sessions.user.id
						);
					})
					.catch(error => console.error("Error:", error));
			},

			searchUser: id => {
				return scope.state.store.users.find(e => e.id === id);
			},

			searchUsersForID: (id, self = null, key) => {
				fetch([urls[currentURL], "page/", id].join(""))
					.then(response => response.json())
					.then(data => {
						let ids = [];
						for (var user in data) {
							ids.push(user["profile"]);
						}
						return ids.filter(item => item.id !== self);
					})
					.catch(error => console.log(error));
			}

			// search: (q, field = "all", page = 1) => {
			// 	fetch(
			// 		cors +
			// 			"https://www.goodreads.com/search/index.xml?key=" +
			// 			key +
			// 			"&q=" +
			// 			q +
			// 			"&page=" +
			// 			page +
			// 			"&search[field]=" +
			// 			field
			// 	)
			// 		.then(res => res.text())
			// 		.then(res =>
			// 			Convert.xml2json(res, {
			// 				compact: false,
			// 				spaces: 4
			// 			})
			// 		)
			// 		.then(response => console.log(response))
			// 		.catch(error => console.log(error));
			// },

			// getBookByID: id => {
			// 	let book = 0;

			// 	fetch(
			// 		"https://www.goodreads.com/book/isbn_to_id/" +
			// 			id +
			// 			"?key=" +
			// 			key
			// 	)
			// 		.then(res => res.json())
			// 		.then(response => {})
			// 		.catch(error => console.log(error));
			// },

			// getIDByISBN: isbn => {
			// 	let id = 0;

			// 	fetch(
			// 		"https://www.goodreads.com/book/isbn_to_id/" +
			// 			isbn +
			// 			"?key=" +
			// 			key
			// 	)
			// 		.then(res => res.json())
			// 		.then(response => {})
			// 		.catch(error => console.log(error));
			// }
		}
	};
};

export default getState;
