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