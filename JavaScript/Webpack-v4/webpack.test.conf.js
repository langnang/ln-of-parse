const merge = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
module.exports = merge(baseWebpackConfig, {
    module: {
        rules: []
    },
    plugins: [
        // new UglifyjsWebpackPlugin()
    ]

})