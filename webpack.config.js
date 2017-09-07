const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'mocoolka-function': './src/index.ts',
        'mocoolka-function.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'lib-umd'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'MocoolkaFunction',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            query: {
                declaration: false
            }
        }]
    }
};
