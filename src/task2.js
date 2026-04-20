import fs from 'fs';
const now = new Date();
const logLine = 'Script started at ' + now + '\n';
fs.appendFile('src/log.txt', logLine, (err) => {
  if (err) {
    console.log('Error:', err);
    return;
  }
});