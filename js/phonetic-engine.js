/**
 * Phonetic Analysis Engine
 * Analyzes names for phonetic harmony, syllable patterns, and sound compatibility
 */

const PhoneticEngine = {
    // Vowels including German umlauts
    vowels: new Set(['a', 'e', 'i', 'o', 'u', 'y', 'ä', 'ö', 'ü']),

    // Vowel sounds for phonetic analysis
    vowelSounds: {
        'a': 'open', 'ä': 'open', 'e': 'mid', 'i': 'close',
        'o': 'mid-back', 'ö': 'mid-front', 'u': 'close-back', 'ü': 'close-front', 'y': 'close'
    },

    // Consonant categories for sound analysis
    consonantTypes: {
        plosives: new Set(['p', 'b', 't', 'd', 'k', 'g', 'c', 'q']),
        fricatives: new Set(['f', 'v', 's', 'z', 'h', 'ß']),
        nasals: new Set(['m', 'n', 'ñ']),
        liquids: new Set(['l', 'r']),
        glides: new Set(['w', 'j']),
        affricates: new Set(['x', 'ch', 'tsch', 'dsch'])
    },

    // Sound "hardness" scale (1-5, 1=soft, 5=hard)
    soundHardness: {
        'a': 2, 'e': 2, 'i': 1, 'o': 3, 'u': 3, 'ä': 2, 'ö': 2, 'ü': 1, 'y': 1,
        'b': 3, 'c': 4, 'd': 3, 'f': 2, 'g': 4, 'h': 1, 'j': 1, 'k': 5, 'l': 1,
        'm': 2, 'n': 2, 'p': 4, 'q': 5, 'r': 3, 's': 2, 't': 4, 'v': 2, 'w': 1,
        'x': 4, 'z': 3, 'ß': 2, 'ñ': 2
    },

    /**
     * Normalize a name for analysis (lowercase, handle special chars)
     */
    normalize(name) {
        return name.toLowerCase()
            .replace(/ß/g, 'ss')
            .replace(/[^a-zäöü]/g, '');
    },

    /**
     * Count syllables in a name
     */
    countSyllables(name) {
        const normalized = this.normalize(name);
        if (normalized.length === 0) return 0;

        let count = 0;
        let prevWasVowel = false;

        for (const char of normalized) {
            const isVowel = this.vowels.has(char);
            if (isVowel && !prevWasVowel) {
                count++;
            }
            prevWasVowel = isVowel;
        }

        // Handle silent 'e' at end (common in many languages)
        if (normalized.endsWith('e') && count > 1 && !this.vowels.has(normalized[normalized.length - 2])) {
            // Keep the count as is for most names
        }

        return Math.max(1, count);
    },

    /**
     * Get the phonetic pattern of a name (C=consonant, V=vowel)
     */
    getPhoneticPattern(name) {
        const normalized = this.normalize(name);
        let pattern = '';

        for (const char of normalized) {
            pattern += this.vowels.has(char) ? 'V' : 'C';
        }

        return pattern;
    },

    /**
     * Extract initial consonant cluster
     */
    getInitialSound(name) {
        const normalized = this.normalize(name);
        let initial = '';

        for (const char of normalized) {
            if (this.vowels.has(char)) break;
            initial += char;
        }

        return initial || normalized[0];
    },

    /**
     * Extract final sound (last syllable approximation)
     */
    getFinalSound(name) {
        const normalized = this.normalize(name);
        let final = '';
        let foundVowel = false;

        for (let i = normalized.length - 1; i >= 0; i--) {
            const char = normalized[i];
            final = char + final;

            if (this.vowels.has(char)) {
                foundVowel = true;
            } else if (foundVowel) {
                break;
            }
        }

        return final;
    },

    /**
     * Calculate the "sound hardness" of a name
     */
    calculateHardness(name) {
        const normalized = this.normalize(name);
        if (normalized.length === 0) return 0;

        let total = 0;
        for (const char of normalized) {
            total += this.soundHardness[char] || 2;
        }

        return total / normalized.length;
    },

    /**
     * Check for alliteration between two names
     */
    hasAlliteration(name1, name2) {
        const init1 = this.getInitialSound(name1);
        const init2 = this.getInitialSound(name2);

        if (init1 === init2) return true;

        // Check for similar sounds (e.g., c/k, f/ph)
        const similarSounds = [
            ['c', 'k'], ['f', 'ph'], ['s', 'c'], ['j', 'g']
        ];

        for (const [a, b] of similarSounds) {
            if ((init1.startsWith(a) && init2.startsWith(b)) ||
                (init1.startsWith(b) && init2.startsWith(a))) {
                return true;
            }
        }

        return false;
    },

    /**
     * Check for assonance (repeated vowel sounds)
     */
    hasAssonance(name1, name2) {
        const getVowels = (name) => {
            const normalized = this.normalize(name);
            return normalized.split('').filter(c => this.vowels.has(c));
        };

        const vowels1 = getVowels(name1);
        const vowels2 = getVowels(name2);

        // Check for shared vowel patterns
        const shared = vowels1.filter(v => vowels2.includes(v));
        return shared.length >= 2;
    },

    /**
     * Calculate rhythm compatibility
     * Returns a score and description
     */
    analyzeRhythm(firstName, lastName) {
        const firstSyllables = this.countSyllables(firstName);
        const lastSyllables = this.countSyllables(lastName);
        const totalSyllables = firstSyllables + lastSyllables;

        let score = 0;
        let reasons = [];

        // Ideal total syllable count is 3-5
        if (totalSyllables >= 3 && totalSyllables <= 5) {
            score += 25;
            reasons.push('optimal length');
        } else if (totalSyllables >= 2 && totalSyllables <= 6) {
            score += 15;
        }

        // Complementary lengths work well
        if ((firstSyllables <= 2 && lastSyllables >= 3) ||
            (firstSyllables >= 3 && lastSyllables <= 2)) {
            score += 20;
            reasons.push('complementary rhythm');
        }

        // Equal short syllables (2+2) sound punchy
        if (firstSyllables === 2 && lastSyllables === 2) {
            score += 15;
            reasons.push('balanced rhythm');
        }

        // 1-syllable first name + multi-syllable last name
        if (firstSyllables === 1 && lastSyllables >= 2) {
            score += 18;
            reasons.push('strong start');
        }

        return { score, reasons, firstSyllables, lastSyllables };
    },

    /**
     * Analyze phoneme diversity
     */
    analyzePhonemes(firstName, lastName) {
        const first = this.normalize(firstName);
        const last = this.normalize(lastName);
        const combined = first + last;

        let score = 0;
        let reasons = [];

        // Count unique phonemes
        const uniqueChars = new Set(combined);
        const diversity = uniqueChars.size / combined.length;

        if (diversity > 0.6) {
            score += 20;
            reasons.push('phoneme diversity');
        } else if (diversity > 0.4) {
            score += 10;
        }

        // Check for too much repetition (bad)
        const charCounts = {};
        for (const char of combined) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }

        const maxRepeat = Math.max(...Object.values(charCounts));
        if (maxRepeat <= 3) {
            score += 15;
            reasons.push('balanced sounds');
        }

        // Shared phonemes create cohesion (but not too many)
        const firstChars = new Set(first);
        const lastChars = new Set(last);
        const shared = [...firstChars].filter(c => lastChars.has(c));

        if (shared.length >= 2 && shared.length <= 4) {
            score += 15;
            reasons.push('phoneme cohesion');
        }

        return { score, reasons, diversity };
    },

    /**
     * Analyze sound flow between names
     */
    analyzeSoundFlow(firstName, lastName) {
        let score = 0;
        let reasons = [];

        const firstEnd = this.getFinalSound(firstName);
        const lastStart = this.getInitialSound(lastName);

        const firstEndChar = firstEnd[firstEnd.length - 1];
        const lastStartChar = lastStart[0] || lastName[0].toLowerCase();

        // Vowel ending + consonant start = smooth flow
        if (this.vowels.has(firstEndChar) && !this.vowels.has(lastStartChar)) {
            score += 20;
            reasons.push('smooth transition');
        }

        // Consonant ending + vowel start = also good
        if (!this.vowels.has(firstEndChar) && this.vowels.has(lastStartChar)) {
            score += 18;
            reasons.push('flowing connection');
        }

        // Avoid same consonant at junction (hard to pronounce)
        if (!this.vowels.has(firstEndChar) && firstEndChar === lastStartChar) {
            score -= 10;
        } else if (!this.vowels.has(firstEndChar) && !this.vowels.has(lastStartChar)) {
            // Different consonants at junction - check compatibility
            const firstType = this.getConsonantType(firstEndChar);
            const lastType = this.getConsonantType(lastStartChar);

            if (firstType !== lastType) {
                score += 10;
                reasons.push('consonant variety');
            }
        }

        return { score, reasons };
    },

    /**
     * Get consonant type category
     */
    getConsonantType(char) {
        for (const [type, set] of Object.entries(this.consonantTypes)) {
            if (set.has(char)) return type;
        }
        return 'other';
    },

    /**
     * Analyze alliteration and assonance
     */
    analyzeAlliterationAssonance(firstName, lastName) {
        let score = 0;
        let reasons = [];

        // Subtle alliteration is good, but can be excessive
        if (this.hasAlliteration(firstName, lastName)) {
            score += 12;
            reasons.push('subtle alliteration');
        }

        // Assonance creates musicality
        if (this.hasAssonance(firstName, lastName)) {
            score += 10;
            reasons.push('vowel harmony');
        }

        return { score, reasons };
    },

    /**
     * Analyze sound "hardness" balance
     */
    analyzeHardnessBalance(firstName, lastName) {
        let score = 0;
        let reasons = [];

        const firstHardness = this.calculateHardness(firstName);
        const lastHardness = this.calculateHardness(lastName);
        const diff = Math.abs(firstHardness - lastHardness);

        // Some contrast is good
        if (diff >= 0.3 && diff <= 1.5) {
            score += 15;
            reasons.push('tonal contrast');
        } else if (diff < 0.3) {
            score += 10;
            reasons.push('tonal harmony');
        }

        // Avoid both being very hard
        if (firstHardness > 3.5 && lastHardness > 3.5) {
            score -= 5;
        }

        return { score, reasons, firstHardness, lastHardness };
    },

    /**
     * Calculate overall harmony score (0-100)
     */
    calculateHarmonyScore(firstName, lastName) {
        const rhythm = this.analyzeRhythm(firstName, lastName);
        const phonemes = this.analyzePhonemes(firstName, lastName);
        const flow = this.analyzeSoundFlow(firstName, lastName);
        const alliteration = this.analyzeAlliterationAssonance(firstName, lastName);
        const hardness = this.analyzeHardnessBalance(firstName, lastName);

        // Combine all scores
        let totalScore = rhythm.score + phonemes.score + flow.score +
                        alliteration.score + hardness.score;

        // Normalize to 0-100
        totalScore = Math.min(100, Math.max(0, totalScore));

        // Collect all reasons
        const allReasons = [
            ...rhythm.reasons,
            ...phonemes.reasons,
            ...flow.reasons,
            ...alliteration.reasons,
            ...hardness.reasons
        ];

        // Remove duplicates and limit
        const uniqueReasons = [...new Set(allReasons)].slice(0, 4);

        return {
            score: Math.round(totalScore),
            reasons: uniqueReasons,
            details: {
                rhythm,
                phonemes,
                flow,
                alliteration,
                hardness
            }
        };
    },

    /**
     * Get score level (1-5) for visual display
     */
    getScoreLevel(score) {
        if (score >= 80) return 5;
        if (score >= 65) return 4;
        if (score >= 50) return 3;
        if (score >= 35) return 2;
        return 1;
    },

    /**
     * Get score label
     */
    getScoreLabel(score) {
        if (score >= 80) return 'Excellent';
        if (score >= 65) return 'Great';
        if (score >= 50) return 'Good';
        if (score >= 35) return 'Fair';
        return 'Okay';
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PhoneticEngine;
}
