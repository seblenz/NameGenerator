/**
 * Name Harmony - Main Application
 * Handles UI interactions and connects all modules
 */

const App = {
    // State
    currentMode: 'database',
    currentGender: 'all',
    currentOrigin: 'all',
    debounceTimer: null,
    lastQuery: '',
    allResults: [],
    displayedCount: 0,
    resultsPerPage: 10,

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
            genderButtons: document.querySelectorAll('.gender-btn'),
            originFilter: document.getElementById('originFilter'),
            resultsSection: document.getElementById('resultsSection'),
            resultsPlaceholder: document.getElementById('resultsPlaceholder'),
            resultsLoading: document.getElementById('resultsLoading'),
            resultsList: document.getElementById('resultsList'),
            resultsCount: document.getElementById('resultsCount'),
            loadMoreWrapper: document.getElementById('loadMoreWrapper'),
            loadMoreBtn: document.getElementById('loadMoreBtn')
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

        // Gender filter
        this.elements.genderButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.setGender(btn.dataset.gender);
            });
        });

        // Origin filter
        this.elements.originFilter.addEventListener('change', (e) => {
            this.setOrigin(e.target.value);
        });

        // Load more button
        this.elements.loadMoreBtn.addEventListener('click', () => {
            this.loadMore();
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
     * Set the gender filter
     */
    setGender(gender) {
        this.currentGender = gender;

        // Update button states
        this.elements.genderButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.gender === gender);
        });

        // Re-run search if there's input
        const value = this.elements.lastNameInput.value.trim();
        if (value) {
            this.search(value);
        }
    },

    /**
     * Set the origin filter
     */
    setOrigin(origin) {
        this.currentOrigin = origin;

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
        this.displayedCount = 0;

        // Use setTimeout to allow UI to update
        setTimeout(() => {
            let results;

            if (this.currentMode === 'database') {
                results = this.searchDatabase(lastName);
            } else {
                results = this.generateNovelNames(lastName);
            }

            // Apply filters
            results = this.applyFilters(results);

            this.allResults = results;
            this.displayResults(results.slice(0, this.resultsPerPage), lastName, results.length);
            this.displayedCount = Math.min(this.resultsPerPage, results.length);

            // Show/hide load more button
            this.updateLoadMoreButton();
        }, 100);
    },

    /**
     * Apply gender and origin filters
     */
    applyFilters(results) {
        return results.filter(result => {
            // Gender filter
            if (this.currentGender !== 'all') {
                if (result.gender !== this.currentGender) {
                    return false;
                }
            }

            // Origin filter
            if (this.currentOrigin !== 'all') {
                const resultOrigin = result.origin.toLowerCase();
                if (resultOrigin !== this.currentOrigin &&
                    !resultOrigin.startsWith(this.currentOrigin)) {
                    return false;
                }
            }

            return true;
        });
    },

    /**
     * Load more results
     */
    loadMore() {
        const lastName = this.elements.lastNameInput.value.trim();
        const nextBatch = this.allResults.slice(
            this.displayedCount,
            this.displayedCount + this.resultsPerPage
        );

        if (nextBatch.length > 0) {
            this.appendResults(nextBatch, lastName);
            this.displayedCount += nextBatch.length;
            this.updateLoadMoreButton();
            this.updateResultsCount();
        }
    },

    /**
     * Update the load more button visibility
     */
    updateLoadMoreButton() {
        const hasMore = this.displayedCount < this.allResults.length;
        this.elements.loadMoreWrapper.classList.toggle('hidden', !hasMore);

        if (hasMore) {
            const remaining = this.allResults.length - this.displayedCount;
            const nextCount = Math.min(remaining, this.resultsPerPage);
            this.elements.loadMoreBtn.querySelector('span').textContent =
                `Show ${nextCount} more`;
        }
    },

    /**
     * Update results count display
     */
    updateResultsCount() {
        this.elements.resultsCount.textContent =
            `Showing ${this.displayedCount} of ${this.allResults.length}`;
    },

    /**
     * Search the database for matching names
     */
    searchDatabase(lastName) {
        const results = [];

        // Score all names in the database
        for (const { name, origin, gender } of ALL_NAMES) {
            const harmony = PhoneticEngine.calculateHarmonyScore(name, lastName);

            results.push({
                name,
                origin: this.formatOrigin(origin),
                gender: gender,
                score: harmony.score,
                reasons: harmony.reasons,
                isNovel: false
            });
        }

        // Sort by score
        results.sort((a, b) => b.score - a.score);

        // Return with diversity
        return this.diversifyResults(results, 100);
    },

    /**
     * Diversify results to avoid too many similar names
     */
    diversifyResults(results, count) {
        const selected = [];
        const usedInitials = new Map();
        const usedEndings = new Map();

        for (const result of results) {
            if (selected.length >= count) break;

            const initial = result.name[0].toLowerCase();
            const ending = result.name.slice(-2).toLowerCase();

            const initialCount = usedInitials.get(initial) || 0;
            const endingCount = usedEndings.get(ending) || 0;

            // Allow some overlap but prefer variety
            if (initialCount < 5 && endingCount < 3) {
                selected.push(result);
                usedInitials.set(initial, initialCount + 1);
                usedEndings.set(ending, endingCount + 1);
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
        const generated = NameGenerator.generateForLastName(lastName, 50);

        return generated.map(item => ({
            ...item,
            origin: 'Novel Creation',
            gender: this.guessGeneratedGender(item.name),
            isNovel: true
        }));
    },

    /**
     * Guess gender for generated names based on endings
     */
    guessGeneratedGender(name) {
        const lower = name.toLowerCase();
        const femaleEndings = ['a', 'ia', 'ie', 'ina', 'ella', 'ette', 'lyn'];

        for (const ending of femaleEndings) {
            if (lower.endsWith(ending)) {
                return 'female';
            }
        }
        return 'male';
    },

    /**
     * Format origin string for display
     */
    formatOrigin(origin) {
        const originMap = {
            english: 'English', german: 'German', spanish: 'Spanish',
            french: 'French', italian: 'Italian', chinese: 'Chinese',
            arabic: 'Arabic', indian: 'Indian', japanese: 'Japanese',
            korean: 'Korean', african: 'African', scandinavian: 'Scandinavian',
            slavic: 'Slavic', greek: 'Greek', hebrew: 'Hebrew',
            portuguese: 'Portuguese', turkish: 'Turkish', dutch: 'Dutch',
            polish: 'Polish', vietnamese: 'Vietnamese', thai: 'Thai',
            filipino: 'Filipino', indonesian: 'Indonesian', persian: 'Persian',
            hungarian: 'Hungarian', romanian: 'Romanian', czech: 'Czech',
            serbian: 'Serbian', ukrainian: 'Ukrainian', irish: 'Irish',
            scottish: 'Scottish', welsh: 'Welsh', nordic: 'Nordic',
            modern: 'Modern', russian: 'Russian'
        };
        return originMap[origin] || origin.charAt(0).toUpperCase() + origin.slice(1);
    },

    /**
     * Display results in the UI
     */
    displayResults(results, lastName, totalCount) {
        this.elements.resultsPlaceholder.classList.add('hidden');
        this.elements.resultsLoading.classList.add('hidden');
        this.elements.resultsList.classList.remove('hidden');

        // Update count
        this.elements.resultsCount.textContent =
            `Showing ${results.length} of ${totalCount}`;

        // Build result items HTML
        this.elements.resultsList.innerHTML = this.buildResultsHTML(results, lastName, 0);
    },

    /**
     * Append more results to the list
     */
    appendResults(results, lastName) {
        const startIndex = this.displayedCount;
        const html = this.buildResultsHTML(results, lastName, startIndex);
        this.elements.resultsList.insertAdjacentHTML('beforeend', html);
    },

    /**
     * Build HTML for results
     */
    buildResultsHTML(results, lastName, startIndex) {
        return results.map((result, index) => {
            const level = PhoneticEngine.getScoreLevel(result.score);
            const label = PhoneticEngine.getScoreLabel(result.score);
            const animDelay = (startIndex + index) * 30;

            return `
                <li class="result-item" style="animation-delay: ${animDelay}ms">
                    <div class="result-header">
                        <div class="result-name">
                            <span class="result-full-name">
                                <span class="result-first-name">${this.escapeHtml(result.name)}</span>
                                ${this.escapeHtml(lastName)}
                            </span>
                            <span class="result-origin">
                                ${this.escapeHtml(result.origin)}
                                <span class="gender-badge ${result.gender}">${result.gender}</span>
                                ${result.isNovel ? '<span class="novel-badge">AI Generated</span>' : ''}
                            </span>
                        </div>
                        <div class="result-score">
                            <div class="score-bar">${this.renderScoreBar(level)}</div>
                            <span class="score-label">${label}</span>
                        </div>
                    </div>
                    <div class="result-reasons">
                        ${result.reasons.map(reason => `
                            <span class="reason-tag">${this.escapeHtml(reason)}</span>
                        `).join('')}
                    </div>
                </li>
            `;
        }).join('');
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
     * Show placeholder state
     */
    showPlaceholder() {
        this.elements.resultsPlaceholder.classList.remove('hidden');
        this.elements.resultsLoading.classList.add('hidden');
        this.elements.resultsList.classList.add('hidden');
        this.elements.loadMoreWrapper.classList.add('hidden');
        this.elements.resultsCount.textContent = '';
    },

    /**
     * Show loading state
     */
    showLoading() {
        this.elements.resultsPlaceholder.classList.add('hidden');
        this.elements.resultsLoading.classList.remove('hidden');
        this.elements.resultsList.classList.add('hidden');
        this.elements.loadMoreWrapper.classList.add('hidden');
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
