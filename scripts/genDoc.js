const path = require('path');
const fs = require('fs');

const DOC_DIR = path.resolve(__dirname, '../docs/');

const contents = [];

/**
 * @param {string} docDir
 */
const readDocDir = (dirName) => {
  const dirContent = fs.readdirSync(dirName);
  return dirContent.map(fileName => {
    const filePath = path.resolve(dirName, fileName)
    const fileContent = readFile(filePath)
    
    contents.push({
      fileName,
      fileContent,
    })
  })
}

/**
 * 
 * @param {string} file 
 */
const readFile = (fileName) => {
  return fs.readFileSync(fileName, 'utf-8');
}


const writeDoc = (contents) => {
  let README = ''
  contents.forEach(file => {
      README += `## ${file.fileName}/n`
      README += `${file.fileContent}/n`
      README += '/n'
  });

  fs.writeFileSync('README.md', README);
}

readDocDir(DOC_DIR)
writeDoc(contents)



