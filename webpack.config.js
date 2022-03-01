const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development" || "production",
    entry: {
        pageA: "./splitChunks/pageA",
        pageB: "./splitChunks/pageB",
        pageC: "./splitChunks/pageC"
    },
    optimization: {
        chunkIds: "named",
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0 // This is example is too small to create commons chunks
                },
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        clean: true
    }
};