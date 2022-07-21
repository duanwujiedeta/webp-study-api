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
                test: /\.(mycss|css)$/i,
                use: [{
                    loader: require.resolve("./testLoader"),
                    options: {},
                }, {
                    loader: "css-loader",
                    options: {},
                }, ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
                resourceQuery: /^(?!.*\?ignore-asset-modules).*$/,
                type: "asset/resource",
            },
            {
                resourceQuery: /\?ignore-asset-modules$/,
                type: "javascript/auto",
            },
        ],
    },
};

module.exports = () => {
    config.mode = 'development';
    return config;
};