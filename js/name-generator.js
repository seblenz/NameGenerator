/**
 * Novel Name Generator
 * Generates pronounceable, phonetically harmonious names using linguistic patterns
 */

const NameGenerator = {
    // Common phoneme patterns found in names across cultures
    patterns: {
        // Consonant-Vowel patterns
        cv: ['ba', 'be', 'bi', 'bo', 'bu', 'da', 'de', 'di', 'do', 'du',
             'fa', 'fe', 'fi', 'fo', 'fu', 'ga', 'ge', 'gi', 'go', 'gu',
             'ha', 'he', 'hi', 'ho', 'hu', 'ja', 'je', 'ji', 'jo', 'ju',
             'ka', 'ke', 'ki', 'ko', 'ku', 'la', 'le', 'li', 'lo', 'lu',
             'ma', 'me', 'mi', 'mo', 'mu', 'na', 'ne', 'ni', 'no', 'nu',
             'pa', 'pe', 'pi', 'po', 'pu', 'ra', 're', 'ri', 'ro', 'ru',
             'sa', 'se', 'si', 'so', 'su', 'ta', 'te', 'ti', 'to', 'tu',
             'va', 've', 'vi', 'vo', 'vu', 'wa', 'we', 'wi', 'wo',
             'ya', 'ye', 'yi', 'yo', 'yu', 'za', 'ze', 'zi', 'zo', 'zu'],

        // Consonant-Vowel-Consonant patterns
        cvc: ['ban', 'ben', 'bin', 'bon', 'bun', 'dan', 'den', 'din', 'don',
              'fan', 'fen', 'fin', 'fon', 'gan', 'gen', 'gin', 'gon',
              'han', 'hen', 'hin', 'hon', 'jan', 'jen', 'jin', 'jon',
              'kan', 'ken', 'kin', 'kon', 'lan', 'len', 'lin', 'lon',
              'man', 'men', 'min', 'mon', 'nan', 'nen', 'nin', 'non',
              'pan', 'pen', 'pin', 'pon', 'ran', 'ren', 'rin', 'ron',
              'san', 'sen', 'sin', 'son', 'tan', 'ten', 'tin', 'ton',
              'van', 'ven', 'vin', 'von', 'wan', 'wen', 'win', 'won',
              'lar', 'ler', 'lir', 'lor', 'mar', 'mer', 'mir', 'mor',
              'nar', 'ner', 'nir', 'nor', 'tar', 'ter', 'tir', 'tor',
              'kar', 'ker', 'kir', 'kor', 'sar', 'ser', 'sir', 'sor'],

        // Vowel-Consonant patterns
        vc: ['an', 'en', 'in', 'on', 'un', 'ar', 'er', 'ir', 'or', 'ur',
             'al', 'el', 'il', 'ol', 'ul', 'as', 'es', 'is', 'os', 'us',
             'am', 'em', 'im', 'om', 'um'],

        // Common name beginnings
        beginnings: ['al', 'an', 'ar', 'as', 'ad', 'ae', 'ai',
                     'bel', 'ben', 'bri', 'bra', 'bre',
                     'cal', 'car', 'cas', 'cel', 'cha', 'cla', 'cle', 'cor',
                     'dal', 'dan', 'dar', 'del', 'di', 'dra', 'dre',
                     'el', 'em', 'en', 'er', 'es', 'eth', 'ev',
                     'fal', 'far', 'fel', 'fin', 'fla', 'flo', 'fra',
                     'gal', 'gar', 'gel', 'gra', 'gre', 'gri',
                     'hal', 'har', 'hel', 'her',
                     'il', 'im', 'in', 'ir', 'is', 'iv',
                     'jal', 'jan', 'jar', 'jas', 'jel', 'jen', 'jo', 'jul',
                     'kal', 'kar', 'kel', 'ken', 'kir', 'kla', 'kri',
                     'lal', 'lan', 'lar', 'las', 'lau', 'le', 'lei', 'len', 'leo', 'li', 'lin', 'lo', 'lu', 'lyn',
                     'mal', 'mar', 'mat', 'max', 'mel', 'mer', 'mi', 'mil', 'mir', 'mo',
                     'nal', 'nat', 'nel', 'ni', 'nik', 'no', 'nol', 'nor',
                     'ol', 'or', 'os',
                     'pal', 'par', 'pe', 'per', 'phi', 'pra', 'pri',
                     'ral', 'ran', 'ray', 're', 'rei', 'ren', 'ri', 'ro', 'ros', 'ru',
                     'sal', 'sam', 'san', 'sar', 'sel', 'ser', 'sha', 'she', 'si', 'sil', 'sol', 'sor', 'sta', 'ste', 'su', 'syl',
                     'tal', 'tam', 'tan', 'tar', 'te', 'tel', 'ter', 'the', 'thi', 'ti', 'to', 'tra', 'tre', 'tri',
                     'ul', 'un', 'ur',
                     'val', 'van', 've', 'vel', 'ver', 'vi', 'vio',
                     'wal', 'war', 'wil', 'win',
                     'xan', 'xen', 'xi',
                     'yal', 'yan', 'ye', 'yo', 'yu',
                     'zan', 'ze', 'zel', 'zen', 'zi', 'zo', 'zor'],

        // Common name endings
        endings: ['a', 'ah', 'an', 'ana', 'ane', 'ann', 'ar', 'ara', 'ard', 'as', 'at', 'ath',
                  'bel', 'ber', 'beth',
                  'ce', 'cia', 'cy',
                  'da', 'dan', 'dra', 'dro',
                  'e', 'ea', 'el', 'ela', 'elia', 'ella', 'en', 'ena', 'ene', 'eon', 'er', 'era', 'es', 'ess', 'et', 'etta', 'ette', 'eus',
                  'ia', 'ian', 'ie', 'iel', 'ien', 'ier', 'ila', 'in', 'ina', 'ine', 'io', 'ion', 'ior', 'ir', 'ira', 'is', 'isa', 'ius', 'iva', 'iya',
                  'ka', 'ke', 'ki', 'ko',
                  'la', 'lan', 'le', 'lea', 'lee', 'leigh', 'len', 'lia', 'lie', 'lin', 'lina', 'line', 'lis', 'lo', 'lon', 'lor', 'lyn', 'lynn',
                  'ma', 'man', 'mar', 'mel', 'mi', 'mia', 'min', 'mir', 'mo', 'mon', 'mus',
                  'na', 'nah', 'nan', 'ne', 'nea', 'nel', 'nia', 'nie', 'no', 'nor',
                  'o', 'oa', 'on', 'ona', 'one', 'or', 'ora', 'os', 'ot',
                  'ra', 'ran', 're', 'rea', 'ren', 'ri', 'ria', 'rin', 'ris', 'ro', 'ron', 'ros', 'rus', 'ry',
                  'sa', 'se', 'sha', 'si', 'sia', 'so', 'son', 'sta', 'sten', 'sy',
                  'ta', 'tan', 'te', 'ter', 'th', 'tha', 'ti', 'tia', 'tin', 'to', 'ton', 'tor', 'tra', 'tri', 'tus', 'ty',
                  'ua', 'ul', 'um', 'un', 'ur', 'us',
                  'va', 've', 'via', 'vin', 'vio',
                  'win', 'wyn',
                  'xa', 'xia', 'xis',
                  'ya', 'yan', 'yn', 'yne',
                  'za', 'ze', 'zen', 'zia', 'zo', 'zor'],

        // Middle connectors
        middles: ['a', 'e', 'i', 'o', 'u', 'ae', 'ai', 'au', 'ea', 'ei', 'ia', 'ie', 'io', 'iu', 'oa', 'oe', 'ou', 'ua', 'ue', 'ui',
                  'l', 'n', 'r', 's', 'th', 'v',
                  'la', 'le', 'li', 'lo', 'na', 'ne', 'ni', 'no', 'ra', 're', 'ri', 'ro', 'sa', 'se', 'si', 'so',
                  'lla', 'lle', 'lli', 'llo', 'nna', 'nne', 'nni', 'nno', 'rra', 'rre', 'rri', 'rro',
                  'da', 'de', 'di', 'do', 'ta', 'te', 'ti', 'to', 'va', 've', 'vi', 'vo',
                  'ma', 'me', 'mi', 'mo', 'ba', 'be', 'bi', 'bo', 'ca', 'ce', 'ci', 'co', 'ga', 'ge', 'gi', 'go']
    },

    // Soft/melodic sounds preferred for harmony
    softSounds: ['l', 'm', 'n', 'r', 'v', 'w', 'y', 'a', 'e', 'i', 'o', 'u'],

    // Hard/strong sounds for contrast
    hardSounds: ['k', 't', 'p', 'd', 'g', 'b', 'x'],

    /**
     * Get a random element from an array
     */
    random(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    /**
     * Capitalize first letter
     */
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Generate a single novel name
     */
    generateName(targetSyllables = null) {
        const syllables = targetSyllables || (Math.random() < 0.5 ? 2 : 3);

        let name = '';

        if (syllables === 1) {
            // Short, punchy name
            name = this.random(this.patterns.cvc);
        } else if (syllables === 2) {
            // Two-syllable name
            const type = Math.random();
            if (type < 0.4) {
                name = this.random(this.patterns.beginnings) + this.random(this.patterns.endings);
            } else if (type < 0.7) {
                name = this.random(this.patterns.cv) + this.random(this.patterns.cvc);
            } else {
                name = this.random(this.patterns.cvc) + this.random(this.patterns.vc);
            }
        } else {
            // Three+ syllable name
            const type = Math.random();
            if (type < 0.5) {
                name = this.random(this.patterns.beginnings) +
                       this.random(this.patterns.middles) +
                       this.random(this.patterns.endings);
            } else {
                name = this.random(this.patterns.cv) +
                       this.random(this.patterns.cvc) +
                       this.random(this.patterns.vc);
            }
        }

        // Clean up double consonants that are hard to pronounce
        name = this.cleanupName(name);

        return this.capitalize(name);
    },

    /**
     * Clean up a generated name for better pronunciation
     */
    cleanupName(name) {
        // Remove triple letters
        name = name.replace(/(.)\1\1/g, '$1$1');

        // Fix awkward consonant clusters
        const awkwardClusters = ['bk', 'dk', 'gk', 'pk', 'tk', 'bp', 'dp', 'gp', 'kp', 'tp',
                                  'bd', 'gd', 'kd', 'pd', 'td', 'bg', 'dg', 'kg', 'pg', 'tg',
                                  'bn', 'dn', 'gn', 'pn', 'tn', 'bm', 'dm', 'gm', 'pm', 'tm',
                                  'lr', 'rl', 'nm', 'mn', 'sr', 'rs'];

        for (const cluster of awkwardClusters) {
            if (name.includes(cluster)) {
                // Insert a vowel
                const vowels = ['a', 'e', 'i', 'o'];
                name = name.replace(cluster, cluster[0] + this.random(vowels) + cluster[1]);
            }
        }

        // Ensure name starts with a reasonable sound
        const badStarts = ['ng', 'nh', 'sr', 'ts', 'dz', 'pf'];
        for (const start of badStarts) {
            if (name.toLowerCase().startsWith(start)) {
                name = this.random(['a', 'e', 'i', 'o']) + name;
            }
        }

        return name;
    },

    /**
     * Generate a name optimized for a specific last name
     */
    generateForLastName(lastName, count = 20) {
        const lastSyllables = PhoneticEngine.countSyllables(lastName);
        const lastHardness = PhoneticEngine.calculateHardness(lastName);
        const lastInitial = PhoneticEngine.getInitialSound(lastName);
        const lastFinal = PhoneticEngine.getFinalSound(lastName);

        // Determine ideal first name characteristics
        let idealSyllables;
        if (lastSyllables === 1) {
            idealSyllables = [2, 3]; // Longer first name for short last
        } else if (lastSyllables >= 3) {
            idealSyllables = [1, 2]; // Shorter first name for long last
        } else {
            idealSyllables = [2, 3]; // Flexible for medium last
        }

        // Generate candidates
        const candidates = [];
        const seen = new Set();

        // Generate more candidates than needed, then filter
        for (let i = 0; i < count * 5; i++) {
            const syllables = this.random(idealSyllables);
            let name = this.generateName(syllables);

            // Ensure uniqueness
            if (seen.has(name.toLowerCase())) continue;
            seen.add(name.toLowerCase());

            // Skip if starts same as last name (unless subtle)
            const nameInitial = PhoneticEngine.getInitialSound(name);
            if (nameInitial === lastInitial && Math.random() > 0.3) continue;

            // Calculate harmony score
            const harmony = PhoneticEngine.calculateHarmonyScore(name, lastName);

            candidates.push({
                name,
                origin: 'generated',
                score: harmony.score,
                reasons: harmony.reasons
            });
        }

        // Sort by score and return top results
        candidates.sort((a, b) => b.score - a.score);
        return candidates.slice(0, count);
    },

    /**
     * Generate names with specific characteristics
     */
    generateWithCharacteristics(options = {}) {
        const {
            softness = 'balanced', // 'soft', 'hard', 'balanced'
            length = 'medium',     // 'short', 'medium', 'long'
            style = 'classic'      // 'classic', 'modern', 'exotic'
        } = options;

        let syllables;
        switch (length) {
            case 'short': syllables = 1; break;
            case 'long': syllables = 4; break;
            default: syllables = Math.random() < 0.5 ? 2 : 3;
        }

        // Generate base name
        let name = this.generateName(syllables);

        // Adjust for softness
        if (softness === 'soft') {
            // Prefer soft sounds
            const softBeginnings = this.patterns.beginnings.filter(b =>
                this.softSounds.includes(b[0])
            );
            const softEndings = this.patterns.endings.filter(e =>
                this.softSounds.includes(e[0]) || e.endsWith('a') || e.endsWith('ia')
            );

            if (softBeginnings.length && softEndings.length) {
                name = this.capitalize(
                    this.random(softBeginnings) +
                    (syllables > 2 ? this.random(this.patterns.middles) : '') +
                    this.random(softEndings)
                );
            }
        } else if (softness === 'hard') {
            // Prefer harder sounds
            const hardBeginnings = this.patterns.beginnings.filter(b =>
                this.hardSounds.includes(b[0])
            );
            const hardEndings = this.patterns.endings.filter(e =>
                e.endsWith('k') || e.endsWith('t') || e.endsWith('x') || e.endsWith('d')
            );

            if (hardBeginnings.length && hardEndings.length) {
                name = this.capitalize(
                    this.random(hardBeginnings) +
                    (syllables > 2 ? this.random(this.patterns.middles) : '') +
                    this.random(hardEndings)
                );
            }
        }

        // Style adjustments
        if (style === 'exotic') {
            // Add more unusual combinations
            const exoticBeginnings = ['xan', 'zar', 'kal', 'thi', 'sha', 'qui', 'jae', 'kyr'];
            const exoticEndings = ['ion', 'ius', 'ara', 'ora', 'eon', 'aia', 'yx', 'ix'];

            name = this.capitalize(
                this.random(exoticBeginnings) +
                (syllables > 2 ? this.random(['a', 'e', 'i', 'o', 'u']) : '') +
                this.random(exoticEndings)
            );
        } else if (style === 'modern') {
            // Contemporary feel
            const modernBeginnings = ['bri', 'jay', 'kay', 'may', 'ray', 'sky', 'ash', 'aer'];
            const modernEndings = ['en', 'yn', 'lee', 'ley', 'ton', 'den', 'son', 'lyn'];

            name = this.capitalize(
                this.random(modernBeginnings) +
                (syllables > 2 ? this.random(['a', 'e', 'i']) : '') +
                this.random(modernEndings)
            );
        }

        return this.cleanupName(name);
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NameGenerator;
}
