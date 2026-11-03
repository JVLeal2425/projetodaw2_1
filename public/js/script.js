// script.js - Funcionalidades de Acessibilidade, Autenticação e Interatividade

// 1. Controle de Tamanho da Fonte (Acessibilidade)
let fontScale = 100;

const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');

if (btnIncrease && btnDecrease && btnReset) {
  btnIncrease.addEventListener('click', () => {
    if (fontScale < 140) {
      fontScale += 10;
      document.documentElement.style.fontSize = `${fontScale}%`;
    }
  });

  btnDecrease.addEventListener('click', () => {
    if (fontScale > 80) {
      fontScale -= 10;
      document.documentElement.style.fontSize = `${fontScale}%`;
    }
  });

  btnReset.addEventListener('click', () => {
    fontScale = 100;
    document.documentElement.style.fontSize = '100%';
  });
}

// 2. Sistema de Autenticação (Login / Cadastro)
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const paneLogin = document.getElementById('pane-login');
const paneRegister = document.getElementById('pane-register');
const authFeedback = document.getElementById('auth-feedback');
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const userDisplay = document.getElementById('user-display');
const navLoginLink = document.getElementById('nav-login-link');

// Troca de abas entre Login e Cadastro
if (tabLogin && tabRegister) {
  tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabLogin.setAttribute('aria-selected', 'true');
    tabRegister.classList.remove('active');
    tabRegister.setAttribute('aria-selected', 'false');
    
    paneLogin.style.display = 'block';
    paneRegister.style.display = 'none';
    if(authFeedback) authFeedback.className = 'auth-feedback';
  });

  tabRegister.addEventListener('click', () => {
    tabRegister.classList.add('active');
    tabRegister.setAttribute('aria-selected', 'true');
    tabLogin.classList.remove('active');
    tabLogin.setAttribute('aria-selected', 'false');
    
    paneRegister.style.display = 'block';
    paneLogin.style.display = 'none';
    if(authFeedback) authFeedback.className = 'auth-feedback';
  });
}

// Persistência e exibição de usuário logado
function checkSession() {
  const loggedUser = localStorage.getItem('logged_user');
  if (loggedUser) {
    const user = JSON.parse(loggedUser);
    if (userDisplay) {
      userDisplay.textContent = `👤 ${user.name}`;
      userDisplay.style.display = 'inline-block';
    }
    if (navLoginLink) {
      navLoginLink.textContent = 'Sair';
      navLoginLink.href = '#';
      navLoginLink.onclick = (e) => {
        e.preventDefault();
        localStorage.removeItem('logged_user');
        window.location.reload();
      };
    }
  }
}
checkSession();

// Processar Cadastro
if (formRegister) {
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;

    if (name && email && password) {
      const users = JSON.parse(localStorage.getItem('users_db') || '[]');
      const exists = users.find(u => u.email === email);

      if (exists) {
        authFeedback.textContent = 'Erro: Este e-mail já está cadastrado.';
        authFeedback.className = 'auth-feedback error';
      } else {
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users_db', JSON.stringify(users));
        localStorage.setItem('logged_user', JSON.stringify(newUser));

        authFeedback.textContent = 'Cadastro realizado com sucesso! Redirecionando...';
        authFeedback.className = 'auth-feedback success';

        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }
    }
  });
}

// Processar Login
if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users_db') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('logged_user', JSON.stringify(user));
      authFeedback.textContent = 'Login efetuado com sucesso! Redirecionando...';
      authFeedback.className = 'auth-feedback success';

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    } else {
      authFeedback.textContent = 'Erro: E-mail ou senha incorretos.';
      authFeedback.className = 'auth-feedback error';
    }
  });
}

// 3. Botão de Favoritar Jogo
const btnFavorite = document.getElementById('btn-favorite');
if (btnFavorite) {
  btnFavorite.addEventListener('click', () => {
    const isFavorited = btnFavorite.getAttribute('data-fav') === 'true';
    if (isFavorited) {
      btnFavorite.setAttribute('data-fav', 'false');
      btnFavorite.textContent = '❤️ Favoritar Jogo';
      btnFavorite.style.background = 'var(--accent-purple)';
    } else {
      btnFavorite.setAttribute('data-fav', 'true');
      btnFavorite.textContent = '💖 Jogo Favoritado!';
      btnFavorite.style.background = 'var(--accent-blue)';
    }
  });
}

// 4. Form de Avaliação de Jogo
const formEval = document.getElementById('form-evaluation');
const evalFeedback = document.getElementById('eval-feedback');

if (formEval && evalFeedback) {
  formEval.addEventListener('submit', (e) => {
    e.preventDefault();
    const ratingInput = document.getElementById('user-rating');
    const val = parseFloat(ratingInput.value);

    if (!isNaN(val) && val >= 0 && val <= 10) {
      evalFeedback.textContent = `Sua avaliação (${val}/10) foi registrada com sucesso!`;
      ratingInput.value = '';
    } else {
      evalFeedback.textContent = 'Por favor, insira uma nota válida entre 0 e 10.';
    }
  });
}

// 5. Filtro dinâmico na página de jogos
const btnFilter = document.getElementById('btn-filter');
if (btnFilter) {
  btnFilter.addEventListener('click', () => {
    const textFilter = document.getElementById('filter-text').value.toLowerCase();
    const genreFilter = document.getElementById('filter-genre').value.toLowerCase();
    const cards = document.querySelectorAll('#catalog-grid .game-card');

    cards.forEach(card => {
      const cardText = card.innerText.toLowerCase();
      const matchesText = !textFilter || cardText.includes(textFilter);
      const matchesGenre = !genreFilter || cardText.includes(genreFilter);

      if (matchesText && matchesGenre) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
