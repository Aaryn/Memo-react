module.exports = function(config) {
	config.set({
		browser: ['PhantomJS'],
		files: [
			{ pattern: 'tests.webpack.js', watched: false }
		],
		frameworks: ['jasmine', 'sinon'],
		preprocessors: {
			'tests.webpack.js': ['webpack']
		},
		reporters: ['dots'],
		singleRun: true,
		webpack: {
			module: {
				loaders: [
					{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
				]
			},
			watch: true
		},
		webpackServer: {
			noInfo: true
		}
	});
};