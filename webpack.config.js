const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
