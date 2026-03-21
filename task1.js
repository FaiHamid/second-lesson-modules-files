//task 1
import fs from 'node:fs/promises';


export async function getFileContent(path) {

    const content = await fs.readFile(path);

    return content.toString('utf-8');
}

export function getContentLength(fileContent) {
    
    const trimContent = fileContent
    .replaceAll(' ','')
    .replaceAll('\n','');
    
    return trimContent.length;
}
