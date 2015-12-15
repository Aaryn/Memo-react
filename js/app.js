import 'babel-core/polyfill';
import React from 'react';
import MemoApp from './components/MemoApp.react';

React.render(
	<MemoApp />,
	document.getElementById('app')
);