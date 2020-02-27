/**
 * @name Webpack.Production
 * @func 配置模式为production，出口文件名称、提取、压缩CSS文件名称
 */
const merge = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: "production",
    output: {
        filename: './js/[name].min.js',
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "./css/[name].min.css"
        }),
        new OptimizeCSSAssetsPlugin()
    ]

})