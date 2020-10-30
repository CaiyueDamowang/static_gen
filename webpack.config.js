const path = require('path');
const webpack = require('webpack');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: { index: path.resolve(__dirname, 'demo/src/index.tsx') },
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: 'bundle.js',
  },

  devServer: {
    host: 'localhost',
    port: 8000,
    compress: true,
    publicPath: '/dist/',
    contentBase: path.resolve(__dirname, './demo/'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.md$/,
        use: ['babel-loader', require.resolve('./scripts/markdownLoader')],
      },
      {
        test: /\.tsx$/,
        use: ['awesome-typescript-loader'],
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.md'],
    modules: [path.resolve(__dirname, './demo/src/components/'), 'node_modules']
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   removeComments: true,
    //   removeStyleLinkTypeAttributes: true,
    // }),
    new webpack.LoaderOptionsPlugin({
      options: {
        extraBabelIncludes: [
          "node_modules/react-spring",
        ]
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  // 外部加载script标签 或者 CDN 在全局引入这些package
  // externals: {
  //   "React": "react",
  //   "ReactDOM": "react-dom",
  // },
  mode: "development",
}