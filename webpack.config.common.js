/**
 * External dependencies
 */
var webpack = require( 'webpack' ),
	HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
	autoprefixer = require( 'autoprefixer' );

module.exports = {
	entry: [
		'whatwg-fetch',
		__dirname + '/src/index.js'
	],
	output: {
		path: __dirname + '/public',
		filename: 'dist/app-[hash].js',
		publicPath: '/'
	},
	resolve: {
		modules: [ 'node_modules', 'src' ],
		extensions: [ '', '.js' ],
		alias: {
			react: 'preact-compat'
		}
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV )
		} ),
		new HtmlWebpackPlugin( {
			templateContent: '' +
				'<!DOCTYPE html>' +
				'<html>' +
				'<head>' +
					'<title>Stagecoach</title>' +
				'</head>' +
				'<body>' +
				'<div id="app"></div>' +
				'</body>' +
				'</html>'
		} )
	],
	postcss: function() {
		return [ autoprefixer ];
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: __dirname + '/src',
				loader: 'babel',
				query: {
					cacheDirectory: true
				}
			}
		]
	}
};
