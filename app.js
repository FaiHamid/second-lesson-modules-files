import { countCharacters } from './helpers/countCharacters.cjs';
import { logger } from './helpers/logger.js';
import { textReplacer } from './helpers/textReplacer.js';

// Task1
const resultTask1 = await countCharacters('./files/article.txt');
console.log(resultTask1);
//Task2
await logger();
//Task3
await textReplacer('./files/article.txt', 'apple', 'appleReplaced');
