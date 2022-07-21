// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    module: {
        rules: [{
            test: /\.(css|sss)$/i,
            use: [{
                    loader: require.resolve("./testLoader"),
                    options: {},
                },
                {
                    loader: "postcss-loader",
                    options: {},
                },
            ],
        }, ],
    },
};

module.exports = () => {
    config.mode = 'development';
    return config;
};