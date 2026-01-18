# Name Harmony

A modern, minimalist web application for suggesting first names that pair well with a given last name, based on linguistic and phonetic principles.

## Features

### Two Modes

1. **Common Names Mode**: Search through a database of 5,000+ international first names from diverse cultures worldwide including:
   - English, German, Spanish, French, Italian
   - Chinese, Japanese, Korean transliterations
   - Arabic, Indian, Persian names
   - African, Scandinavian, Slavic names
   - And many more...

2. **Novel Generation Mode**: Generate unique, pronounceable first names that don't necessarily exist but follow good phonetic patterns and harmonize beautifully with the given last name.

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
- Real-time suggestions as you type
- Support for German umlauts (ä, ö, ü, ß) and international characters
- Responsive design for mobile and desktop
- Clean, modern UI with smooth animations

## Usage

1. Open `index.html` in any modern web browser
2. Enter a last name in the input field
3. Select either "Common Names" or "Generate Novel" mode
4. View the top 10 name suggestions ranked by phonetic compatibility
5. Each suggestion includes reasons explaining why it pairs well

## Project Structure

```
NameGenerator/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Modern minimalist styles
├── js/
│   ├── names-database.js   # 5,000+ international first names
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
