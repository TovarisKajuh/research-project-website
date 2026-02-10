# Database Setup and Management Guide

## Overview

The "Explore the Database" page now features a dynamic statistics system that automatically updates based on the actual content in your database folders.

## Folder Structure

All database content is organized in `public/content/`:

```
public/content/
├── documents/       # Document files (PDF, scans, etc.)
├── photographs/     # Image files (JPG, PNG, GIF, etc.)
├── individuals/     # JSON records of individuals
├── locations/       # JSON records of locations
├── correspondence/  # Letters and personal correspondence
├── metadata.json    # Statistics file (auto-generated)
└── README.md        # Detailed content management guide
```

## How It Works

### 1. Statistics Display
The ExploreDatabase page displays statistics in two places:

**Main Statistics (below the About section):**
- **Documents**: Count of files in `public/content/documents/`
- **Photographs**: Count of files in `public/content/photographs/`
- **Individuals**: Count of JSON files in `public/content/individuals/`
- **Locations**: Count of JSON files in `public/content/locations/`

**Category Filter Buttons (at the top):**
- **All Records**: Total count of all categories combined
- **Documents**: Same as above
- **Photographs**: Same as above
- **Personal Records**: Maps to Individuals count
- **Correspondence**: Count of files in `public/content/correspondence/`

### 2. Dynamic Updates
The counts are fetched from `public/content/metadata.json`, which contains:
```json
{
  "documents": 0,
  "photographs": 0,
  "individuals": 0,
  "locations": 0,
  "correspondence": 0,
  "lastUpdated": "2026-02-10"
}
```

### 3. Automatic Counting
Run this command to automatically count files and update the statistics:
```bash
npm run update-stats
```

This script:
- Scans each category folder
- Counts the files (excluding system files like .DS_Store)
- Updates metadata.json with the new counts
- Records the update date

## Workflow for Adding Content

### Step 1: Add Files to Folders
Place your files in the appropriate folders:
- Documents → `public/content/documents/`
- Photographs → `public/content/photographs/`
- Individual records → `public/content/individuals/` (as JSON files)
- Location records → `public/content/locations/` (as JSON files)

### Step 2: Update Statistics
Run the update script:
```bash
npm run update-stats
```

### Step 3: View Changes
The website will automatically reflect the new counts when loaded/refreshed.

## Example: Adding a Document

1. Save your document as `public/content/documents/1917-04-15_horvat-ivan_registration.pdf`
2. Run `npm run update-stats`
3. The "Documents" count on the website will increase from 0 to 1

## JSON Record Templates

### Individual Record
`public/content/individuals/horvat-ivan.json`:
```json
{
  "id": "horvat-ivan-001",
  "name": "Ivan Horvat",
  "alternateNames": ["John Horvath", "Ivan Horwat"],
  "birthPlace": "Carniola, Austria-Hungary",
  "birthDate": "1885-03-15",
  "ethnicity": "Slovenian",
  "immigrationDate": "1912-05-20",
  "residences": ["Pittsburgh, PA", "Cleveland, OH"],
  "enemyAlienStatus": true,
  "internmentCamp": "Fort Oglethorpe, GA",
  "documents": ["registration-form-001", "internment-record-045"],
  "photographs": ["portrait-1917.jpg"],
  "notes": "Worked in steel mill, interned 1918-1919"
}
```

### Location Record
`public/content/locations/pittsburgh-pa.json`:
```json
{
  "id": "pittsburgh-pa",
  "name": "Pittsburgh, Pennsylvania",
  "type": "city",
  "state": "Pennsylvania",
  "country": "United States",
  "coordinates": {
    "lat": 40.4406,
    "lng": -79.9959
  },
  "significance": "Major center of South Slavic immigration, steel industry",
  "relatedIndividuals": ["horvat-ivan-001", "novak-maria-023"],
  "relatedDocuments": ["city-records-001"],
  "notes": "Home to large Croatian and Slovenian communities"
}
```

## Future Enhancements

### Planned Features:
1. **Upload Interface**: Web-based file upload system
2. **Search Functionality**: Full-text search across all records
3. **Linking System**: Connect related documents, people, and locations
4. **API Endpoints**: RESTful API for programmatic access
5. **Bulk Import**: CSV/Excel import for large datasets

### Automation Ideas:
- GitHub Actions to run `update-stats` automatically on push
- OCR processing for document text extraction
- Automatic thumbnail generation for photographs
- Metadata extraction from PDFs

## Maintenance

### Regular Tasks:
1. **After adding content**: Run `npm run update-stats`
2. **Before deploying**: Verify metadata.json is up to date
3. **Periodic review**: Check for duplicate or misplaced files

### Troubleshooting:
- **Counts seem wrong**: Run `npm run update-stats` to refresh
- **Files not appearing**: Check they're in the correct folder
- **JSON errors**: Validate JSON syntax at jsonlint.com

## Technical Details

### Component: `pages/ExploreDatabase.tsx`
- Uses React's `useEffect` to fetch metadata on component mount
- Displays counts with thousand separators for readability
- Falls back to 0 if fetch fails

### Script: `scripts/update-database-stats.js`
- Node.js script using ES modules
- Filters out system files (.DS_Store, etc.)
- Writes formatted JSON with 2-space indentation

### Metadata: `public/content/metadata.json`
- Simple JSON file served statically
- Cached by browser (refresh to see updates)
- Includes lastUpdated timestamp

## Contact

For questions about the database structure or adding content, refer to `public/content/README.md` or consult the project documentation.
