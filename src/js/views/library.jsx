import React from "react";
import NewItem from "../component/library/new_item.jsx";
import Item from "../component/library/item.jsx";

export class Library extends React.Component {
	render() {
		return (
			<div className="container" style={{ wordWrap: "break-word" }}>
				<NewItem className="modal-dialog" />
				<Item />
				<Item
					title="The Hunchback of Notre Dame"
					description="Hugo’s grand medieval melodrama tells the story of the beautiful Esmeralda, a gypsy girl loved by three men: Archdeacon Frollo, his adoptive son Quasimodo, bell-ringer of Notre-Dame cathedral, and Captain Phoebus. Falsely accused of trying to murder Phoebus, who attempts to rape her, Esmeralda is sentenced to death and rescued from the gallows by Quasimodo who defends her to the last."
				/>
			</div>
		);
	}
}
export default Library;
