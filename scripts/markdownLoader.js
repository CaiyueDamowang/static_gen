// const fs = require('fs');
const MarkdownIt = require('markdown-it');

/**
 * @param {Array<string>} str
 * @returns {string}
 */
const getReactComponent = (...content) => {
  const [_, innerHTML] = content;

  const imr = `import React from 'react';\n`;
  const exports = 
  `export default
    () => (
      <>
        ${innerHTML.trim()}
      </>
  )`;

  const component = imr + exports
  return component
}

/**
 * @param {string} fileContent
 * @type {MarkdownIt()} md
 */
const compiler = (fileContent) => {
  const md = MarkdownIt();
  const HTML = md.render(fileContent);

  const component = getReactComponent`${HTML}`;

  return component
};

module.exports = compiler 