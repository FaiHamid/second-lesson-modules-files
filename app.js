import fs from 'fs/promises';

async function countSymbl(filename) {
    try{
        const content = await fs.readFile(filename, 'utf8');
        console.log(content);
    }catch (err){
        console.log(err + "помилкаа");
    }
}
countSymbl("article.txt");

async function logTime(){
    const now = new Date();
    const timestamp = `Почалось в ${now.toDateString()}`

    try{
        await fs.appendFile("log.txt",timestamp);
    } catch (err){
        console.log(err + "помилкаа");
    }
}
logTime();

async function replaceText(fileName, oldText, newText){
    try{
        let content = await fs.readFile(fileName, 'utf8');
        const regex = new RegExp(oldText,"g");
        content = content.replace(regex, newText);
        await fs.writeFile(fileName, content);
        console.log(`Замінив ${oldText} na ${newText}`);
    }catch (err){
        console.log(err + "помилкаа");
    }
}

replaceText("article.txt","123", "55555")