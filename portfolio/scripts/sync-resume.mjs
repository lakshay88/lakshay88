import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const portfolioDirectory = resolve(scriptDirectory, '..');
const possibleSources = [
  resolve(portfolioDirectory, '../resume-latex/output/Lakshay_Maheshwari_Resume.pdf'),
  resolve(portfolioDirectory, '../resume-latex/output/Manendra_Pal_Singh_Resume.pdf'),
  resolve(portfolioDirectory, 'public/resume.pdf'),
];

const destination = resolve(portfolioDirectory, 'public/resume.pdf');

let synced = false;
for (const source of possibleSources) {
  if (existsSync(source) && source !== destination) {
    mkdirSync(dirname(destination), { recursive: true });
    copyFileSync(source, destination);
    const size = statSync(destination).size;
    console.log(`Synced latest resume (${size} bytes) from ${source} to portfolio/public/resume.pdf`);
    synced = true;
    break;
  }
}

if (!synced && existsSync(destination)) {
  const size = statSync(destination).size;
  console.log(`Using existing resume (${size} bytes) at portfolio/public/resume.pdf`);
}
