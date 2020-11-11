#### 模块热替换

webpack.config.js
```js
  devServer: {
    ...
    hot: true,
  },
```


在入口文件添加

```js
if (module.hot) {
    module.hot.accept('./App', async() => {
        const { App } = await import('./App');
        ReactDOM.render(<App/> , container);
    })
}
```

webpack-dev-server会监听文件的变化，
如果发生变化就告诉注入在浏览器的客户端去知情accept的回调

当App依赖的文件变更，会向上传递一个更新事件，直到有文件捕捉这个更新，比如index.ts

如果没有被捕捉则强制刷新浏览器