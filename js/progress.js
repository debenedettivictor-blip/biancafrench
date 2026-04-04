// ===== Love Dove Learning — Progress & Streak Tracking =====

const Progress = {
    STORAGE_KEY: 'biancafrench_progress',
    _currentUser: 'bianca',

    setUser(user) {
        this._currentUser = user;
        this.STORAGE_KEY = user === 'victor' ? 'victorspanish_progress' : 'biancafrench_progress';
    },

    // Default state
    _default() {
        return {
            streak: 0,
            lastActiveDate: null,
            lessonsCompleted: {},  // { lessonId: { stars: 0-3, bestScore: 0, completedDate: '' } }
            totalStars: 0,
            startDate: new Date().toISOString().split('T')[0]
        };
    },

    // Load from localStorage
    load() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Could not load progress:', e);
        }
        return this._default();
    },

    // Save to localStorage
    save(data) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.warn('Could not save progress:', e);
        }
    },

    // Get current progress
    get() {
        return this.load();
    },

    // Update streak based on today's date
    updateStreak() {
        const data = this.load();
        const today = new Date().toISOString().split('T')[0];

        if (data.lastActiveDate === today) {
            // Already active today, no change
            return data;
        }

        if (data.lastActiveDate) {
            const last = new Date(data.lastActiveDate);
            const now = new Date(today);
            const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                // Consecutive day
                data.streak += 1;
            } else if (diffDays > 1) {
                // Streak broken
                data.streak = 1;
            }
        } else {
            // First time
            data.streak = 1;
        }

        data.lastActiveDate = today;
        this.save(data);
        return data;
    },

    // Record lesson completion
    completeLesson(lessonId, score, totalQuestions) {
        const data = this.load();
        const stars = this.calculateStars(score, totalQuestions);
        const existing = data.lessonsCompleted[lessonId];

        if (!existing || stars > existing.stars) {
            // Track old stars to calculate delta
            const oldStars = existing ? existing.stars : 0;

            data.lessonsCompleted[lessonId] = {
                stars: stars,
                bestScore: Math.max(score, existing ? existing.bestScore : 0),
                completedDate: new Date().toISOString().split('T')[0]
            };

            // Update total stars
            data.totalStars = (data.totalStars || 0) - oldStars + stars;
        }

        this.save(data);
        return { stars, isNewBest: !existing || stars > existing.stars };
    },

    // Calculate stars from score
    calculateStars(score, total) {
        const pct = score / total;
        if (pct >= 0.9) return 3;
        if (pct >= 0.7) return 2;
        if (pct >= 0.4) return 1;
        return 0;
    },

    // Get lesson status
    getLessonStatus(lessonId) {
        const data = this.load();
        return data.lessonsCompleted[lessonId] || null;
    },

    // Get total completed lessons count
    getCompletedCount() {
        const data = this.load();
        return Object.keys(data.lessonsCompleted).length;
    },

    // Get overall progress percentage
    getProgressPercent() {
        const lessons = this._currentUser === 'victor' ? SPANISH_LESSONS : LESSONS;
        return Math.round((this.getCompletedCount() / lessons.length) * 100);
    },

    // Get today's lesson number (1-indexed, cycles through lessons)
    getDailyLessonId() {
        const lessons = this._currentUser === 'victor' ? SPANISH_LESSONS : LESSONS;
        const data = this.load();
        const start = new Date(data.startDate || '2026-04-02');
        const now = new Date();
        const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
        return (diffDays % lessons.length) + 1;
    },

    // Reset all progress (for testing)
    reset() {
        localStorage.removeItem(this.STORAGE_KEY);
    },

    // Generate star display HTML
    starsHTML(count, max = 3) {
        let html = '';
        for (let i = 0; i < max; i++) {
            html += i < count ? '\u2B50' : '\u2606';
        }
        return html;
    },

    // Get encouraging message based on score
    getMessage(stars) {
        const name = this._currentUser === 'victor' ? 'Victor' : 'Bianca';
        const excellent = this._currentUser === 'victor' ? '\u00a1Excelente!' : 'Tr\u00e8s bien!';
        const perfect = this._currentUser === 'victor' ? '\u00a1PERFECTO! \u00a1Magn\u00edfico!' : 'PERFECT! Magnifique!';
        const brilliant = this._currentUser === 'victor' ? '\u00a1Incre\u00edble! Absolutely brilliant!' : 'Incroyable! Absolutely brilliant!';
        const messages = {
            0: ["Keep trying! You'll get there! \u{1F4AA}", "Practice makes perfect! \u{1F31F}", `Don't give up, ${name}! \u{1F338}`],
            1: ["Good start! Keep going! \u{1F60A}", "You're learning! \u{1F331}", "Nice effort! \u{1F44D}"],
            2: [`Great job, ${name}! \u{1F389}`, "Almost perfect! \u{1F31F}", `${excellent} \u{1F496}`],
            3: [`${perfect} \u{1F389}\u{1F389}\u{1F389}`, `You're a star, ${name}! \u{2B50}`, `${brilliant} \u{1F496}`]
        };
        const pool = messages[stars] || messages[0];
        return pool[Math.floor(Math.random() * pool.length)];
    }
};
