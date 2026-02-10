import { readdir, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CONTENT_DIR = join(__dirname, '..', 'public', 'content');

async function countFiles(directory) {
  try {
    const files = await readdir(directory);
    // Filter out system files and directories
    return files.filter(file => !file.startsWith('.') && file !== 'README.md').length;
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error.message);
    return 0;
  }
}

async function updateDatabaseStats() {
  console.log('Counting database files...\n');

  const stats = {
    documents: await countFiles(join(CONTENT_DIR, 'documents')),
    photographs: await countFiles(join(CONTENT_DIR, 'photographs')),
    individuals: await countFiles(join(CONTENT_DIR, 'individuals')),
    locations: await countFiles(join(CONTENT_DIR, 'locations')),
    correspondence: await countFiles(join(CONTENT_DIR, 'correspondence')),
    lastUpdated: new Date().toISOString().split('T')[0]
  };

  console.log('Database Statistics:');
  console.log(`- Documents: ${stats.documents}`);
  console.log(`- Photographs: ${stats.photographs}`);
  console.log(`- Individuals: ${stats.individuals}`);
  console.log(`- Locations: ${stats.locations}`);
  console.log(`- Correspondence: ${stats.correspondence}`);
  console.log(`- Last Updated: ${stats.lastUpdated}\n`);

  const metadataPath = join(CONTENT_DIR, 'metadata.json');
  await writeFile(metadataPath, JSON.stringify(stats, null, 2));

  console.log(`✓ Updated ${metadataPath}`);
}

updateDatabaseStats().catch(console.error);
