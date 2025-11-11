const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Fonction pour mettre à jour le texte du bouton
function updateButtonLabel(isDark) {
  toggleButton.value = isDark ? 'light mode' : 'dark mode';
}

// Vérifie si un mode est déjà enregistré dans le localStorage
let currentTheme = localStorage.getItem('theme');

if (!currentTheme) {
  // Détection du mode système si aucun mode enregistré
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  currentTheme = prefersDark ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
}

if (currentTheme === 'dark') {
  body.classList.add('dark-theme');
}
updateButtonLabel(currentTheme === 'dark');

toggleButton.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateButtonLabel(isDark);
});
