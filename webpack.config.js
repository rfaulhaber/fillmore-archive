const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    build: './src/index.js',
    content: './src/content.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devtool: '#source-map'
}

if (process.env.WEBPACK_WATCH === 'watch') {
  module.exports.watch = true;
}