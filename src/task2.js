import fs from 'fs'

const time = `script started at: ${new Date().toLocaleString()}\n`
fs.appendFile('src/log.txt', time, ()=>{
    console.log('Час серверу записаний у текстовий файл')
})