const fs = require('fs/promises');

async function countCharacters(filePath) {
  const data = await fs.readFile(filePath);
  return `The file contains ${data.length} characters`;
}

module.exports = { countCharacters };
