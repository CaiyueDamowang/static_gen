## babel-config.md
#### babel配置和优化


- @babel/preset-react
  
  该插件始终包含下列插件
  - @babel/plugin-syntax-jsx
  -  @babel/plugin-transform-react-jsx
  -  @babel/plugin-transform-react-display-name

- @babel/plugin-transform-runtime

  当对多个模块进行polyfill时,会在模块顶部定义一段polyfill代码

  为了避免在多个模块中，重复添加polyfill代码，此插件更改了polyfill代码的引用方式

## script-gendoc.md
#### 简单脚本生成READM.md

```js
# package.json
  "scripts": {
    "d": "zsh ./deploy.sh", // bash  或者zsh 都可以
  },
```

```js
node ./scripts/genDoc.js  // 读取文件 写文件

git add .
git commit -m "deploy"
git push origin master
```



## support-devserver.md
#### 支持热更新

安装`webpack-cli@^3` `webpack-dev-server`
```js 
npm i webpack-cli@^3 webpack-dev-server -D
```

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





  

## support-mdx.md
#### 支持加载md文件

安装 `markdown-it`

编写一个简单的 `webpack loader`

```js
/**
 * @param {string} fileContent
 * @type {MarkdownIt()} md
 */
const compiler = (fileContent) => {
  const md = MarkdownIt();
  const HTML = md.render(fileContent);

  const component = getReactComponent`${HTML}`;   // 在文件开头结尾写为react单文件组件的形式
  return component
};
```

## support-react.md
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



