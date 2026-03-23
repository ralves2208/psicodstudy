/* =========================================
   PSICODSTUDY — LÓGICA PRINCIPAL (app.js)
   ========================================= */

// ── DADOS ─────────────────────────────────────────────────────────────────────

const QUOTES = [
  { text: "Quem olha para fora sonha; quem olha para dentro desperta.", author: "Carl Gustav Jung" },
  { text: "A primeira e mais fundamental condição para a saúde mental é amar.", author: "Erich Fromm" },
  { text: "O que não se torna consciente se manifesta no mundo como destino.", author: "Carl Gustav Jung" },
  { text: "A liberdade não é ausência de comprometimento, mas a capacidade de escolher.", author: "Erich Fromm" },
  { text: "Toda neurose é substituinte do sofrimento legítimo.", author: "Carl Gustav Jung" },
  { text: "O conhecimento de si mesmo é o começo de toda sabedoria.", author: "Aristóteles" },
  { text: "Não se trata do que o mundo faz de você, mas do que você faz com o que o mundo faz de você.", author: "Jean-Paul Sartre" },
];

const FLASHCARDS = [
  { term: "Id", def: "Reservatório das pulsões e impulsos inconscientes, regido pelo princípio do prazer. Busca satisfação imediata sem considerar a realidade.", tag: "psicanálise" },
  { term: "Ego", def: "Instância psíquica que medeia o id e o mundo externo, operando pelo princípio da realidade. Responsável pela adaptação.", tag: "psicanálise" },
  { term: "Superego", def: "Internalização das normas morais e sociais. Representa a consciência moral e o ideal do ego.", tag: "psicanálise" },
  { term: "Inconsciente", def: "Reservatório de conteúdos mentais reprimidos ou inacessíveis à consciência que influenciam o comportamento.", tag: "psicanálise" },
  { term: "Recalque", def: "Mecanismo de defesa pelo qual conteúdos inaceitáveis são afastados da consciência para o inconsciente.", tag: "psicanálise" },
  { term: "Arquétipo", def: "Padrões universais de experiência e comportamento presentes no inconsciente coletivo, segundo Jung.", tag: "psicanálise" },
  { term: "Schema Cognitivo", def: "Estrutura mental que organiza e interpreta informações, influenciando percepções e comportamentos.", tag: "cognitivo" },
  { term: "Dissonância Cognitiva", def: "Tensão psicológica gerada por crenças ou comportamentos contraditórios, motivando mudança para reduzir o conflito.", tag: "cognitivo" },
  { term: "Metacognição", def: "Capacidade de pensar sobre os próprios processos de pensamento. Fundamental na aprendizagem autorregulada.", tag: "cognitivo" },
  { term: "Reestruturação Cognitiva", def: "Técnica terapêutica que identifica e modifica pensamentos disfuncionais, base da Terapia Cognitivo-Comportamental.", tag: "cognitivo" },
  { term: "Conformismo", def: "Tendência de ajustar crenças e comportamentos às normas do grupo social, mesmo contra convicção pessoal.", tag: "social" },
  { term: "Obediência", def: "Comportamento de seguir instruções de uma figura de autoridade, demonstrado nos experimentos de Milgram.", tag: "social" },
  { term: "Atribuição Causal", def: "Processo de explicar causas de comportamentos. Inclui erros como o Erro Fundamental de Atribuição.", tag: "social" },
  { term: "Aprendizagem Observacional", def: "Aquisição de comportamentos por observação de modelos, proposta por Bandura na Teoria Social Cognitiva.", tag: "social" },
  { term: "Assimilação", def: "Processo piagetiano de incorporar nova informação em estruturas cognitivas existentes.", tag: "desenvolvimento" },
  { term: "Acomodação", def: "Modificação de esquemas cognitivos existentes para incorporar informações novas e incompatíveis.", tag: "desenvolvimento" },
  { term: "Zona de Desenv. Proximal", def: "Espaço entre o que a criança consegue fazer sozinha e o que consegue com auxílio, conceito de Vygotsky.", tag: "desenvolvimento" },
  { term: "Apego", def: "Vínculo emocional duradouro entre criança e cuidador, estudado por Bowlby, essencial para o desenvolvimento.", tag: "desenvolvimento" },
];

