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