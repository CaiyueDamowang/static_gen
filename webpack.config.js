const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: { index: path.resolve(__dirname, 'demo/src/index.jsx') },
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
        test: /\.jsx$/,
        use: ['babel-loader',]
      }
    ]
  },
  resolve: {
    alias: {
      "src": path.resolve(__dirname, './demo/src/')
    },
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, './demo/src/components/'), 'node_modules']
  },
  mode: "development",
  devtool: "source-map"
}