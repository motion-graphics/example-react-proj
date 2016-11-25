var path = require('path');
var webpack = require('webpack');

module.exports = {
     devServer: {
        inline: true,
        contentBase: './',
        port: 3000
    },
     plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    devtool: 'cheap-module-eval-source-map',
    entry: './index.jsx',
    output: { path: __dirname, filename: 'bundle.js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};
