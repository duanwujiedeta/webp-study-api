const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        // new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']) 使用数组的时候，需要在命令行中添加 process.env.xxx 作为命令行参数传入
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