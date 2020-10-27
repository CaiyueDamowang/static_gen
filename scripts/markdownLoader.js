const fs = require('fs');
const path= require('path');
const MarkdownIt = require('markdown-it');

/**
 * @param {Array<string>} str
 * @returns {string}
 */
const getReactComponent = (...content) => {
  const [_, innerHTML] = content;

  const imr = `import React from 'react';\n`;
  const exports = 
  `export default React.memo(
    () => (
      <>
        ${innerHTML.trim()}
      </>
    )
  )`;

  const component = imr + exports
  return component
}


/**
 * @param {Array} AST
 */
// const biAST = (AST) => {
//   const ast = AST.concat()
//   const reactTemplate = []
//   while(ast.length) {
//     const node = ast.shift()

//     if (
//       String.prototype.startsWith.call(node.content, '{{') &&
//       String.prototype.endsWith.call(node.content, '}}')
//     ) {
//       reactTemplate.push(...node.children)
//     }
//   }
// }


/**
 * @param {string} fileContent
 * @type {MarkdownIt()} md
 */
const compiler = (fileContent) => {
  const md = MarkdownIt();
  const HTML = md.render(fileContent);
  // const AST = md.parse(fileContent);

  // fs.writeFileSync('AST.js', JSON.stringify(AST));
  const component = getReactComponent`${HTML}`;
  
  return component
};

/**
 * 测试
 */

// const file = fs.readFileSync(path.resolve(__dirname, '../demo/src/docs/list.md'), 'utf-8')
// compiler(file)


module.exports = compiler