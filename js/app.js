// ===== Bianca French — App Logic =====

const app = {
    currentLesson: null,
    currentTab: 'french',
    exerciseState: {
        answers: [],
        currentIndex: 0,
        score: 0,
        total: 0,
        answered: []
    },

    // ===== INIT =====
    init() {
        // Update streak on load
        const data = Progress.updateStreak();
        this.updateTopBar(data);
        this.renderHome();
    },

    // ===== TOP BAR =====
    updateTopBar(data) {
        if (!data) data = Progress.get();
        document.getElementById('streak-count').textContent = data.streak;
        document.getElementById('total-stars').textContent = data.totalStars || 0;
        document.getElementById('global-progress').style.width = Progress.getProgressPercent() + '%';
    },

    // ===== SCREENS =====
    showScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        window.scrollTo(0, 0);
    },

    showHome() {
        this.showScreen('home-screen');
        this.renderHome();
        this.updateTopBar();
    },

    // ===== HOME RENDERING =====
    renderHome() {
        const dailyId = Progress.getDailyLessonId();
        const dailyLesson = LESSONS.find(l => l.id === dailyId);

        // Daily CTA
        const hint = document.getElementById('daily-hint');
        hint.textContent = `Today's lesson: ${dailyLesson.title}`;

        // Lessons grid
        const grid = document.getElementById('lessons-grid');
        grid.innerHTML = '';

        LESSONS.forEach((lesson, index) => {
            const status = Progress.getLessonStatus(lesson.id);
            const card = document.createElement('div');
            card.className = 'lesson-card' + (status ? ' completed' : '');
            card.onclick = () => this.openLesson(lesson.id);

            const starsHtml = status ? Progress.starsHTML(status.stars) : Progress.starsHTML(0);
            const badge = status && status.stars === 3 ? '\u{1F451}' : (status ? '\u2705' : '\u{1F4D6}');

            card.innerHTML = `
                <div class="card-badge">${badge}</div>
                <div class="card-number">Lesson ${lesson.id}</div>
                <div class="card-title">${lesson.title}</div>
                <div class="card-desc">${lesson.desc}</div>
                <div class="card-history-tag">${lesson.history.period}</div>
                <div class="card-stars">${starsHtml}</div>
            `;

            card.style.animationDelay = (index * 0.05) + 's';
            card.classList.add('slide-up');
            grid.appendChild(card);
        });
    },

    // ===== DAILY LESSON =====
    startDailyLesson() {
        const dailyId = Progress.getDailyLessonId();
        this.openLesson(dailyId);
    },

    // ===== OPEN LESSON =====
    openLesson(lessonId) {
        const lesson = LESSONS.find(l => l.id === lessonId);
        if (!lesson) return;

        this.currentLesson = lesson;
        this.showScreen('lesson-screen');
        this.switchTab('french');

        // Header
        document.getElementById('lesson-number').textContent = `Lesson ${lesson.id}`;
        document.getElementById('lesson-title').textContent = lesson.title;

        const status = Progress.getLessonStatus(lesson.id);
        document.getElementById('lesson-stars').innerHTML = status ? Progress.starsHTML(status.stars) : '';

        // Reset tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelector('[data-tab="french"]').classList.add('active');

        this.renderFrenchTab(lesson);
        this.renderHistoryTab(lesson);
        this.renderNewsTab(lesson);
        this.resetPractice(lesson);
    },

    // ===== FRENCH TAB =====
    renderFrenchTab(lesson) {
        const f = lesson.frenchFocus;

        // Verb title
        document.getElementById('verb-title').textContent = f.verb;
        document.getElementById('verb-badge').textContent = lesson.title.split(' — ')[1] || '';

        // Conjugation
        const grid = document.getElementById('conjugation-grid');
        grid.innerHTML = '';
        for (const [pronoun, form] of Object.entries(f.conjugation)) {
            grid.innerHTML += `
                <div class="conj-item">
                    <span class="conj-pronoun">${pronoun}</span>
                    <span class="conj-verb">${form}</span>
                </div>
            `;
        }

        // Pattern
        document.getElementById('pattern-display').textContent = f.pattern;

        // Examples
        const list = document.getElementById('examples-list');
        list.innerHTML = '';
        f.examples.forEach(ex => {
            list.innerHTML += `
                <div class="example-item">
                    <div class="example-fr">${ex.fr}</div>
                    <div class="example-en">${ex.en}</div>
                </div>
            `;
        });

        // Tips
        const tipsCard = document.getElementById('tips-card');
        if (f.tips) {
            tipsCard.style.display = 'block';
            document.getElementById('tips-text').textContent = f.tips;
        } else {
            tipsCard.style.display = 'none';
        }

        // Extra verbs
        const extraContainer = document.getElementById('extra-verbs-container');
        extraContainer.innerHTML = '';
        if (f.extraVerbs && f.extraVerbs.length > 0) {
            f.extraVerbs.forEach(ev => {
                let html = `<div class="card extra-verb-card">`;
                html += `<div class="card-header"><h3>${ev.verb}</h3><span class="badge">${ev.meaning}</span></div>`;
                html += `<div class="conjugation-grid">`;
                for (const [pronoun, form] of Object.entries(ev.conjugation)) {
                    html += `<div class="conj-item"><span class="conj-pronoun">${pronoun}</span><span class="conj-verb">${form}</span></div>`;
                }
                html += `</div>`;
                html += `<div class="examples-list">`;
                ev.examples.forEach(ex => {
                    html += `<div class="example-item"><div class="example-fr">${ex.fr}</div><div class="example-en">${ex.en}</div></div>`;
                });
                html += `</div></div>`;
                extraContainer.innerHTML += html;
            });
        }
    },

    // ===== HISTORY TAB =====
    renderHistoryTab(lesson) {
        const h = lesson.history;

        document.getElementById('history-period').textContent = h.period;
        document.getElementById('history-fr').textContent = h.fr;
        document.getElementById('history-en').textContent = h.en;

        // Vocab chips
        const vocabEl = document.getElementById('history-vocab');
        vocabEl.innerHTML = '';
        h.vocab.forEach(v => {
            vocabEl.innerHTML += `
                <div class="vocab-chip">
                    <span class="vocab-word">${v.word}</span>
                    <span class="vocab-meaning"> = ${v.meaning}</span>
                </div>
            `;
        });

        // Reset reveal
        document.getElementById('history-en-container').classList.add('hidden');
        document.getElementById('reveal-btn').style.display = '';

        // Fun fact
        document.getElementById('history-funfact').textContent = h.funFact;

        // History facts
        const factsEl = document.getElementById('history-facts');
        factsEl.innerHTML = '';
        if (h.facts && h.facts.length > 0) {
            let html = `<div class="facts-section"><h3>Did You Know?</h3><ul class="facts-list">`;
            h.facts.forEach(fact => {
                html += `<li class="fact-item">${fact}</li>`;
            });
            html += `</ul></div>`;
            factsEl.innerHTML = html;
        }

    },

    // ===== WORLD NEWS TAB =====
    renderNewsTab(lesson) {
        const newsList = document.getElementById('news-list');
        const newsEmpty = document.getElementById('news-empty');
        newsList.innerHTML = '';

        const events = lesson.currentEvents;
        if (events && events.length > 0) {
            newsEmpty.classList.add('hidden');
            events.forEach((ev, i) => {
                const item = document.createElement('div');
                item.className = 'news-item';
                item.innerHTML = `
                    <div class="news-number">${i + 1}</div>
                    <div class="news-content">
                        <div class="news-fr">${ev.fr}</div>
                        <div class="news-en">${ev.en}</div>
                    </div>
                `;
                newsList.appendChild(item);
            });
        } else {
            newsEmpty.classList.remove('hidden');
        }
    },

    revealTranslation() {
        document.getElementById('history-en-container').classList.remove('hidden');
        document.getElementById('reveal-btn').style.display = 'none';
    },

    // ===== TABS =====
    switchTab(tab) {
        this.currentTab = tab;

        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById(`tab-${tab}`).classList.add('active');
    },

    // ===== PRACTICE =====
    resetPractice(lesson) {
        this.exerciseState = {
            answers: [],
            score: 0,
            total: lesson.exercises.length,
            answered: new Array(lesson.exercises.length).fill(false)
        };

        document.getElementById('practice-results').classList.add('hidden');
        this.renderExercises(lesson);
    },

    retryPractice() {
        if (this.currentLesson) {
            this.resetPractice(this.currentLesson);
        }
    },

    renderExercises(lesson) {
        const container = document.getElementById('practice-container');
        container.innerHTML = '';

        lesson.exercises.forEach((ex, idx) => {
            const card = document.createElement('div');
            card.className = 'exercise-card';
            card.id = `exercise-${idx}`;

            const typeLabel = ex.type === 'fill' ? 'Fill in the blank'
                : ex.type === 'translate' ? 'Translate to French'
                : 'History comprehension';

            let content = `
                <div class="exercise-number">Question ${idx + 1} of ${lesson.exercises.length}</div>
                <div class="exercise-type">${typeLabel}</div>
            `;

            if (ex.type === 'fill') {
                const promptHtml = ex.prompt.replace('___', '<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;</span>');
                content += `<div class="exercise-prompt">${promptHtml}</div>`;
                content += '<div class="options-grid">';
                ex.options.forEach(opt => {
                    content += `<button class="option-btn" onclick="app.answerFill(${idx}, '${opt}')">${opt}</button>`;
                });
                content += '</div>';
            } else if (ex.type === 'translate') {
                content += `<div class="exercise-prompt">${ex.en}</div>`;
                content += `
                    <div class="translate-input-group">
                        <input type="text" class="translate-input" id="translate-${idx}"
                            placeholder="Type your answer in French..."
                            onkeydown="if(event.key==='Enter')app.answerTranslate(${idx})">
                        <button class="btn-check" onclick="app.answerTranslate(${idx})">Check</button>
                    </div>
                `;
            } else if (ex.type === 'history') {
                content += `<div class="exercise-prompt">${ex.fr}</div>`;
                content += '<div class="options-grid">';
                ex.options.forEach(opt => {
                    const escaped = opt.replace(/'/g, "\\'");
                    content += `<button class="option-btn" onclick="app.answerHistory(${idx}, '${escaped}')">${opt}</button>`;
                });
                content += '</div>';
            }

            content += `<div class="exercise-feedback" id="feedback-${idx}"></div>`;
            card.innerHTML = content;
            container.appendChild(card);
        });
    },

    // ===== ANSWER HANDLERS =====
    answerFill(idx, chosen) {
        if (this.exerciseState.answered[idx]) return;
        this.exerciseState.answered[idx] = true;

        const ex = this.currentLesson.exercises[idx];
        const correct = chosen === ex.answer;
        if (correct) this.exerciseState.score++;

        // Highlight buttons
        const card = document.getElementById(`exercise-${idx}`);
        card.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.add('disabled');
            if (btn.textContent === ex.answer) btn.classList.add('correct');
            if (btn.textContent === chosen && !correct) btn.classList.add('wrong');
        });

        this.showFeedback(idx, correct, `The answer is: ${ex.answer}`);
        this.checkAllAnswered();
    },

    answerTranslate(idx) {
        if (this.exerciseState.answered[idx]) return;

        const input = document.getElementById(`translate-${idx}`);
        const userAnswer = input.value.trim();
        if (!userAnswer) return;

        this.exerciseState.answered[idx] = true;

        const ex = this.currentLesson.exercises[idx];
        const normalized = userAnswer.toLowerCase().replace(/[?!.,;:]/g, '').trim();

        // Check against accepted answers
        const allAccepted = [ex.answer.toLowerCase(), ...(ex.accept || []).map(a => a.toLowerCase())];
        const correct = allAccepted.some(a =>
            normalized === a.replace(/[?!.,;:]/g, '').trim()
        );

        if (correct) this.exerciseState.score++;

        input.classList.add(correct ? 'correct' : 'wrong');
        input.disabled = true;

        this.showFeedback(idx, correct, `Correct answer: ${ex.answer}`);
        this.checkAllAnswered();
    },

    answerHistory(idx, chosen) {
        if (this.exerciseState.answered[idx]) return;
        this.exerciseState.answered[idx] = true;

        const ex = this.currentLesson.exercises[idx];
        const correct = chosen === ex.answer;
        if (correct) this.exerciseState.score++;

        const card = document.getElementById(`exercise-${idx}`);
        card.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.add('disabled');
            if (btn.textContent === ex.answer) btn.classList.add('correct');
            if (btn.textContent === chosen && !correct) btn.classList.add('wrong');
        });

        this.showFeedback(idx, correct, `The answer is: ${ex.answer}`);
        this.checkAllAnswered();
    },

    showFeedback(idx, correct, hint) {
        const fb = document.getElementById(`feedback-${idx}`);
        fb.className = `exercise-feedback show ${correct ? 'correct' : 'wrong'}`;
        fb.textContent = correct ? '\u2705 Correct! Bravo!' : `\u274C Not quite. ${hint}`;
    },

    checkAllAnswered() {
        if (this.exerciseState.answered.every(a => a)) {
            setTimeout(() => this.showResults(), 800);
        }
    },

    // ===== RESULTS =====
    showResults() {
        const { score, total } = this.exerciseState;
        const result = Progress.completeLesson(this.currentLesson.id, score, total);
        this.updateTopBar();

        // Update lesson stars in header
        document.getElementById('lesson-stars').innerHTML = Progress.starsHTML(result.stars);

        const resultsEl = document.getElementById('practice-results');
        resultsEl.classList.remove('hidden');

        const titles = ['Keep Practicing!', 'Good Work!', 'Great Job!', 'PERFECT!'];
        document.getElementById('results-title').textContent = titles[result.stars];
        document.getElementById('results-stars').innerHTML = Progress.starsHTML(result.stars);
        document.getElementById('results-message').textContent = Progress.getMessage(result.stars);
        document.getElementById('results-score').textContent = `${score} / ${total} correct`;

        // Confetti for perfect score
        if (result.stars === 3) {
            this.launchConfetti();
        }

        // Scroll to results
        resultsEl.scrollIntoView({ behavior: 'smooth' });
    },

    // ===== CONFETTI =====
    launchConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const pieces = [];
        const colors = ['#D4A843', '#F0D78C', '#E8A0BF', '#4CAF50', '#1B2A4A', '#FF6B6B', '#48dbfb'];

        for (let i = 0; i < 150; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                w: Math.random() * 10 + 5,
                h: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 3 + 2,
                spin: Math.random() * 0.2 - 0.1,
                angle: Math.random() * Math.PI * 2,
                drift: Math.random() * 2 - 1
            });
        }

        let frame = 0;
        const maxFrames = 180;

        function animate() {
            if (frame > maxFrames) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                return;
            }
            frame++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            pieces.forEach(p => {
                p.y += p.speed;
                p.x += p.drift;
                p.angle += p.spin;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0, 1 - (frame / maxFrames) * 0.5);
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            });

            requestAnimationFrame(animate);
        }

        animate();
    }
};

// ===== Start the app =====
document.addEventListener('DOMContentLoaded', () => app.init());