const TEORISTAS = [
  {
    nome: "Sigmund Freud",
    anos: "1856 – 1939",
    tag: "Psicanálise",
    cor: "#5c7a6e",
    excerpt: "Fundador da psicanálise e pioneiro no estudo do inconsciente.",
    bio: "Sigmund Freud foi um neurologista austríaco considerado o pai da psicanálise. Sua obra revolucionou a compreensão da mente humana ao propor que grande parte do comportamento é determinada por processos inconscientes.",
    contribuicoes: [
      "Teoria do inconsciente e dos mecanismos de defesa",
      "Modelo estrutural da psique: id, ego e superego",
      "Método psicanalítico: associação livre e interpretação de sonhos",
      "Teoria do desenvolvimento psicossexual",
      "Conceito de complexo de Édipo",
    ],
    obras: ["A Interpretação dos Sonhos (1900)", "O Ego e o Id (1923)", "O Mal-Estar na Civilização (1930)"],
  },
  {
    nome: "Carl Gustav Jung",
    anos: "1875 – 1961",
    tag: "Psicologia Analítica",
    cor: "#6b5c7a",
    excerpt: "Criador da psicologia analítica e do conceito de inconsciente coletivo.",
    bio: "Carl Gustav Jung foi um psiquiatra suíço que desenvolveu a psicologia analítica. Após colaborar com Freud, criou sua própria abordagem, focando em arquétipos, inconsciente coletivo e o processo de individuação.",
    contribuicoes: [
      "Teoria dos arquétipos e do inconsciente coletivo",
      "Processo de individuação",
      "Tipos psicológicos: introversão e extroversão",
      "Conceito de persona, anima, animus e sombra",
      "Sincronicidade",
    ],
    obras: ["Tipos Psicológicos (1921)", "O Eu e o Inconsciente (1928)", "Memórias, Sonhos e Reflexões (1962)"],
  },
  {
    nome: "Jean Piaget",
    anos: "1896 – 1980",
    tag: "Psicologia do Desenvolvimento",
    cor: "#3d6b5e",
    excerpt: "Teórico do desenvolvimento cognitivo infantil por estágios.",
    bio: "Jean Piaget foi um psicólogo suíço cujas pesquisas sobre o desenvolvimento cognitivo infantil são fundamentais para a psicologia e a educação. Propôs que o desenvolvimento ocorre em estágios universais e invariáveis.",
    contribuicoes: [
      "Teoria dos estágios do desenvolvimento cognitivo",
      "Conceitos de assimilação, acomodação e equilibração",
      "Epistemologia genética",
      "Estudo do desenvolvimento moral na criança",
    ],
    obras: ["A Linguagem e o Pensamento da Criança (1923)", "A Psicologia da Inteligência (1947)"],
  },
  {
    nome: "Lev Vygotsky",
    anos: "1896 – 1934",
    tag: "Psicologia Histórico-Cultural",
    cor: "#7a5c3d",
    excerpt: "Teorizou sobre aprendizagem social e a Zona de Desenvolvimento Proximal.",
    bio: "Lev Vygotsky foi um psicólogo soviético que enfatizou o papel social e cultural no desenvolvimento cognitivo. Sua teoria destaca a importância da linguagem, da interação social e da mediação cultural.",
    contribuicoes: [
      "Zona de Desenvolvimento Proximal (ZDP)",
      "Teoria da mediação simbólica",
      "Relação entre pensamento e linguagem",
      "Andaimento (scaffolding) na aprendizagem",
    ],
    obras: ["Pensamento e Linguagem (1934)", "A Formação Social da Mente (1978)"],
  },
  {
    nome: "B. F. Skinner",
    anos: "1904 – 1990",
    tag: "Behaviorismo",
    cor: "#5c6b3d",
    excerpt: "Desenvolveu o condicionamento operante e o behaviorismo radical.",
    bio: "Burrhus Frederic Skinner foi um psicólogo americano e principal expoente do behaviorismo radical. Seu trabalho com reforço e punição moldou profundamente a psicologia experimental e aplicada.",
    contribuicoes: [
      "Condicionamento operante e caixa de Skinner",
      "Conceitos de reforço positivo e negativo",
      "Análise comportamental aplicada (ABA)",
      "Behaviorismo radical como filosofia da ciência",
    ],
    obras: ["O Comportamento dos Organismos (1938)", "Ciência e Comportamento Humano (1953)", "Além da Liberdade e da Dignidade (1971)"],
  },
  {
    nome: "Abraham Maslow",
    anos: "1908 – 1970",
    tag: "Psicologia Humanista",
    cor: "#c4874a",
    excerpt: "Criou a Hierarquia das Necessidades e o conceito de autorrealização.",
    bio: "Abraham Maslow foi um psicólogo americano e um dos fundadores da psicologia humanista. Propôs uma visão positiva e motivacional do ser humano, culminando no conceito de autorrealização.",
    contribuicoes: [
      "Hierarquia das Necessidades (Pirâmide de Maslow)",
      "Conceito de autorrealização e experiências de pico",
      "Fundamentos da psicologia humanista",
      "Distinção entre necessidades de déficit e crescimento",
    ],
    obras: ["Motivação e Personalidade (1954)", "Rumo a uma Psicologia do Ser (1962)"],
  },
  {
    nome: "Albert Bandura",
    anos: "1925 – 2021",
    tag: "Psicologia Social Cognitiva",
    cor: "#4a7ac4",
    excerpt: "Teorizou a aprendizagem observacional e o conceito de autoeficácia.",
    bio: "Albert Bandura foi um psicólogo canadense-americano que desenvolveu a teoria cognitivo-social. Sua pesquisa sobre o experimento do Boneco Bobo demonstrou que comportamentos agressivos podem ser aprendidos por observação.",
    contribuicoes: [
      "Teoria da Aprendizagem Social",
      "Conceito de autoeficácia",
      "Experimento do Boneco Bobo",
      "Modelagem e aprendizagem vicária",
      "Determinismo recíproco",
    ],
    obras: ["Princípios de Modificação do Comportamento (1969)", "Autoeficácia: O Exercício do Controle (1997)"],
  },
  {
    nome: "Aaron Beck",
    anos: "1921 – 2021",
    tag: "Terapia Cognitiva",
    cor: "#3d5e7a",
    excerpt: "Fundador da Terapia Cognitiva, base da TCC moderna.",
    bio: "Aaron Beck foi um psiquiatra americano e fundador da Terapia Cognitiva. Ao estudar a depressão, percebeu o papel central dos pensamentos automáticos negativos e desenvolveu uma abordagem terapêutica estruturada e baseada em evidências.",
    contribuicoes: [
      "Terapia Cognitiva e Terapia Cognitivo-Comportamental (TCC)",
      "Modelo cognitivo da depressão",
      "Triada cognitiva: visão negativa de si, do mundo e do futuro",
      "Inventário de Depressão de Beck (BDI)",
      "Terapia baseada em esquemas",
    ],
    obras: ["Cognitive Therapy of Depression (1979)", "Prisoners of Hate (1999)"],
  },
];

