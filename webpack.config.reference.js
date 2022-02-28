const webpack = require('webpack');
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	// mode: "development || "production",
    mode: 'development',
    entry: {
      app: ['./src/index-ref.js']
    },
    output: {
        path: path.join(__dirname, "dist_reference"),
        filename: "MyDll.[name].js",
        library: "[name]_[fullhash]",
        clean: true
    },
	plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
		new webpack.DllReferencePlugin({
			context: path.join(__dirname, "dll"),//包含构建文件夹的绝对路径
			manifest: require("./manifest/alpha-manifest.json") // eslint-disable-line   mainfest.json文件的路径
		}),
		new webpack.DllReferencePlugin({
			scope: "beta",
			manifest: require("./manifest/beta-manifest.json"), // eslint-disable-line
			extensions: [".js", ".jsx"]
		})
	]/**
    看到的另外一种 DllReferencePlugin使用方法，把 dll的输出出来之后，然后生成一个library,输出的 index.html 文件则需要把 dll 对应的文件名给引入进去
    */
};