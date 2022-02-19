const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|dist)/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpe?g|png|gif|.mp4)$/i,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
}
