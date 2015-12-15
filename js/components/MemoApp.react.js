import React from 'react';
import Reflux from 'reflux';

import MemoActions from '../actions/MemoActions';
import MemoStore from '../stores/MemoStore';

import MemoInput from './MemoInput.react';
import MemoItem from './MemoItem.react';
import MemoItemCompleted from './MemoItemCompleted.react';

let MemoApp = React.createClass({
	mixins: [
		Reflux.connect(MemoStore, "items")
	],

	componentWillMount: function() {
    MemoActions.loadItems();
	},

	getCompleteElementsFromArray: function(complete) {
		return _.map(complete, item => {
			return (
				<MemoItemCompleted key={item.id}
								   created={item.created}
								   text={item.text} />
			);
		});
	},

	getIncompleteElementsFromArray: function(incomplete) {
		return _.map(incomplete, item => {
			const props = {
				key: item.id,
				reactKey: item.id,
				text: item.text,
				created: item.created,
				onComplete: MemoActions.completeItem,
				onDelete: MemoActions.deleteItem
			};
			return <MemoItem {...props} />;
		});
	},

	getInitialState: function() {
		return {
			items: []
		};
	},

	render: function() {
		let {complete, incomplete} = this.sortItems(this.state.items);

		complete = this.getCompleteElementsFromArray(complete);
		incomplete = this.getIncompleteElementsFromArray(incomplete);

		if(incomplete.length === 0) {
			incomplete = <p className={"lead"}>All of your items are complete!</p>;
		}

		return (
			<div>
				<MemoInput onSave={MemoActions.addNewItem}/>
				<hr />
				{ incomplete }
				<hr />
				<p className={"lead"}>Completed</p>
				<table className={"table table-striped"}>
					<tbody>
						{ complete }
					</tbody>
				</table>
			</div>
		)
	},

	sortItems: function(items) {
		let sortedItems = {
			complete: [],
			incomplete: []
		};

		items.forEach(item => {
			if(item.completed === 1) {
				sortedItems.complete.push(item);
			} else {
				sortedItems.incomplete.push(item);
			}
		});

		return sortedItems;
	}
});

export default MemoApp;