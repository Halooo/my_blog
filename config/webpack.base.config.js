import path from 'path';

import webpack from 'webpack';

import baseConfig from './base.config.js';

import env from './env.config.js';

import fs from 'fs';

const rootPath = path.join(__dirname, '../');

export default {
	entry: {
		app: './views/app.js'
	},
	output: {
		path: baseConfig.build.assetsRoot,
		publicPath: baseConfig.build.assetsPublicPath,
		filename: '[name].js'
	},
	module: {
		preLoaders: [{
			test: /\.vue$/,
			loader: 'eslint',
			include: rootPath,
			exclude: path.join(rootPath, 'node_modules/')
		}, {
			test: /\.js$/,
			loader: 'eslint',
			include: rootPath,
			exclude: path.join(rootPath, 'node_modules/')
		}],
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.js$/,
			loader: 'babel',
			include: rootPath,
			exclude: path.join(rootPath, 'node_modules/')
		}, {
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: 'view/img/[name].[hash:7].[ext]'
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: 'view/fonts/[name].[hash:7].[ext]'
			}
		}]
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			utils: path.join(rootPath, './views/util/'),
			store: path.join(rootPath, './views/vuex/'),
			actions: path.join(rootPath, './views/vuex/actions/')
		}
	},
	eslint: {
		formatter: require('eslint-friendly-formatter')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(env)
		})
	]
};
