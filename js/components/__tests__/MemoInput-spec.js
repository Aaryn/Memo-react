import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import MemoInput from '../MemoInput.react';

describe('MemoInput', () => {

	it('renders', () => {
		const props = { onSave: (value) => {} };
		const element = TestUtils.renderIntoDocument(<MemoInput {...props} />);
		expect(element).toBeTruthy();
	});

	describe('proptypes', () => {

		it('expects an "onSave" prop', () => {
			spyOn(console, "warn");
			const element = TestUtils.renderIntoDocument(<MemoInput />);
			expect(console.warn).toHaveBeenCalled();
		});

	});

	describe('actions', () => {

		let props = {}
		let element = null;

		beforeEach(() => {
			 props = {
			 	value: 'A memo item',
			 	onSave: (value) => {}
			 };
			 spyOn(props, "onSave");
			 element = TestUtils.renderIntoDocument(<MemoInput {...props} />);
		});

		it('should call "onSave" when the save button is pressed.', () => {
			const button = TestUtils.findRenderedDOMComponentWithClass(element, "btn-primary");
			TestUtils.Simulate.click(button);
			expect(props.onSave).toHaveBeenCalledWith(props.value);
		});

		it('should call "onSave" when the enter key is pressed.', () => {
			const input = TestUtils.findRenderedDOMComponentWithClass(element, "input-lg");
			TestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
			expect(props.onSave).toHaveBeenCalledWith(props.value);
		});

	});
});