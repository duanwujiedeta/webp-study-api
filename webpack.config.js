const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
	{
        mode: "development" || "production",
		entry: "./moduleIds/example.js",
		output: {
			pathinfo: true,
			filename: "output.js",
            clean: true
		},
		optimization: {
			moduleIds: "size",
			usedExports: true,
			mangleExports: true
		}
	},
	{
        mode: "development" || "production",
		entry: "./moduleIds/example.js",
		output: {
			pathinfo: true,
			filename: "without.js",
            clean: true
		},
		optimization: {
			moduleIds: "size",
			usedExports: false,
			mangleExports: false
		}
	}
]; /* {
    mode: "development" || "production",
    entry: {
        main: "./runtimeChunk/example"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].chunkhash.js",
        chunkFilename: "[name].chunkhash.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
    optimization: {
        runtimeChunk: true
    }
}; */