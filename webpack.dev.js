const path = require("path")
const common = require("./webpack.config")
const { merge } = require("webpack-merge")

process.env.NODE_ENV = "development"

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    compress: true,
    port: 3000,
    hot: true,
  },
})
