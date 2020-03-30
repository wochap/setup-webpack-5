const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    })
  ],
};