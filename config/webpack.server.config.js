import webpack from 'webpack';
import merge from 'webpack-merge';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import baseWebpackConfig from './webpack.base.config.js';

import { vueCssLoaders } from '../support/utils.js';

let webpackConfig = {};

webpackConfig = merge(baseWebpackConfig, {
	watch: true,
	devtool: '#eval-source-map',
	vue: {
		loaders: vueCssLoaders()
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			chunksSortMode: 'dependency',
			inject: true
		})
	]
});

export default webpackConfig;
