import path from 'node:path';
import { fileURLToPath } from 'node:url'
import { existsSync, mkdirSync, copyFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFile = path.resolve(__dirname, '../node_modules/@martendebruijn/css/dist/styles.css');
const targetDir = path.resolve(__dirname, '../docs');

if (!existsSync(sourceFile)) {
  console.error(`Source file not found: ${sourceFile}`);
  process.exit(1);
}

if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

const targetFile = path.join(targetDir, 'style.css');

copyFile(sourceFile, targetFile, (err) => {
  if (err) {
    console.error('Error copying file:', err);
  } else {
    console.log(`File copied to: ${targetFile}`);
  }
});
