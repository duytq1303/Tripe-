const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: './index.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
      ]
  },
  plugins: [
    new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
    })
  ]
};