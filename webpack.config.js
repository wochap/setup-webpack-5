const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: "0.0.0.0",
    progress: true,
    historyApiFallback: true,
    overlay: true,
    hot: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components')
    }
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
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    })
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin()
    )
  }

  if (argv.mode === 'production') {
    config.output.filename = 'static/js/bundle.[name].[contenthash:8].js'
    config.output.chunkFilename = 'static/js/chunk.[name].[contenthash:8].js'
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
    })
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/bundle.[name].[contenthash:8].css',
        chunkFilename: 'static/css/chunk.[name].[contenthash:8].css',        
      })
    )
  }
  return config;
}