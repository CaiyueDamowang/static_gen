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


const visitor = () => {
  const jscontext = []

  const visit = (node) => {
    const content = node.content;
    if (/\{\{(.+)\}\}/g.test(content)) {
      const context = content.match(/\{\{(.+)\}\}/g);
      jscontext.push(context + ';');
      return true;
    } 
    return false
  }

  return {
    visit,
    getResult: () => jscontext
  }
}


/**
 * @param {Array} AST
 */
const biAST = (AST, visitor) => {
  const ast = AST.concat();
  const dummy = { children: [], content: '' };
  ast.forEach(node => dummy.children.push(node));
  
  const visitor = visitor();
  const nodes = [dummy];
  while(nodes.length) {
    const node = nodes.pop();
    
    if (visitor.visit(node)) {
      // 
    } else {
      // nodes.push(...node.children);
    }
  };

}
/**
 * @param {string} fileContent
 * @type {MarkdownIt()} md
 */
const compiler = (fileContent) => {
  const md = MarkdownIt();
  const HTML = md.render(fileContent);
  const AST = md.parse(fileContent);
  biAST(AST, visitor)
  // fs.writeFileSync('AST.js', JSON.stringify(AST));
  // const component = getReactComponent`${HTML}`;
  
  return component
};

/**
 * 测试
 */

// const file = fs.readFileSync(path.resolve(__dirname, '../demo/src/docs/list.md'), 'utf-8')
// compiler(file)


module.exports = compiler 