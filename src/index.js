import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// отримуємо шлях до поточного файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// формуємо правильний шлях
const filePath = path.join(__dirname, 'article.txt');

const data = fs.readFileSync(filePath);

const charCount = data.length;

console.log(`The file contains ${charCount} characters`);