const QUIZ_QUESTIONS = [
  { q: "Quem é considerado o fundador da psicanálise?", opts: ["Carl Jung", "Sigmund Freud", "Alfred Adler", "Wilhelm Wundt"], ans: 1 },
  { q: "O conceito de 'Zona de Desenvolvimento Proximal' foi proposto por:", opts: ["Jean Piaget", "Lev Vygotsky", "Erik Erikson", "Lawrence Kohlberg"], ans: 1 },
  { q: "Qual estrutura psíquica representa a consciência moral, segundo Freud?", opts: ["Id", "Ego", "Superego", "Libido"], ans: 2 },
  { q: "A 'Pirâmide de Maslow' foi criada por qual psicólogo?", opts: ["Carl Rogers", "Abraham Maslow", "Erich Fromm", "Viktor Frankl"], ans: 1 },
  { q: "O experimento do 'Boneco Bobo' foi conduzido por:", opts: ["B.F. Skinner", "Ivan Pavlov", "Albert Bandura", "John Watson"], ans: 2 },
  { q: "Qual processo piagetiano envolve modificar esquemas existentes para novos dados?", opts: ["Assimilação", "Acomodação", "Equilibração", "Adaptação"], ans: 1 },
  { q: "O 'Condicionamento Operante' está associado a qual autor?", opts: ["Ivan Pavlov", "John Watson", "B.F. Skinner", "Edward Thorndike"], ans: 2 },
  { q: "O conceito de 'inconsciente coletivo' é uma contribuição de:", opts: ["Sigmund Freud", "Alfred Adler", "Carl Gustav Jung", "Otto Rank"], ans: 2 },
  { q: "A Terapia Cognitiva foi desenvolvida por:", opts: ["Aaron Beck", "Albert Ellis", "Donald Meichenbaum", "Marsha Linehan"], ans: 0 },
  { q: "Qual mecanismo de defesa afasta conteúdos inaceitáveis para o inconsciente?", opts: ["Projeção", "Racionalização", "Recalque", "Sublimação"], ans: 2 },
];

