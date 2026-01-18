/**
 * Name Harmony - Main Application
 * Handles UI interactions and connects all modules
 */

const App = {
    // State
    currentMode: 'database',
    debounceTimer: null,
    lastQuery: '',

    // DOM Elements
    elements: {},

    /**
     * Initialize the application
     */
    init() {
        this.cacheElements();
        this.bindEvents();
        this.setMode('database');
    },

    /**
     * Cache DOM elements for performance
     */
    cacheElements() {
        this.elements = {
            lastNameInput: document.getElementById('lastName'),
            modeButtons: document.querySelectorAll('.mode-btn'),
            resultsSection: document.getElementById('resultsSection'),
            resultsPlaceholder: document.getElementById('resultsPlaceholder'),
            resultsLoading: document.getElementById('resultsLoading'),
            resultsList: document.getElementById('resultsList'),
            resultsCount: document.getElementById('resultsCount')
        };
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Input handling with debounce
        this.elements.lastNameInput.addEventListener('input', (e) => {
            this.handleInput(e.target.value);
        });

        // Mode switching
        this.elements.modeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.mode;
                this.setMode(mode);
            });
        });

        // Focus input on page load
        this.elements.lastNameInput.focus();
    },

    /**
     * Handle input changes with debounce
     */
    handleInput(value) {
        const trimmed = value.trim();

        // Clear previous timer
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }

        // Don't process if same as last query
        if (trimmed === this.lastQuery) return;

        // Show placeholder if empty
        if (!trimmed) {
            this.showPlaceholder();
            this.lastQuery = '';
            return;
        }

        // Debounce the search
        this.debounceTimer = setTimeout(() => {
            this.lastQuery = trimmed;
            this.search(trimmed);
        }, 300);
    },

    /**
     * Set the current mode
     */
    setMode(mode) {
        this.currentMode = mode;

        // Update button states
        this.elements.modeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        // Re-run search if there's input
        const value = this.elements.lastNameInput.value.trim();
        if (value) {
            this.search(value);
        }
    },

    /**
     * Perform the search/generation
     */
    search(lastName) {
        this.showLoading();

        // Use setTimeout to allow UI to update
        setTimeout(() => {
            let results;

            if (this.currentMode === 'database') {
                results = this.searchDatabase(lastName);
            } else {
                results = this.generateNovelNames(lastName);
            }

            this.displayResults(results, lastName);
        }, 100);
    },

    /**
     * Search the database for matching names
     */
    searchDatabase(lastName) {
        const results = [];

        // Score all names in the database
        for (const { name, origin } of ALL_NAMES) {
            const harmony = PhoneticEngine.calculateHarmonyScore(name, lastName);

            results.push({
                name,
                origin: this.formatOrigin(origin),
                score: harmony.score,
                reasons: harmony.reasons,
                isNovel: false
            });
        }

        // Sort by score and return top 10
        results.sort((a, b) => b.score - a.score);

        // Add some variety - don't just return similar names
        return this.diversifyResults(results, 10);
    },

    /**
     * Diversify results to avoid too many similar names
     */
    diversifyResults(results, count) {
        const selected = [];
        const usedInitials = new Set();
        const usedEndings = new Set();

        for (const result of results) {
            if (selected.length >= count) break;

            const initial = result.name[0].toLowerCase();
            const ending = result.name.slice(-2).toLowerCase();

            // Allow some overlap but prefer variety
            const initialOverlap = usedInitials.has(initial);
            const endingOverlap = usedEndings.has(ending);

            if (!initialOverlap || !endingOverlap || selected.length < count / 2) {
                selected.push(result);
                usedInitials.add(initial);
                usedEndings.add(ending);
            }
        }

        // If we don't have enough, fill with highest scoring remaining
        if (selected.length < count) {
            for (const result of results) {
                if (selected.length >= count) break;
                if (!selected.includes(result)) {
                    selected.push(result);
                }
            }
        }

        return selected;
    },

    /**
     * Generate novel names
     */
    generateNovelNames(lastName) {
        const generated = NameGenerator.generateForLastName(lastName, 15);

        // Add "generated" origin indicator
        return generated.slice(0, 10).map(item => ({
            ...item,
            origin: 'Novel Creation',
            isNovel: true
        }));
    },

    /**
     * Format origin string for display
     */
    formatOrigin(origin) {
        const originMap = {
            english: 'English',
            german: 'German',
            spanish: 'Spanish',
            french: 'French',
            italian: 'Italian',
            chinese: 'Chinese',
            arabic: 'Arabic',
            indian: 'Indian',
            japanese: 'Japanese',
            korean: 'Korean',
            african: 'African',
            scandinavian: 'Scandinavian',
            slavic: 'Slavic',
            greek: 'Greek',
            hebrew: 'Hebrew',
            portuguese: 'Portuguese',
            turkish: 'Turkish',
            dutch: 'Dutch',
            polish: 'Polish',
            vietnamese: 'Vietnamese',
            thai: 'Thai',
            filipino: 'Filipino',
            indonesian: 'Indonesian',
            persian: 'Persian',
            hungarian: 'Hungarian',
            romanian: 'Romanian',
            czech: 'Czech',
            serbian: 'Serbian',
            ukrainian: 'Ukrainian',
            irish: 'Irish',
            scottish: 'Scottish',
            welsh: 'Welsh',
            nordic: 'Nordic',
            modern: 'Modern'
        };

        return originMap[origin] || origin;
    },

    /**
     * Display results in the UI
     */
    displayResults(results, lastName) {
        this.elements.resultsPlaceholder.classList.add('hidden');
        this.elements.resultsLoading.classList.add('hidden');
        this.elements.resultsList.classList.remove('hidden');

        // Update count
        this.elements.resultsCount.textContent = `${results.length} suggestions`;

        // Build result items HTML
        const html = results.map((result, index) => {
            const level = PhoneticEngine.getScoreLevel(result.score);
            const label = PhoneticEngine.getScoreLabel(result.score);

            return `
                <li class="result-item" style="animation-delay: ${index * 30}ms">
                    <div class="result-header">
                        <div class="result-name">
                            <span class="result-full-name">
                                <span class="result-first-name">${this.escapeHtml(result.name)}</span>
                                ${this.escapeHtml(lastName)}
                            </span>
                            <span class="result-origin">
                                ${this.escapeHtml(result.origin)}
                                ${result.isNovel ? '<span class="novel-badge">AI Generated</span>' : ''}
                            </span>
                        </div>
                        <div class="result-score">
                            <div class="score-bar">
                                ${this.renderScoreBar(level)}
                            </div>
                            <span class="score-label">${label}</span>
                        </div>
                    </div>
                    <div class="result-reasons">
                        ${result.reasons.map(reason => `
                            <span class="reason-tag">
                                ${this.getReasonIcon(reason)}
                                ${this.escapeHtml(reason)}
                            </span>
                        `).join('')}
                    </div>
                </li>
            `;
        }).join('');

        this.elements.resultsList.innerHTML = html;
    },

    /**
     * Render the score bar visualization
     */
    renderScoreBar(level) {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            const filled = i <= level ? 'filled' : '';
            const levelClass = filled ? `level-${level}` : '';
            html += `<span class="score-segment ${filled} ${levelClass}"></span>`;
        }
        return html;
    },

    /**
     * Get icon for reason tag
     */
    getReasonIcon(reason) {
        const icons = {
            'complementary rhythm': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
            'balanced rhythm': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M3 12h18"/></svg>',
            'optimal length': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 6h16M4 18h10"/></svg>',
            'strong start': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
            'phoneme diversity': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
            'balanced sounds': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="6"/></svg>',
            'phoneme cohesion': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
            'smooth transition': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
            'flowing connection': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/><circle cx="12" cy="12" r="3"/></svg>',
            'consonant variety': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>',
            'subtle alliteration': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>',
            'vowel harmony': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
            'tonal contrast': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/></svg>',
            'tonal harmony': '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
        };

        return icons[reason] || '<svg class="reason-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>';
    },

    /**
     * Show placeholder state
     */
    showPlaceholder() {
        this.elements.resultsPlaceholder.classList.remove('hidden');
        this.elements.resultsLoading.classList.add('hidden');
        this.elements.resultsList.classList.add('hidden');
        this.elements.resultsCount.textContent = '';
    },

    /**
     * Show loading state
     */
    showLoading() {
        this.elements.resultsPlaceholder.classList.add('hidden');
        this.elements.resultsLoading.classList.remove('hidden');
        this.elements.resultsList.classList.add('hidden');
        this.elements.resultsCount.textContent = '';
    },

    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
