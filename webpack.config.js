const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
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
};