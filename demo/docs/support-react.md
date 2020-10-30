#### webpack 简易搭建 react项目

```shell
npm i react react-dom
```
```shell
npm i webpack webpack-cli -D
```
```shell
npm i @babel/core babel-loader -D
# 默认安装babel-loader是8版本，应该升级core为7.x

# @babel/core  名称更新为@babel为前缀
# babel-loader 要求7版本以上的core
```
```shell
npm i @babel/preset-react -D 
```

```json
# package.json
"script": "webpack"
```
```js
# webpack.config.js
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
      },
    ]
  }
}
```
```
# .babelrc
{
  "presets": ["@babel/preset-react"]
}
```

### 使用react
```js
import React from 'react'; R大写  引入React jsx语法会转化为 React.createElement
export const App = ...
```

```js
import React from 'react';
import ReactDom from 'react-dom';
import { App } from './components/App';

ReactDom.render(<App />, document.getElementById('root'));
```

> 注意： 只要是js文件使用了jsx语法，都应该被babel-loader编译一次


### 使用jsx文件
- 配置webpack
```js
resolve: {
  extentions: ['.js', 'jsx'],
  modules: [path.resolve(__dirname, './demo/src/components/'), 'node_modules'] // 引入的模块都在这里
}
```

支持在导入语句中 导入jsx文件

```js
modules: {
  rules: [
    {
      test: /\.jsx/,    // 更改为jsx
      loader: ['babel-loader']
    }
  ]
}
```

#### 使用 scss 文件
```js
npm i -D scss-loader style-loader css-loader
```

> 使用emotion 或者 style-component 实现样式组件化

