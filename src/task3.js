import fs from 'fs'

function replaceFileText(fileRepl, oldText, newText) {
    fs.readFile(fileRepl, 'utf8', (err, data) => {
        const result = data.replaceAll(oldText, newText)
        if(err){
            console.log('Помилка: ', err)
        }
        fs.writeFile(fileRepl, result, () => {
            console.log('зміст файлу було змінено')
        })
    })

}
replaceFileText('second-lesson-modules-files/src/replace.txt', 'машина' , 'собака')