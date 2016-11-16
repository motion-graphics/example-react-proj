module.exports = {
    entry: './index.jsx',
    output: {
        path: './dist',
        filename: 'index.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
