//task 3

import fs from 'node:fs/promises';

export async function replaceFileContent(filePath,replaceText,newText) {

    try {
        
        const fileContent = await fs.readFile(filePath,'utf-8');
        const newFileContent = fileContent.replaceAll(replaceText,newText);
        await fs.writeFile(filePath,newFileContent);
    }
    catch (error) {
        console.log("[task3.js] Got error: " + error);
    }

}