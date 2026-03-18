import fs from 'fs/promises';

export async function logger() {
  try {
    const date = new Date();

    const formattedTime = date.toISOString().replace('T', ' ').slice(0, 16);

    const text = `Script started at ${formattedTime}\n`;

    await fs.appendFile('./files/log.txt', text);

    console.log('Starting date was saved');
  } catch (err) {
    console.error('Error writing log:', err);
  }
}
