import fs from 'fs';
fs.readFile('./src/article.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return;
    }
    const charCount = data.length;
    console.log(`The file contains ${charCount} characters`);
});