//task 2

import fs from 'node:fs/promises';

export class ScriptLog {

    path = './log.txt';
    
    async log() {

        try { 

            const now = new Date();

            const year = String(now.getFullYear()).padStart(2,'0');
            const month = String(now.getMonth()).padStart(2,'0');
            const day = String(now.getDay()).padStart(2,'0');

            const hours = String(now.getHours()).padStart(2,'0');
            const minutes = String(now.getMinutes()).padStart(2,'0');

            const logText = `Script started at ${year}-${month}-${day} ${hours}:${minutes}\n`;

            await fs.appendFile(this.path,logText);
        }
        catch (error) {
            
            console.log(`[ScriptLog]: error ${error}`);
        }
    }

    async clearLog() {

        try { 

            await fs.stat(this.path);

            await fs.writeFile(this.path,"");
        }
        catch (error) {
            
            console.log(`[ScriptLog]: clear error ${error}`);
        }
    }
}