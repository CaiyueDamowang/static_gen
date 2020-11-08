#### 代码分割

在`webpack.config.js`中，配置`optimization`

我们经常会通过 webpack 打包我们的应用，产生一个 bundle.js 文件。随着我们的项目越写越复杂，bundle.js 文件会随之增大，严重影响了首屏加载速度。


由于该文件是唯一的，所以不管用户查看哪个页面、使用哪个功能，都必须先下载所有的功能代码。 当 bundle.js 大到一定程度，就会明显影响用户体验。此时，我们就需要 code splitting ，将代码分片，实现按需异步加载，从而优化应用的性能。



```js
  plugins: [
    new webpack.optimize.RuntimeChunkPlugin({ // 优化： 提取公共代码 防止公共模块打包进业务代码里
      name: 'common',
      minChunks: 2,
    })
  ],
optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 0,
      minRemainingSize: 0,
      maxSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
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
```
代码被分割为多个文件被html引入(启用html-webpack-plugin)

修改filename为想要的文件目录

#### 优化表现

看了network
当代码分割过多时，翻到因为请求排队，并发连接等原因，加长了资源加载时间

所以适当调大了maxSize，从80ms减少到60ms
