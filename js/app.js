// ===== Bianca French — App Logic =====

// ===== TEXT-TO-SPEECH HELPER =====
function speak(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.85;

    // Try to pick a French voice
    const voices = window.speechSynthesis.getVoices();
    const frVoice = voices.find(v => v.lang.startsWith('fr'));
    if (frVoice) utterance.voice = frVoice;

    window.speechSynthesis.speak(utterance);
}

// Preload voices (some browsers load them async)
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {};
    window.speechSynthesis.getVoices();
}

function speakBtn(text) {
    const escaped = text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    return `<button class="speak-btn" onclick="event.stopPropagation();speak('${escaped}')" title="Listen">&#128264;</button>`;
}

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
            const phrase = `${pronoun} ${form}`;
            grid.innerHTML += `
                <div class="conj-item">
                    <span class="conj-pronoun">${pronoun}</span>
                    <span class="conj-verb">${form}</span>
                    ${speakBtn(phrase)}
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
                    <div class="example-fr">${ex.fr} ${speakBtn(ex.fr)}</div>
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
                html += `<div class="card-header"><h3>${ev.verb} ${speakBtn(ev.verb)}</h3><span class="badge">${ev.meaning}</span></div>`;
                html += `<div class="conjugation-grid">`;
                for (const [pronoun, form] of Object.entries(ev.conjugation)) {
                    const phrase = `${pronoun} ${form}`;
                    html += `<div class="conj-item"><span class="conj-pronoun">${pronoun}</span><span class="conj-verb">${form}</span>${speakBtn(phrase)}</div>`;
                }
                html += `</div>`;
                html += `<div class="examples-list">`;
                ev.examples.forEach(ex => {
                    html += `<div class="example-item"><div class="example-fr">${ex.fr} ${speakBtn(ex.fr)}</div><div class="example-en">${ex.en}</div></div>`;
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
        document.getElementById('history-fr').innerHTML = h.fr + ' ' + speakBtn(h.fr);
        document.getElementById('history-en').textContent = h.en;

        // Vocab chips
        const vocabEl = document.getElementById('history-vocab');
        vocabEl.innerHTML = '';
        h.vocab.forEach(v => {
            vocabEl.innerHTML += `
                <div class="vocab-chip">
                    <span class="vocab-word">${v.word}</span>
                    ${speakBtn(v.word)}
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
    newsCache: null,
    algeriaCache: null,
    newsCacheTime: 0,
    algeriaCacheTime: 0,

    async translateText(text) {
        try {
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=fr|en`);
            const data = await res.json();
            if (data.responseStatus === 200 && data.responseData) {
                return data.responseData.translatedText;
            }
        } catch (e) { /* ignore */ }
        return '';
    },

    async fetchRSSFeed(rssUrl, count) {
        const url = encodeURIComponent(rssUrl);
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);
        if (!res.ok) throw new Error('Feed fetch failed');
        const data = await res.json();
        if (data.status !== 'ok' || !data.items) throw new Error('Bad feed data');
        return data.items.slice(0, count).map(item => ({
            title: item.title,
            date: new Date(item.pubDate).toLocaleDateString('fr-FR', {
                weekday: 'short', day: 'numeric', month: 'short'
            }),
            link: item.link
        }));
    },

    async fetchLiveNews() {
        const now = Date.now();
        if (this.newsCache && (now - this.newsCacheTime) < 30 * 60 * 1000) {
            return this.newsCache;
        }
        const articles = await this.fetchRSSFeed('https://www.france24.com/fr/rss', 6);
        // Translate all headlines in parallel
        const translations = await Promise.all(articles.map(a => this.translateText(a.title)));
        articles.forEach((a, i) => { a.en = translations[i]; });
        this.newsCache = articles;
        this.newsCacheTime = now;
        return articles;
    },

    async fetchAlgerianNews() {
        const now = Date.now();
        if (this.algeriaCache && (now - this.algeriaCacheTime) < 30 * 60 * 1000) {
            return this.algeriaCache;
        }
        const articles = await this.fetchRSSFeed('https://www.tsa-algerie.com/feed/', 5);
        const translations = await Promise.all(articles.map(a => this.translateText(a.title)));
        articles.forEach((a, i) => { a.en = translations[i]; });
        this.algeriaCache = articles;
        this.algeriaCacheTime = now;
        return articles;
    },

    renderNewsList(container, articles) {
        container.innerHTML = '';
        articles.forEach((article, i) => {
            const item = document.createElement('div');
            item.className = 'news-item';
            item.innerHTML = `
                <div class="news-number">${i + 1}</div>
                <div class="news-content">
                    <div class="news-fr">${article.title} ${speakBtn(article.title)}</div>
                    ${article.en ? `<div class="news-en">${article.en}</div>` : ''}
                    <div class="news-date">${article.date}</div>
                </div>
            `;
            container.appendChild(item);
        });
    },

    renderNewsTab(lesson) {
        const newsList = document.getElementById('news-list');
        const algeriaList = document.getElementById('algeria-news-list');
        const fallbackLabel = document.getElementById('news-fallback-label');
        fallbackLabel.classList.add('hidden');

        // Loading states
        newsList.innerHTML = '<div class="news-loading">Loading world news...</div>';
        algeriaList.innerHTML = '<div class="news-loading">Loading Algerian news...</div>';

        // Fetch world news
        this.fetchLiveNews().then(articles => {
            document.querySelector('.news-live-badge').classList.remove('hidden');
            this.renderNewsList(newsList, articles);
        }).catch(() => {
            document.querySelector('.news-live-badge').classList.add('hidden');
            newsList.innerHTML = '';
            const events = lesson.currentEvents;
            if (events && events.length > 0) {
                fallbackLabel.classList.remove('hidden');
                events.forEach((ev, i) => {
                    const item = document.createElement('div');
                    item.className = 'news-item';
                    item.innerHTML = `
                        <div class="news-number">${i + 1}</div>
                        <div class="news-content">
                            <div class="news-fr">${ev.fr} ${speakBtn(ev.fr)}</div>
                            <div class="news-en">${ev.en}</div>
                        </div>
                    `;
                    newsList.appendChild(item);
                });
            }
        });

        // Fetch Algerian news
        this.fetchAlgerianNews().then(articles => {
            document.getElementById('algeria-live-badge').classList.remove('hidden');
            this.renderNewsList(algeriaList, articles);
        }).catch(() => {
            document.getElementById('algeria-live-badge').classList.add('hidden');
            algeriaList.innerHTML = '<div class="news-loading">Algerian news unavailable right now</div>';
        });
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

    generateTrueFalse(lesson) {
        const h = lesson.history;
        const trueFalse = [];

        if (h.facts && h.facts.length > 0) {
            const shuffled = [...h.facts].sort(() => Math.random() - 0.5);
            shuffled.slice(0, 2).forEach(fact => {
                trueFalse.push({ statement: fact, answer: true });
            });
        }
        if (h.funFact) {
            trueFalse.push({ statement: h.funFact, answer: true });
        }

        const falseStatements = this.makeFalseStatements(lesson);
        falseStatements.forEach(fs => {
            trueFalse.push({ statement: fs, answer: false });
        });

        return trueFalse.sort(() => Math.random() - 0.5);
    },

    makeFalseStatements(lesson) {
        const period = lesson.history.period;
        const map = {
            'French Revolution': [
                "The Bastille held over 500 prisoners when it was stormed on July 14, 1789.",
                "The French Revolution began in 1805 after Napoleon became emperor."
            ],
            'Ancient Egypt': [
                "The ancient Egyptians used the Roman alphabet for their writing system.",
                "The Great Pyramid was built as a temple for worship, not as a tomb."
            ],
            'Renaissance Italy': [
                "The Renaissance began in Germany before spreading to Italy.",
                "Leonardo da Vinci was primarily known as a military general."
            ],
            'World War I': [
                "World War I lasted from 1920 to 1926.",
                "The Treaty of Versailles was signed before the war began."
            ],
            'Napoleon': [
                "Napoleon was born in England and later moved to France.",
                "Napoleon's empire peacefully dissolved without any military conflicts."
            ],
            'Ancient Greece': [
                "Ancient Greek democracy allowed all people including slaves to vote.",
                "The Olympic Games originated in Ancient Rome, not Greece."
            ],
            'Moon Landing': [
                "The first moon landing took place in 1955 during the Korean War.",
                "The Soviet Union was the first country to land astronauts on the moon."
            ],
            'Enlightenment': [
                "The Enlightenment rejected science in favor of traditional religious authority.",
                "The Enlightenment took place during the 1400s alongside the Renaissance."
            ],
            'Medieval': [
                "During Medieval times, most Europeans could read and write fluently.",
                "The Black Plague improved economic conditions across Medieval Europe."
            ],
            'American Revolution': [
                "The American Revolution was fought against France for independence.",
                "The Declaration of Independence was signed in 1800."
            ],
            'Magna Carta': [
                "The Magna Carta was written by the King to increase his own power.",
                "The Magna Carta was signed in 1492, the same year Columbus sailed."
            ],
            'Martin Luther King': [
                "Martin Luther King Jr.'s famous speech was delivered in Chicago.",
                "The Civil Rights Act was passed in 1945, right after World War II."
            ],
            'Immigration': [
                "Ellis Island was located in Boston Harbor.",
                "Most immigrants to America in the 1800s arrived through California."
            ]
        };
        for (const [key, stmts] of Object.entries(map)) {
            if (period.includes(key)) return stmts;
        }
        return ["This historical event took place in the 1500s.", "This event had no lasting impact on world history."];
    },

    answerTrueFalse(globalIdx, chosen) {
        if (this.exerciseState.answered[globalIdx]) return;
        this.exerciseState.answered[globalIdx] = true;

        const tfIdx = globalIdx - this.currentLesson.exercises.length;
        const tf = this.exerciseState.trueFalse[tfIdx];
        const correct = chosen === tf.answer;
        if (correct) this.exerciseState.score++;

        const card = document.getElementById(`exercise-${globalIdx}`);
        card.querySelectorAll('.tf-btn').forEach(btn => {
            btn.classList.add('disabled');
            const btnVal = btn.classList.contains('tf-true');
            if (btnVal === tf.answer) btn.classList.add('correct');
            if (btnVal === chosen && !correct) btn.classList.add('wrong');
        });

        const hint = tf.answer ? 'That statement is TRUE.' : 'That statement is FALSE.';
        this.showFeedback(globalIdx, correct, hint);
        this.checkAllAnswered();
    },

    renderExercises(lesson) {
        const container = document.getElementById('practice-container');
        container.innerHTML = '';

        const totalExercises = lesson.exercises.length;
        const trueFalseQs = this.generateTrueFalse(lesson);
        this.exerciseState.trueFalse = trueFalseQs;
        this.exerciseState.total = totalExercises + trueFalseQs.length;
        this.exerciseState.answered = new Array(this.exerciseState.total).fill(false);
        const totalAll = this.exerciseState.total;

        lesson.exercises.forEach((ex, idx) => {
            const card = document.createElement('div');
            card.className = 'exercise-card';
            card.id = `exercise-${idx}`;

            const typeLabel = ex.type === 'fill' ? 'Fill in the blank'
                : ex.type === 'translate' ? 'Translate to French'
                : 'History comprehension';

            let content = `
                <div class="exercise-number">Question ${idx + 1} of ${totalAll}</div>
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

        // True/False section header
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'tf-section-header';
        sectionHeader.innerHTML = `
            <h3>True or False — History Check</h3>
            <p>Did you read the History tab? Prove it!</p>
        `;
        container.appendChild(sectionHeader);

        // Render true/false questions
        trueFalseQs.forEach((tf, i) => {
            const globalIdx = totalExercises + i;
            const card = document.createElement('div');
            card.className = 'exercise-card tf-card';
            card.id = `exercise-${globalIdx}`;

            card.innerHTML = `
                <div class="exercise-number">Question ${globalIdx + 1} of ${totalAll}</div>
                <div class="exercise-type">True or False</div>
                <div class="exercise-prompt">${tf.statement}</div>
                <div class="options-grid tf-grid">
                    <button class="option-btn tf-btn tf-true" onclick="app.answerTrueFalse(${globalIdx}, true)">True</button>
                    <button class="option-btn tf-btn tf-false" onclick="app.answerTrueFalse(${globalIdx}, false)">False</button>
                </div>
                <div class="exercise-feedback" id="feedback-${globalIdx}"></div>
            `;
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

    completeTest() {
        document.getElementById('love-message-overlay').classList.remove('hidden');
    },

    dismissLoveMessage() {
        document.getElementById('love-message-overlay').classList.add('hidden');
        this.showHome();
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
