const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development" || "production",
    entry: {
        pageA: "./many-pages/pages/a",
        pageB: "./many-pages/pages/b",
        pageC: "./many-pages/pages/c",
        pageD: "./many-pages/pages/d",
        pageE: "./many-pages/pages/e",
        pageF: "./many-pages/pages/f",
        pageG: "./many-pages/pages/g"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            maxInitialRequests: 20, // for HTTP2
            maxAsyncRequests: 20, // for HTTP2
            minSize: 40, // for example only: chosen to match 2 modules
            // omit minSize in real use case to use the default of 30kb
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