var path = require('path');
var webpack = require('webpack');

var devServer = false

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    javascript: './app.js',
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'  //该参数是 chunk 相关的路径，需指定！！
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
