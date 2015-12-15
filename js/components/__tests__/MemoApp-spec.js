import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import MemoApp from '../MemoApp.react';
import MemoItem from '../MemoItem.react';
import MemoItemCompleted from '../MemoItemCompleted.react';

import MemoActions from '../../actions/MemoActions';


describe('MemoApp', () => {

	it('should render', () => {
		const memoAppElement = TestUtils.renderIntoDocument(<MemoApp />);
		expect(memoAppElement).toBeTruthy();
	});

	it('calls MemoActions.loadItems when mounting', () => {
		spyOn(MemoActions, "loadItems");
		const memoAppElement = TestUtils.renderIntoDocument(<MemoApp />);
		expect(MemoActions.loadItems).toHaveBeenCalled();
	});

	describe('utility methods', () => {
		let items = [];
		const memoAppElement = TestUtils.renderIntoDocument(<MemoApp />);

		beforeEach(() => {
			items = [
				{ id: 1, text: 'test 1', created: "10/01/2015", completed: 1 },
				{ id: 2, text: 'test 2', created: "10/02/2015", completed: 0 }
			];
		});

		describe('getCompleteElementsFromArray', () => {
			it('should return an array of "MemoItemCompleted" elements', () => {
				const memoItemCompletedElements = memoAppElement.getCompleteElementsFromArray(items);
				memoItemCompletedElements.forEach((element) => {
					expect(TestUtils.isElementOfType(element, MemoItemCompleted)).toBe(true);
				});
			});
		});

		describe('getIncompleteElementsFromArray', () => {
			it('should return an array of "MemoItem" elements', () => {
				const memoItemInCcmpleteElements = memoAppElement.getIncompleteElementsFromArray(items);
				memoItemInCcmpleteElements.forEach((element) => {
					expect(TestUtils.isElementOfType(element, MemoItem)).toBe(true);
				});
			});
		});

		describe('sortItems', () => {
			it('should return an object with complete and incomplete item arrays', () => {
				var sortedItems = memoAppElement.sortItems(items);
				expect(sortedItems.complete.length).toBe(1);
				expect(sortedItems.incomplete.length).toBe(1);
			});
		});

	});

});