// ── ESTADO ─────────────────────────────────────────────────────────────────────

let state = {
  currentSection: "dashboard",
  cardsReviewed: 0,
  quizzesDone: 0,
  bestScore: null,
  notes: [],
  streak: 1,
  filterActive: "all",
  quiz: {
    active: false,
    questionIndex: 0,
    score: 0,
    answered: false,
    shuffled: [],
  },
};

// ── INICIALIZAÇÃO ──────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderDailyQuote();
  renderFlashcards("all");
  renderTeorists();
  updateStats();
  updateProgress();
  bindNav();
  bindSidebar();
  bindFlashcardFilters();
  bindQuiz();
  bindNotes();
  renderNotes();
});

// ── PERSISTÊNCIA ───────────────────────────────────────────────────────────────

function saveState() {
  try {
    localStorage.setItem("psicoStudyState", JSON.stringify({
      cardsReviewed: state.cardsReviewed,
      quizzesDone: state.quizzesDone,
      bestScore: state.bestScore,
      notes: state.notes,
      streak: state.streak,
    }));
  } catch (_) {}
}

function loadState() {
  try {
    const saved = localStorage.getItem("psicoStudyState");
    if (saved) {
      const d = JSON.parse(saved);
      state.cardsReviewed = d.cardsReviewed || 0;
      state.quizzesDone   = d.quizzesDone   || 0;
      state.bestScore     = d.bestScore      || null;
      state.notes         = d.notes          || [];
      state.streak        = d.streak         || 1;
    }
  } catch (_) {}
  document.getElementById("streak-count").textContent = state.streak;
}

// ── NAVEGAÇÃO ──────────────────────────────────────────────────────────────────

function bindNav() {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const section = item.dataset.section;
      goToSection(section);
      // Fecha sidebar no mobile
      if (window.innerWidth <= 768) {
        document.getElementById("sidebar").classList.remove("open");
      }
    });
  });
}

function goToSection(section) {
  // Desativa seção atual
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));

  // Ativa nova seção
  const el = document.getElementById(`section-${section}`);
  if (el) el.classList.add("active");

  const nav = document.querySelector(`.nav-item[data-section="${section}"]`);
  if (nav) nav.classList.add("active");

  // Títulos
  const titles = {
    dashboard:  "Dashboard",
    flashcards: "Flashcards",
    teoristas:  "Teóricos",
    quiz:       "Quiz",
    notas:      "Anotações",
  };
  document.getElementById("page-title").textContent = titles[section] || section;
  state.currentSection = section;
}

function bindSidebar() {
  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });
}

// ── QUOTE DO DIA ───────────────────────────────────────────────────────────────

function renderDailyQuote() {
  const idx = new Date().getDate() % QUOTES.length;
  const q = QUOTES[idx];
  document.getElementById("daily-quote").textContent = `"${q.text}"`;
  document.getElementById("daily-author").textContent = `— ${q.author}`;
}

// ── ESTATÍSTICAS ───────────────────────────────────────────────────────────────

function updateStats() {
  document.getElementById("stat-cards-count").textContent = state.cardsReviewed;
  document.getElementById("stat-quiz-count").textContent  = state.quizzesDone;
  document.getElementById("stat-notes-count").textContent = state.notes.length;
  document.getElementById("stat-score").textContent =
    state.bestScore !== null ? `${state.bestScore}/10` : "—";
}

function updateProgress() {
  const total = FLASHCARDS.length + QUIZ_QUESTIONS.length;
  const done  = Math.min(state.cardsReviewed + state.quizzesDone * 10, total);
  const pct   = Math.round((done / total) * 100);
  document.getElementById("sidebar-progress-fill").style.width = pct + "%";
  document.getElementById("sidebar-progress-text").textContent = pct + "%";
}

