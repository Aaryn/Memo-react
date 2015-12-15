import _ from 'lodash';
import Reflux from 'reflux';

import MemoActions from '../actions/MemoActions';
import db from '../utils/Database';
import {formatDate} from '../utils/Dates';


const MemoStore = Reflux.createStore({

	items: [],

	listenables: [
    MemoActions
	],

	onLoadItems: function() {
		this._updateItems();
	},

	onAddNewItem: function(itemText) {
		this._addItem(itemText).then(this._updateItems);
	},

	onCompleteItem: function(id) {
		db.items
		  .update(id, { completed: 1 })
		  .then(this._updateItems);
	},

	onDeleteItem: function(id) {
		db.items
		  .where('id')
		  .equals(id)
		  .delete()
		  .then(this._updateItems);
	},

	_addItem: function(itemText) {
		return db.items.add({
			completed: 0,
			created: new Date(),
			text: itemText
		});
	},

	_getItems: function() {
		return new Promise((resolve, reject) => {
			db.items
				.reverse()
				.toArray(function(items) {
					resolve(_.map(items, function(item) {
						item.created = formatDate(item.created);
						return item;
					}));
				});
		});
	},

	_updateItems: function() {
		this._getItems().then(function(items) {
			this.items = items;
			this.trigger(this.items);
		}.bind(this));
	}
});

export default MemoStore;