/**
 * Names Database - CSV Loader
 * Loads names from data/names.csv with columns: Name, Gender, Grouped Region
 * Handles duplicate entries where the same name can have multiple genders or regions
 */

// Global array to hold all names after loading
let ALL_NAMES = [];

// Promise that resolves when data is loaded
let dataLoadedPromise = null;

/**
 * Parse CSV text into array of objects
 * @param {string} csvText - Raw CSV text
 * @returns {Array} Array of parsed row objects
 */
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) {
        return []; // Empty or header-only file
    }

    // Parse header row
    const headers = parseCSVLine(lines[0]);
    const nameIndex = headers.findIndex(h => h.toLowerCase() === 'name');
    const genderIndex = headers.findIndex(h => h.toLowerCase() === 'gender');
    const regionIndex = headers.findIndex(h =>
        h.toLowerCase() === 'grouped region' ||
        h.toLowerCase() === 'groupedregion' ||
        h.toLowerCase() === 'region'
    );

    if (nameIndex === -1) {
        console.error('CSV must have a "Name" column');
        return [];
    }

    const results = [];

    // Parse data rows
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue; // Skip empty lines

        const values = parseCSVLine(line);

        const name = values[nameIndex]?.trim();
        if (!name) continue; // Skip rows without a name

        const gender = genderIndex !== -1 ? normalizeGender(values[genderIndex]?.trim()) : 'unknown';
        const region = regionIndex !== -1 ? values[regionIndex]?.trim() : 'Unknown';

        results.push({
            name: name,
            gender: gender,
            origin: region || 'Unknown'
        });
    }

    return results;
}

/**
 * Parse a single CSV line, handling quoted values with commas
 * @param {string} line - CSV line
 * @returns {Array} Array of values
 */
function parseCSVLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                // Escaped quote
                current += '"';
                i++;
            } else {
                // Toggle quote mode
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            values.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    values.push(current); // Add last value

    return values;
}

/**
 * Normalize gender values to standard format
 * @param {string} gender - Raw gender value
 * @returns {string} Normalized gender: 'male', 'female', 'unisex', or 'unknown'
 */
function normalizeGender(gender) {
    if (!gender) return 'unknown';

    const lower = gender.toLowerCase().trim();

    if (lower === 'male' || lower === 'm' || lower === 'boy' || lower === 'masculine') {
        return 'male';
    }
    if (lower === 'female' || lower === 'f' || lower === 'girl' || lower === 'feminine') {
        return 'female';
    }
    if (lower === 'unisex' || lower === 'u' || lower === 'neutral' || lower === 'both' || lower === 'any') {
        return 'unisex';
    }

    return 'unknown';
}

/**
 * Load names from CSV file
 * @returns {Promise<Array>} Promise resolving to array of name objects
 */
async function loadNamesFromCSV() {
    try {
        const response = await fetch('data/names.csv');
        if (!response.ok) {
            throw new Error(`Failed to load CSV: ${response.status}`);
        }

        const csvText = await response.text();
        const names = parseCSV(csvText);

        console.log(`Loaded ${names.length} names from CSV`);
        return names;
    } catch (error) {
        console.error('Error loading names CSV:', error);
        return [];
    }
}

/**
 * Initialize the names database
 * @returns {Promise} Promise that resolves when data is ready
 */
function initializeNamesDatabase() {
    if (dataLoadedPromise) {
        return dataLoadedPromise;
    }

    dataLoadedPromise = loadNamesFromCSV().then(names => {
        ALL_NAMES = names;
        return ALL_NAMES;
    });

    return dataLoadedPromise;
}

/**
 * Get all unique origins/regions from the loaded data
 * @returns {Array<string>} Sorted array of unique regions
 */
function getAvailableRegions() {
    const regions = new Set();
    for (const entry of ALL_NAMES) {
        if (entry.origin) {
            regions.add(entry.origin);
        }
    }
    return Array.from(regions).sort();
}

/**
 * Check if data is loaded
 * @returns {boolean}
 */
function isDataLoaded() {
    return ALL_NAMES.length > 0;
}

/**
 * Wait for data to be loaded
 * @returns {Promise}
 */
function waitForData() {
    if (dataLoadedPromise) {
        return dataLoadedPromise;
    }
    return initializeNamesDatabase();
}

// Export for use in other modules (Node.js compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ALL_NAMES,
        initializeNamesDatabase,
        loadNamesFromCSV,
        parseCSV,
        getAvailableRegions,
        isDataLoaded,
        waitForData
    };
}
