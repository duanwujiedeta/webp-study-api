const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: "development" || "production",
	entry: {
		pageA: "./deterministic/pageA",
		pageB: "./deterministic/pageB",
		pageC: "./deterministic/pageC"
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
		new webpack.optimize.AggressiveMergingPlugin({
			minSizeReduce: 1.5
		})
	],
	optimization: {
		chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
	}
};