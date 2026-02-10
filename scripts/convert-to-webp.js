import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to process
const IMAGE_DIRS = [
  { source: 'public/images', backup: 'public/images-backup' },
  { source: 'public/content', backup: 'public/content-backup' }
];

const WEBP_QUALITY = 85; // Optimal balance between size and quality

// Statistics
let stats = {
  totalOriginalSize: 0,
  totalWebPSize: 0,
  filesProcessed: 0,
  errors: []
};

/**
 * Get all image files recursively from a directory
 */
function getImageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist, skipping...`);
    return fileList;
  }

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Convert a single image to WebP
 */
async function convertToWebP(inputPath) {
  try {
    const ext = path.extname(inputPath);
    const outputPath = inputPath.replace(ext, '.webp');

    // Get original file size
    const originalSize = fs.statSync(inputPath).size;

    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);

    // Get WebP file size
    const webpSize = fs.statSync(outputPath).size;

    // Update statistics
    stats.totalOriginalSize += originalSize;
    stats.totalWebPSize += webpSize;
    stats.filesProcessed++;

    const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`  ${formatBytes(originalSize)} → ${formatBytes(webpSize)} (${reduction}% reduction)`);

    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    stats.errors.push({ file: inputPath, error: error.message });
    return false;
  }
}

/**
 * Create backup directory and copy original files
 */
function createBackup(sourceDir, backupDir) {
  if (!fs.existsSync(sourceDir)) {
    console.log(`Source directory ${sourceDir} does not exist, skipping backup...`);
    return;
  }

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
    console.log(`Created backup directory: ${backupDir}`);
  }

  // Copy all files to backup
  const files = getImageFiles(sourceDir);
  files.forEach(file => {
    const relativePath = path.relative(sourceDir, file);
    const backupPath = path.join(backupDir, relativePath);
    const backupFolder = path.dirname(backupPath);

    if (!fs.existsSync(backupFolder)) {
      fs.mkdirSync(backupFolder, { recursive: true });
    }

    fs.copyFileSync(file, backupPath);
  });

  console.log(`Backed up ${files.length} files to ${backupDir}\n`);
}

/**
 * Format bytes to human-readable size
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Main conversion process
 */
async function main() {
  console.log('='.repeat(60));
  console.log('WebP Image Conversion Script');
  console.log('='.repeat(60));
  console.log(`Quality setting: ${WEBP_QUALITY}%\n`);

  for (const dir of IMAGE_DIRS) {
    console.log(`\nProcessing directory: ${dir.source}`);
    console.log('-'.repeat(60));

    // Create backup
    createBackup(dir.source, dir.backup);

    // Get all image files
    const imageFiles = getImageFiles(dir.source);

    if (imageFiles.length === 0) {
      console.log('No images found to convert.\n');
      continue;
    }

    console.log(`Found ${imageFiles.length} images to convert\n`);

    // Convert each image
    for (const file of imageFiles) {
      await convertToWebP(file);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('Conversion Summary');
  console.log('='.repeat(60));
  console.log(`Files processed: ${stats.filesProcessed}`);
  console.log(`Original total size: ${formatBytes(stats.totalOriginalSize)}`);
  console.log(`WebP total size: ${formatBytes(stats.totalWebPSize)}`);

  if (stats.totalOriginalSize > 0) {
    const totalReduction = ((1 - stats.totalWebPSize / stats.totalOriginalSize) * 100).toFixed(1);
    console.log(`Total size reduction: ${totalReduction}%`);
    console.log(`Space saved: ${formatBytes(stats.totalOriginalSize - stats.totalWebPSize)}`);
  }

  if (stats.errors.length > 0) {
    console.log(`\nErrors encountered: ${stats.errors.length}`);
    stats.errors.forEach(err => {
      console.log(`  - ${err.file}: ${err.error}`);
    });
  }

  console.log('\n' + '='.repeat(60));
  console.log('✓ Conversion complete!');
  console.log('='.repeat(60));
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
