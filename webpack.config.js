const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: { index: path.resolve(__dirname, 'demo/src/index.js') },
  output: {
    //custom publicPath
    path: path.resolve(__dirname, 'demo/dist'),
    filename: 'bundle.js'
  },
  // devServer: {

  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader',]
      }
    ]
  },
  mode: "development",
  devtool: "source-map"
}