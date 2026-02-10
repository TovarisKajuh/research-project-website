# Category Filter Mapping

This document explains how the filter buttons on the "Explore the Database" page map to the actual database folders.

## Filter Buttons → Database Folders

| Filter Button       | Maps To Folder                    | Description                                      |
|---------------------|-----------------------------------|--------------------------------------------------|
| **All Records**     | (Sum of all categories)           | Total count of all items in database             |
| **Documents**       | `public/content/documents/`       | Official documents, forms, government records    |
| **Photographs**     | `public/content/photographs/`     | Historical photos, images, scans                 |
| **Personal Records**| `public/content/individuals/`     | JSON files with individual person records        |
| **Correspondence**  | `public/content/correspondence/`  | Letters, personal/family correspondence          |

## How Counts Work

### Main Statistics (4 boxes in the middle of page):
- Documents
- Photographs
- Individuals
- Locations

### Filter Buttons (at top of page):
- All Records = documents + photographs + individuals + locations + correspondence
- Documents = documents folder count
- Photographs = photographs folder count
- Personal Records = individuals folder count
- Correspondence = correspondence folder count

## Notes

1. **"Personal Records" vs "Individuals"**:
   - The filter button says "Personal Records" for user-friendly display
   - Internally it maps to the `individuals/` folder
   - Both refer to the same data

2. **"Locations"**:
   - Has a statistics box but NO filter button
   - Is included in "All Records" total
   - Locations are meant to be browsed through other views/maps

3. **All counts are dynamic**:
   - Run `npm run update-stats` after adding files
   - The website fetches from `metadata.json`
   - All numbers update automatically

## Example

If you have:
- 10 PDFs in `documents/`
- 25 photos in `photographs/`
- 15 JSON files in `individuals/`
- 5 location JSON files in `locations/`
- 3 letters in `correspondence/`

The filter buttons will show:
- **All Records (58)** ← 10 + 25 + 15 + 5 + 3
- **Documents (10)**
- **Photographs (25)**
- **Personal Records (15)** ← individuals folder
- **Correspondence (3)**

And the main statistics boxes will show:
- **Documents: 10**
- **Photographs: 25**
- **Individuals: 15**
- **Locations: 5**
