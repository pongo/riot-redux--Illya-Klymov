var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app : ['babel-polyfill', './src/index.js']
  },
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    loaders: [
      { test: /\.tag$/, include: [path.resolve(__dirname, "src")], loader: 'riotjs-loader' },
      { test: /\.js$/, include: [path.resolve(__dirname, "src")], loader: 'babel-loader' }
    ]
  },

  devtool: 'cheap-inline-module-source-map',
  debug: true,
  devServer: {
    contentBase: './src/',
    port: 1337,
    hot: true,
    inline: true
  },

  watchOptions: {
    aggregateTimeout: 100
  }
};