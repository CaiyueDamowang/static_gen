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

#### awesome-ts-loeader 可配置tsx语法

所以可以不用引入babel的preset-react

## react-spring.md
### react-spring
`react-spring` 强大的弹簧物理引擎动画库

可以使动画的进度像弹簧伸缩的进度一样,原理是通过正弦曲线来计算下一个animation state的值处于最终值的哪个位置

#### 文字跑马灯

1. 头尾衔接
```css
  animation-name: marquee;
  animation-iteration-count: infinite;
  animtion-duration: {allWords.length * scrollRatio}s;
  animation-play-state: {stop ? 'paused' : 'running'};

  @keyframes marquee {
    0% { transform: translateX(0%) }
    100% { transform: translateX(-100%) }
  }
```

开启动画后，在该滚动元素末尾，添加一个absolute定位的尾随元素，使其处于右侧

该元素与滚动元素一直

在每一周期的动画结束后，滚动元素都在滚动区域左侧，尾随元素在滚动元素动画周期初始位置

恰好在动画开启的下一刻，两帧相同

2. 不够长顶宽居中

控制 play-state
#### 拖拽modal

```js
onTouchStart // 有事件对象传入
onTouchMove  // 有
onTouchEnd   // 无

onMouseDown  // 有
onMouseMove  // 有
onMouseUp    // 无
onMouseLeave // 无
```

判断拖动距离  设置阈值

## support-ModuleHotReplace.md
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

## support-codesplit.md
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


## support-devserver.md
#### 未支持热更新

安装`webpack-cli` `webpack-dev-server`
```js 
npm i webpack-cli webpack-dev-server -D
```
#### 版本问题
`webpack-cli@4.0.5`中不再包含  'webpack-cli/bin/config-yargs'; 

所以安装webpack-dev-server 3版本 webpack-cli4版本 会导致不兼容

解决： 
```shell 
npx webpack serve 
```
或者
```shell
npx webpack-cli serve
```

### devServer选项
作为webpack serve 或者 webpack-cli serve 的选项，集成在webpack.config中

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

#### HTMLWebpackPlugin

设置了`publicPath`后, 该插件会将index.html输出到 publicPath 路径后的内存系统中

所以一般设置publicPath 为 `/`

不然就要访问 localhost: 8000/publicPath/index.html




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

> 使用emotion 或者 style-component 实现样式组件化



## support-ts.md
#### jsx 升级 tsx

- 安装 awesonme-typescript-loader、typescript

```shell
npm i -D awesonme-typescript-loader、typescript
```

- 生成tsconfig.json

当一个目录存在 tsconfig.json文件 一般认为该目录为根文件夹
```json
  {
   "incremental": true,                   /* Enable incremental compilation */
    "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    "jsx": "react",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./demo/dist",                        /* Redirect output structure to the directory. */
    "rootDir": "./demo/src/",         // 编译好的文件在内存中，虚拟目录的映射              /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
  }
  "include": ["demo/src"],            // 指定开始编译ts的文件目录
```

> TypeScript具有三种JSX模式：preserve，react和react-native。 这些模式只在代码生成阶段起作用 - 类型检查并不受影响。 在preserve模式下生成代码中会保留JSX以供后续的转换操作使用（比如：Babel）。 

> 另外，输出文件会带有.jsx扩展名。 react模式会生成React.createElement，在使用前不需要再进行转换操作了，输出文件的扩展名为.js。 react-native相当于preserve，它也保留了所有的JSX，但是输出文件的扩展名是.js。

- jsx 更改为 tsx 文件

```tsx
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

```

- 更改webpack配置

```js
  entry: { index: path.resolve(__dirname, 'demo/src/index.tsx') },
  
  rules: [{
    test: /\.tsx$/,
    use: [ 'awesome-typescript-loader'], // 卸载 @babel/preset-react
  }],
  
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  }
```


