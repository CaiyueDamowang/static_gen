const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: {
    index:  path.resolve(__dirname, 'demo/src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: '[name].js',
  },

  devServer: {
    host: 'localhost',
    hot: true,
    port: 8000,
    // compress: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, './demo/dist/'),
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, './demo/src/'),
      },
      {
        test: /\.md$/,
        use: ['babel-loader', require.resolve('./scripts/markdownLoader')],
        include: path.resolve(__dirname, './demo/docs/'),
      },
      {
        test: /\.tsx$/,
        loader: 'awesome-typescript-loader',
        include: path.resolve(__dirname, './demo/'),
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.RuntimeChunkPlugin({ // 优化： 提取公共代码 防止公共模块打包进业务代码里
      name: 'common',
      minChunks: 2,
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 0,
      minRemainingSize: 0,
      maxSize: 150000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  mode: 'development',
};
