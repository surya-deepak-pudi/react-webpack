const path = require("path")
const common = require("./webpack.config")
const { merge } = require("webpack-merge")

process.env.NODE_ENV = "production"

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
})
