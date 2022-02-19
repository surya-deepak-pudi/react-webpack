const path = require("path")
const common = require("./webpack.config")
const { merge } = require("webpack-merge")
const HTMLWebpackPlugin = require("html-webpack-plugin")

process.env.NODE_ENV = "development"

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public/templates/index.html"),
      minify: {
        removeComments: false,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    open: true,
    compress: true,
    port: 3000,
    hot: true,
  },
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
})
