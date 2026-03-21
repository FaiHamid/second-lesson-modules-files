

//ESMA Script
import { getFileContent, getContentLength } from './task1.js'; 
import { ScriptLog } from './log.js';
import { replaceFileContent } from './task3.js';

const log = new ScriptLog();
log.log();

const path = './article.txt';

const fileContent = await getFileContent(path);
const len = getContentLength(fileContent);

console.log(`The file contains ${len} characters`);


await replaceFileContent(log.path, "Script", "App.js");