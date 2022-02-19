const path = require("path")
const common = require("./webpack.config")
const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const OptimizeCssAssestsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

process.env.NODE_ENV = "production"

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new OptimizeCssAssestsPlugin(),
      new TerserPlugin(),
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "public/templates/index.html"),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
    ],
  },
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
})
