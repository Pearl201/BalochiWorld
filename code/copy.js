  let copyMsgTimeout = null;

  async function copy() {
    const saisieField = document.getElementById('bar');
    const message = document.getElementById('copymes');
    if (!saisieField || !message) return;

    const text = saisieField.value;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback
        saisieField.select();
        saisieField.setSelectionRange(0, 99999);
        document.execCommand('copy');
        // Optionnel: restaurer la sélection
        saisieField.setSelectionRange(text.length, text.length);
        saisieField.blur();
      }

      // Message “copié”
      message.classList.add('visible');
      if (copyMsgTimeout) clearTimeout(copyMsgTimeout);
      copyMsgTimeout = setTimeout(() => {
        message.classList.remove('visible');
      }, 2000);

    } catch(e) {
      console.error('Copy failed:', e);
    }
  }
	
	
 function copy1() {
      const saisieField = document.getElementById('bar1');
      saisieField.select();
      saisieField.setSelectionRange(0, 99999); // compatibilité mobile
      document.execCommand("copy");

      const message = document.getElementById("copymes");
      message.classList.add("visible");

      // Retirer le message après 2 secondes
      clearTimeout(message.dataset.timeoutId); // efface l'ancien timer si besoin
      const timeoutId = setTimeout(() => {
        message.classList.remove("visible");
      }, 2000);

      message.dataset.timeoutId = timeoutId;
    }


 function copy2() {
      const saisieField = document.getElementById('bar2');
      saisieField.select();
      saisieField.setSelectionRange(0, 99999); // compatibilité mobile
      document.execCommand("copy");

      const message = document.getElementById("copymes");
      message.classList.add("visible");

      // Retirer le message après 2 secondes
      clearTimeout(message.dataset.timeoutId); // efface l'ancien timer si besoin
      const timeoutId = setTimeout(() => {
        message.classList.remove("visible");
      }, 2000);

      message.dataset.timeoutId = timeoutId;
    }
	
	
	function reset_bar() {
  document.getElementById('bar').value = '';
}


	function reset_cnv() {
  document.getElementById('bar1').value = '';
  document.getElementById('bar2').value = '';
}

function resetAll() {
  document.getElementById('bar').value = '';
  document.getElementById('recherche').value = '';
  document.getElementById('resultats').innerHTML = '';
  updateIndicator(false, false);
  document.getElementById('recherche').focus();
 }
 
function resetDiac() {
    const bar = document.getElementById('bar');
    if (bar) {
      bar.value = '';
      bar.focus();
    }

    // Ces globals existent sur certaines pages (grec/latin/arabe). On teste avant.
    try { if (typeof selectedLetter !== 'undefined') selectedLetter = null; } catch{}
    try { if (typeof selectedDiacritics !== 'undefined') selectedDiacritics = []; } catch{}
    try { if (typeof clickedTip !== 'undefined') clickedTip = null; } catch{}

    const keys = document.getElementById('diacKeys');
    if (keys) keys.innerHTML = '';

    // Re-render si dispo
    try { if (typeof renderKeyboard === 'function') renderKeyboard(); } catch{}
    try { if (typeof renderDiacriticButtons === 'function') renderDiacriticButtons(); } catch{}
    try { if (typeof setInfo === 'function') setInfo(''); } catch{}
  }
  
  function reset_chi() {
  // Vider le textarea
  const bar = document.getElementById('bar');
  if (bar) bar.value = '';

  // Réinitialiser le select
  const select = document.getElementById('cles');
  if (select) select.selectedIndex = 0; // revient à "choisir une clé"

  // Vider les résultats affichés
  const container = document.getElementById('resultats');
  if (container) container.innerHTML = '';

  // Vider les boutons de filtrage
  const filterContainer = document.getElementById('traitFilter');
  if (filterContainer) filterContainer.innerHTML = '';
}

