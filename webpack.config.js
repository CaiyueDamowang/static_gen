const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: { index: path.resolve(__dirname, 'demo/src/index.jsx') },
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: 'bundle.js',
  },

  /**
   * @param {publicPath} [link](https://webpack.docschina.org/configuration/dev-server/#devserverpublicpath-)
   */
  devServer: {
    host: 'localhost',
    port: 8000,
    compress: true,
    publicPath: '/dist/',
    contentBase: path.resolve(__dirname, 'demo/'),
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ['babel-loader',],
      },
      {
        test: /\.md$/,
        use: ['babel-loader', {
          loader: require.resolve('./scripts/markdownLoader')
        }],
      }
    ]
  },

  resolve: {
    alias: {
      "src": path.resolve(__dirname, './demo/src/'),
      "@components" : path.resolve(__dirname, './demo/src/components/'),
    },
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, './demo/src/components/'), 'node_modules']
  },

  mode: "production",
  devtool: "source-map"
}