const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
process.env.NODE_ENV1 = "111111111111111";
process.env.DEBUG = "222222222222";
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        "index": "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "MyDll.[name].js",
        library: "[name]_[fullhash]",
        clean: true
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['js']
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV1', 'DEBUG'])
        /* new webpack.EnvironmentPlugin({
            NODE_ENV1: 'development111',
            DEBUG: 'DEBUG111',
        }) */
        /**
         上面的效果相当于
         new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
         });
         */
    ]
};