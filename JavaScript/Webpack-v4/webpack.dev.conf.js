/**
 * @name Webpack.Development
 * @func 配置模式为development，出口文件名称、提取CSS文件名称
 */
const merge = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    output: {
        filename: './js/[name].js',
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "./css/[name].css"
        }),
    ]
})