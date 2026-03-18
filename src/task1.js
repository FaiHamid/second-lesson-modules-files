import fs from 'fs'

fs.readFile('src/article.txt', 'utf8', (err,data)=>{
    console.log(data.length)
})


// node src/task1.cjs