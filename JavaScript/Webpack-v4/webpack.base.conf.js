/**
 * @name Webpack.Base
 * @func 配置入口文件、出口路径、模块、源码转换
 */

const path = require("path");

// 简单创建 HTML 文件，用于服务器访问
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 从 bundle 中提取文本（CSS）到单独的文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: "none",
    entry: {
        ln: "./assets/js/ln/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            // 支持ES6
            {
                test: /\.js$/,
                exclude: /node-module/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["env"]
                    }
                }
            },
            // 支持CSS
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"],
                })
            },
            // 支持Sass
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                })
            },
            // 支持Less
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"],
                })
            },
            // 支持JSON5
            {
                test: /\.json5$/,
                loader: 'json5-loader'
            },
            // 支持PNG、JPG、GIF
            {
                test: /\.(png|jpg|gif|PNG|JPG|GIF)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img"
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack4.x App",
            filename: "./../index.html",
        }),
    ]
}