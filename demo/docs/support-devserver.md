#### 支持热更新

安装`webpack-cli` `webpack-dev-server`
```js 
npm i webpack-cli webpack-dev-server -D
```
#### 版本问题
`webpack-cli@4.0.5`中不再包含  'webpack-cli/bin/config-yargs'; 

所以安装webpack-dev-server 3版本 webpack-cli4版本 会导致不兼容

解决： npx webpack serve


```js
// webpack.config.js
  devServer: {
    host: 'localhost',
    port: 8000,
    compress: true,
    publicPath: '/dist/',
    contentBase: path.resolve(__dirname, 'demo/'),    
  },
    plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
```

#### publicPath 
  `dev-server` 编译后的资源不会输出到某个文件夹下，而是保存在内存中

  `publicPath` 指定webpack编译后的资源路径 如果指定为 `/dist/`
  
  该资源存放在 `http//: $host: $port/ $publicPath/ $output.filename` 

  例如 `http//:localhost:8000/dist/bundle.js

#### contentBase

  告诉d`ev-serve`r配置那个文件夹作为静态资源
  配置了`demo`为文件夹，访问url默认访问了`demo`下的`index.html`作为静态资源





  