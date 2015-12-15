import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import MemoItemCompleted from '../MemoItemCompleted.react';

describe('MemoItemCompleted', () => {

	it('renders', () => {
		const props = {
			created: "01/20/1986",
			text: "Birthday"
		};
		const element = TestUtils.renderIntoDocument(<MemoItemCompleted {...props} />);
		expect(element).toBeTruthy();
	});

	describe('proptypes', () => {

		it('expects a "text" prop', () => {
			spyOn(console, "warn");
			let element = TestUtils.renderIntoDocument(<MemoItemCompleted created={"1/20/1986"} />);
			expect(console.warn).toHaveBeenCalled();
		});

		it('expects a "created" prop', () => {
			spyOn(console, "warn");
			let element = TestUtils.renderIntoDocument(<MemoItemCompleted text={"Birthday"} />);
			expect(console.warn).toHaveBeenCalled();
		});

	});

});