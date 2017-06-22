/* 
	./webpack.config.js
*/

const path = require('path');
module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve('dist')
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ testL /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
}