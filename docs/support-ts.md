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
