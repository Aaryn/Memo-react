import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import MemoItem from '../MemoItem.react';

describe('MemoItem', () => {

	it('renders', () => {
		const props = {
			created: "1/2/2015 @ 9:15 pm",
			reactKey: 1,
			text: "I need to buy food.",
			onComplete: function(key) {},
			onDelete: function(key) {}

		};
		spyOn(console, "warn");

		const element = TestUtils.renderIntoDocument(<MemoItem {...props} />);
		const elementText = React.findDOMNode(element).textContent;

		expect(element).toBeTruthy();
		expect(console.warn).not.toHaveBeenCalled();
		expect(elementText.match(props.text)).not.toBe(null);
		expect(elementText.match(props.created)).not.toBe(null);
	});

	describe('proptypes', () => {

		it('expects a "text" prop', () => {
			const props = {
				created: "1/2/2015 @ 9:15 pm",
				reactKey: 1,
				onComplete: function(key) {},
				onDelete: function(key) {}
			};
			spyOn(console, "warn");
			const element = TestUtils.renderIntoDocument(<MemoItem {...props} />);
			expect(console.warn).toHaveBeenCalled();
		});

		it('expects a "created" prop', () => {
			const props = {
				reactKey: 1,
				text: "I need to buy food.",
				onComplete: function(key) {},
				onDelete: function(key) {}
			};
			spyOn(console, "warn");
			const element = TestUtils.renderIntoDocument(<MemoItem {...props} />);
			expect(console.warn).toHaveBeenCalled();
		});

		it('expects a "reactKey" prop', () => {
			const props = {
				created: "1/2/2015 @ 9:15 pm",
				text: "I need to buy food.",
				onComplete: function(key) {},
				onDelete: function(key) {}
			};
			spyOn(console, "warn");
			const element = TestUtils.renderIntoDocument(<MemoItem {...props} />);
			expect(console.warn).toHaveBeenCalled();
		});

		it('expects a "onComplete" prop', () => {
			const props = {
				created: "1/2/2015 @ 9:15 pm",
				reactKey: 1,
				text: "I need to buy food.",
				onDelete: function(key) {}

			};
			spyOn(console, "warn");
			const element = TestUtils.renderIntoDocument(<MemoItem {...props} />);
			expect(console.warn).toHaveBeenCalled();
		});

		it('expects a "onDelete" prop', () => {
			const props = {
				created: "1/2/2015 @ 9:15 pm",
				reactKey: 1,
				text: "I need to buy food.",
				onComplete: function(key) {}

			};
			spyOn(console, "warn");
			const element = TestUtils.renderIntoDocument(<MemoItem {...props} />);
			expect(console.warn).toHaveBeenCalled();
		});
	});

	describe('actions', () => {
		let props = {};

		beforeEach(() => {
			props = {
				created: "1/2/2015 @ 9:15 pm",
				reactKey: 1,
				text: "I need to buy food.",
				onComplete: function(key) {},
				onDelete: function(key) {}

			};
		});

		it("should call onComplete when the 'complete' button is clicked", () => {
			spyOn(props, "onComplete");
			const element = TestUtils.renderIntoDocument(<MemoItem {...props} />);
			const button = TestUtils.findRenderedDOMComponentWithClass(element, "btn-success");
			TestUtils.Simulate.click(button)
			expect(props.onComplete).toHaveBeenCalledWith(props.reactKey);

		});

		it("should call onDelete when the 'delete' button is clicked", () => {
			spyOn(props, "onDelete");
			const element = TestUtils.renderIntoDocument(<MemoItem {...props} />);
			const button = TestUtils.findRenderedDOMComponentWithClass(element, "btn-danger");
			TestUtils.Simulate.click(button)
			expect(props.onDelete).toHaveBeenCalledWith(props.reactKey);
		});

	});

});