const webpack = require('webpack');
var path = require("path");
module.exports = {
    // mode: "development || "production",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    entry: {
        alpha: ["./dll/alpha", "./dll/a"],
        beta: ["./dll/beta", "./dll/b", "./dll/c"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "MyDll.[name].js",
        library: "[name]_[fullhash]",
        clean: true
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "manifest", "[name]-manifest.json"),//manifest 文件的输出路径，必须是句对路径
            name: "[name]_[fullhash]"//dll 模块的输出名，简称 vendor_lib
        })
    ]
};

/** 
  dllplugin，是把不常改变的库打包生成，然后通过 manifest.json 文件来进行记录，以便后续的 DllReferencePlugin 插件再继续使用，进而免去了很多的打包分析
  很适用于那种基本不怎么改的模块
  所以需要建立两个打包配置的构建
 */