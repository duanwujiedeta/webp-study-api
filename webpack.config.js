const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    module: {
        rules: [{
            test: /(png|jpg|svg)/i,
            rules: [{
                loader: 'url-loader', // 
                options: {
                    limit: 888888888888888,
                    name: '[name].[contenthash].[ext][query]',
                    outputPath: 'static/assets/',
                    publicPath: 'static/assets/',
                },
            }, ],
        }, ],
        /* rules: [{ // file-loader的比较完整的示例
            test: /(png|jpg|svg)/i,
            rules: [{
                loader: 'file-loader', // 
                options: {
                    name: '[name].[contenthash].[ext][query]',
                    outputPath: 'static/assets/',
                    publicPath: 'static/assets/',
                },
            }, ],
        }, ], */
    },
};

module.exports = () => {
    config.mode = 'development';
    return config;
};