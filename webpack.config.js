// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: {
        vloder:'./src/entry.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        /* new HtmlWebpackPlugin({
            template: 'index.html',
        }), */

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
              test: /\.png$/,
              use: [{ loader: 'file-loader'}]
            },
            {
              test: /\.html$/,
              use: [
                { loader: 'file-loader' },
                { loader: 'extract-loader' },
                { loader: 'ref-loader' },
              ]
            }
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
        // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};
