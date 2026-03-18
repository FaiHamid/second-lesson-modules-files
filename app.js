import fs from 'fs/promises';

async function countSymbl(fileName) {
    try{
        const content = await fs.readFile(fileName, 'utf8');
        const noSpaces = content.replace(/ /g, '');
        console.log(noSpaces.length + "Кількість символів");
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

async function replaceText(filePath, oldText, newText){
    try{
        let content = await fs.readFile(filePath, 'utf8');
        const regex = new RegExp(oldText,"g");
        content = content.replace(regex, newText);
        await fs.writeFile(filePath, content);
        console.log(`Замінив ${oldText} na ${newText}`);
    }catch (err){
        console.log(err + "помилкаа");
    }
}

replaceText("texts/article.txt","123", "55555")