// ── FLASHCARDS ─────────────────────────────────────────────────────────────────

function renderFlashcards(filter) {
  const grid = document.getElementById("flashcard-grid");
  const cards = filter === "all" ? FLASHCARDS : FLASHCARDS.filter(c => c.tag === filter);

  grid.innerHTML = "";
  cards.forEach((card, idx) => {
    const el = document.createElement("div");
    el.className = "flashcard";
    el.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <span class="flashcard-tag">${card.tag}</span>
          <span class="flashcard-term">${card.term}</span>
          <span class="flashcard-hint">toque para revelar</span>
        </div>
        <div class="flashcard-back">
          <span class="flashcard-tag">${card.tag}</span>
          <p class="flashcard-def">${card.def}</p>
        </div>
      </div>
    `;
    el.addEventListener("click", () => {
      const wasFlipped = el.classList.contains("flipped");
      el.classList.toggle("flipped");
      if (!wasFlipped) {
        state.cardsReviewed++;
        updateStats();
        updateProgress();
        saveState();
      }
    });
    grid.appendChild(el);
  });
}

function bindFlashcardFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.filterActive = btn.dataset.filter;
      renderFlashcards(state.filterActive);
    });
  });
}

// ── TEÓRICOS ───────────────────────────────────────────────────────────────────

function renderTeorists() {
  const grid = document.getElementById("teoristas-grid");
  grid.innerHTML = "";
  TEORISTAS.forEach((t, idx) => {
    const initials = t.nome.split(" ").map(w => w[0]).slice(0, 2).join("");
    const el = document.createElement("div");
    el.className = "teorista-card";
    el.innerHTML = `
      <div class="teorista-initials" style="background:${t.cor}">${initials}</div>
      <div class="teorista-name">${t.nome}</div>
      <div class="teorista-years">${t.anos}</div>
      <span class="teorista-tag">${t.tag}</span>
      <p class="teorista-excerpt">${t.excerpt}</p>
    `;
    el.addEventListener("click", () => openModal(idx));
    grid.appendChild(el);
  });

  // Modal close
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target === document.getElementById("modal-overlay")) closeModal();
  });
}

function openModal(idx) {
  const t = TEORISTAS[idx];
  const initials = t.nome.split(" ").map(w => w[0]).slice(0, 2).join("");

  const contribList = t.contribuicoes.map(c => `<li>${c}</li>`).join("");
  const obrasList   = t.obras.map(o => `<li>${o}</li>`).join("");

  document.getElementById("modal-body").innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px">
      <div class="teorista-initials" style="background:${t.cor};width:64px;height:64px;font-size:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-display);font-weight:700;flex-shrink:0">${initials}</div>
      <div>
        <h2>${t.nome}</h2>
        <div class="modal-years">${t.anos}</div>
        <span class="modal-tag">${t.tag}</span>
      </div>
    </div>
    <p>${t.bio}</p>
    <h4>Principais Contribuições</h4>
    <ul>${contribList}</ul>
    <br>
    <h4>Obras de Referência</h4>
    <ul>${obrasList}</ul>
  `;

  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ── QUIZ ───────────────────────────────────────────────────────────────────────

function bindQuiz() {
  document.getElementById("start-quiz-btn").addEventListener("click", startQuiz);
  document.getElementById("next-btn").addEventListener("click", nextQuestion);
  document.getElementById("restart-quiz-btn").addEventListener("click", restartQuiz);
}

function startQuiz() {
  state.quiz.shuffled = shuffle([...QUIZ_QUESTIONS]);
  state.quiz.questionIndex = 0;
  state.quiz.score = 0;
  state.quiz.answered = false;

  document.getElementById("quiz-start").style.display = "none";
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-play").style.display = "block";

  renderQuestion();
}

function renderQuestion() {
  const q = state.quiz.shuffled[state.quiz.questionIndex];
  const total = state.quiz.shuffled.length;
  const idx   = state.quiz.questionIndex;

  document.getElementById("quiz-progress-label").textContent = `Pergunta ${idx + 1} / ${total}`;
  document.getElementById("quiz-score-label").textContent   = `Pontos: ${state.quiz.score}`;
  document.getElementById("quiz-progress-fill").style.width = ((idx / total) * 100) + "%";
  document.getElementById("question-text").textContent = q.q;
  document.getElementById("next-btn").style.display = "none";
  state.quiz.answered = false;

  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";
  q.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectOption(i, q.ans, btn));
    grid.appendChild(btn);
  });
}

