# Name Harmony

A modern, minimalist web application for suggesting first names that pair well with a given last name, based on linguistic and phonetic principles.

## Features

### Two Modes

1. **Common Names Mode**: Search through your custom database of first names loaded from a CSV file.

2. **Novel Generation Mode**: Generate unique, pronounceable first names that don't necessarily exist but follow good phonetic patterns and harmonize beautifully with the given last name.

### Filtering

- **Gender Filter**: Filter by Male, Female, Unisex, or All
- **Origin Filter**: Filter by region/origin (dynamically populated from your CSV data)
- **Load More**: Browse through results with pagination (10 at a time)

### Phonetic Analysis

The app analyzes names based on sophisticated linguistic principles:

- **Phonetic Harmony**: Complementary rhythm and syllable patterns
- **Syllable Stress**: Varying stress positions for natural flow
- **Phoneme Diversity**: Balanced sound distribution without excessive overlap
- **Alliteration & Assonance**: Subtle use for memorability
- **Euphonic Flow**: Overall pleasant sound when spoken together
- **Tonal Balance**: Harmony between "hard" and "soft" sounds

### Technical Features

- Single-page application (HTML/CSS/JavaScript)
- No external dependencies or build tools required
- CSV-based names database for easy customization
- Real-time suggestions as you type
- Support for German umlauts (ä, ö, ü, ß) and international characters
- Responsive design for mobile and desktop
- Clean, modern UI with smooth animations

## Usage

1. Add your names to `data/names.csv` (see format below)
2. Open `index.html` in any modern web browser (must be served via HTTP/HTTPS for CSV loading)
3. Enter a last name in the input field
4. Use gender and origin filters to narrow results
5. Click "Show 10 more" to load additional suggestions

### Running Locally

Since the app loads a CSV file via `fetch()`, you need to serve it via HTTP. Use any local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## CSV Format

The names database is stored in `data/names.csv` with the following columns:

| Column | Description | Required |
|--------|-------------|----------|
| Name | The first name | Yes |
| Gender | Gender classification: `male`, `female`, `unisex`, `m`, `f`, `u` | No (defaults to "unknown") |
| Grouped Region | Origin/region of the name (e.g., "English", "German", "Japanese") | No (defaults to "Unknown") |

### Example CSV

```csv
Name,Gender,Grouped Region
James,male,English
Emma,female,English
Yuki,unisex,Japanese
Hans,male,German
María,female,Spanish
```

### Notes on CSV Data

- **Duplicate entries are supported**: The same name can appear multiple times with different genders or regions
- **Gender values are normalized**: `m`, `male`, `boy`, `masculine` all become "male"
- **Quoted values supported**: Use quotes for values containing commas: `"Name, Jr."`
- **Empty CSV**: If the CSV is empty (only headers), the app will show a message prompting you to add data

## Project Structure

```
NameGenerator/
├── index.html              # Main HTML file
├── data/
│   └── names.csv           # Names database (CSV format)
├── css/
│   └── styles.css          # Modern minimalist styles
├── js/
│   ├── names-database.js   # CSV loader and parser
│   ├── phonetic-engine.js  # Phonetic analysis algorithms
│   ├── name-generator.js   # Novel name generation
│   └── app.js              # Main application logic
└── README.md
```

## How It Works

### Phonetic Scoring

Names are scored on multiple dimensions:

1. **Rhythm Analysis** (0-25 points)
   - Optimal total syllable count (3-5 syllables)
   - Complementary lengths (short + long or vice versa)
   - Balanced or punchy rhythm patterns

2. **Phoneme Analysis** (0-35 points)
   - Diversity of sounds used
   - Avoidance of excessive repetition
   - Shared phonemes for cohesion

3. **Sound Flow** (0-20 points)
   - Smooth transitions between names
   - Consonant-vowel junctions
   - Consonant variety at boundaries

4. **Alliteration/Assonance** (0-22 points)
   - Subtle initial sound matching
   - Vowel harmony patterns

5. **Tonal Balance** (0-15 points)
   - Contrast between hard and soft sounds
   - Overall tonal harmony

### Name Generation

The novel name generator uses:
- Common phoneme patterns from real names across cultures
- Pronounceable syllable combinations (CV, CVC, VC patterns)
- Intelligent cleanup to avoid awkward consonant clusters
- Optimization for the specific last name provided

## Browser Support

Works in all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## License

MIT License
