import fs from 'fs/promises';

export async function textReplacer(filePath, searchingFor, replacingWith) {
  try {
    const data = await fs.readFile(filePath);
    const replacedText = data
      .toString()
      .replaceAll(searchingFor, replacingWith);
    await fs.writeFile(filePath, replacedText);
    console.log('Text was replaced');
  } catch (err) {
    console.log('Error: ', err);
  }
}
