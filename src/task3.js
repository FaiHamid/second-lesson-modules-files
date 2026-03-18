import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function replaceFileText(fileRepl, oldText, newText) {
    const absolutePath = path.join(__dirname, '..', fileRepl);
    fs.readFile(absolutePath, 'utf8', (err, data) => {
        if (err) {
            console.log('Помилка: ', err)
            return;
        }

        const result = data.replaceAll(oldText, newText)

        fs.writeFile(absolutePath, result, () => {
            console.log('зміст файлу було змінено')
        })
    })

}
replaceFileText('src/replace.txt', 'машина', 'собака')