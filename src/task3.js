import fs from 'fs';
function changeFile(fileName, replaced, changing) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const change = data.replaceAll(replaced, changing);
    fs.writeFile(fileName, change, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File updated');
    });
  });
}

changeFile('./src/log.txt', 'Script', 'Code');