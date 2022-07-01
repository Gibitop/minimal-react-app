const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

/** @type {import 'webpack'.Configuration} */
module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './src/index',
    devtool: isDev && 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/i,
                exclude: /node_modules/,
                use: ['thread-loader', 'babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        isDev && new webpack.HotModuleReplacementPlugin(),
        isDev && new ReactRefreshWebpackPlugin(),
    ].filter(p => p),
    devServer: {
        hot: true,
    },
}