function selectOption(selected, correct, btn) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;

  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.disabled = true);

  if (selected === correct) {
    btn.classList.add("correct");
    state.quiz.score++;
  } else {
    btn.classList.add("wrong");
    allBtns[correct].classList.add("correct");
  }

  document.getElementById("quiz-score-label").textContent = `Pontos: ${state.quiz.score}`;
  document.getElementById("next-btn").style.display = "inline-flex";
}

function nextQuestion() {
  state.quiz.questionIndex++;
  if (state.quiz.questionIndex >= state.quiz.shuffled.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function finishQuiz() {
  const score = state.quiz.score;
  const total = state.quiz.shuffled.length;

  document.getElementById("quiz-play").style.display = "none";
  document.getElementById("quiz-result").style.display = "block";

  const pct = Math.round((score / total) * 100);
  let title, msg;
  if (pct >= 90)      { title = "Excelente!";   msg = "Você domina muito bem os conteúdos de psicologia. Continue assim!"; }
  else if (pct >= 70) { title = "Muito bem!";    msg = "Ótimo desempenho! Revise os pontos onde errou para aperfeiçoar."; }
  else if (pct >= 50) { title = "Bom esforço!";  msg = "Você está no caminho certo. Use os flashcards para reforçar."; }
  else                { title = "Continue estudando!"; msg = "Não desanime! Revise os teóricos e flashcards antes de tentar novamente."; }

  document.getElementById("result-title").textContent = title;
  document.getElementById("result-score").textContent = `${score}/${total}`;
  document.getElementById("result-message").textContent = msg;

  state.quizzesDone++;
  if (state.bestScore === null || score > state.bestScore) state.bestScore = score;
  updateStats();
  updateProgress();
  saveState();
}

function restartQuiz() {
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-start").style.display = "block";
}

// ── NOTAS ──────────────────────────────────────────────────────────────────────

function bindNotes() {
  document.getElementById("save-note-btn").addEventListener("click", saveNote);
}

function saveNote() {
  const title   = document.getElementById("note-title").value.trim();
  const content = document.getElementById("note-content").value.trim();
  const cat     = document.getElementById("note-category").value;

  if (!title || !content) {
    alert("Preencha o título e o conteúdo da anotação.");
    return;
  }

  const note = {
    id:      Date.now(),
    title,
    content,
    cat,
    date:    new Date().toLocaleDateString("pt-BR"),
  };

  state.notes.unshift(note);
  document.getElementById("note-title").value   = "";
  document.getElementById("note-content").value = "";
  renderNotes();
  updateStats();
  saveState();
}

function renderNotes() {
  const list = document.getElementById("notes-list");
  list.innerHTML = "";

  if (state.notes.length === 0) {
    list.innerHTML = `<p style="color:var(--text-muted);font-size:14px;text-align:center;padding:32px">Nenhuma anotação ainda. Crie a primeira!</p>`;
    return;
  }

  state.notes.forEach(note => {
    const el = document.createElement("div");
    el.className = "note-item";
    el.innerHTML = `
      <div class="note-item-body">
        <div class="note-item-title">${escapeHtml(note.title)}</div>
        <div class="note-item-content">${escapeHtml(note.content)}</div>
        <div class="note-item-meta">
          <span class="note-item-cat">${note.cat}</span>
          <span class="note-item-date">${note.date}</span>
        </div>
      </div>
      <button class="note-delete-btn" data-id="${note.id}" title="Excluir">✕</button>
    `;
    el.querySelector(".note-delete-btn").addEventListener("click", () => deleteNote(note.id));
    list.appendChild(el);
  });
}

function deleteNote(id) {
  if (!confirm("Excluir esta anotação?")) return;
  state.notes = state.notes.filter(n => n.id !== id);
  renderNotes();
  updateStats();
  saveState();
}

// ── UTILITÁRIOS ────────────────────────────────────────────────────────────────

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}