   function savefr() {
      const texte = document.querySelector('#bar').value;
      const blob = new Blob([texte], { type: 'text/plain;charset=utf-8' });
      const lien = document.createElement('a');
      lien.href = URL.createObjectURL(blob);
      lien.download = 'lexilogos_clavier.txt';
      lien.click();
      URL.revokeObjectURL(lien.href);
    }
	
	   function saveen() {
      const texte = document.querySelector('#bar').value;
      const blob = new Blob([texte], { type: 'text/plain;charset=utf-8' });
      const lien = document.createElement('a');
      lien.href = URL.createObjectURL(blob);
      lien.download = 'lexilogos_keyboard.txt';
      lien.click();
      URL.revokeObjectURL(lien.href);
    }
	
	   function savemorse() {
      const texte = document.querySelector('#bar').value;
      const blob = new Blob([texte], { type: 'text/plain;charset=utf-8' });
      const lien = document.createElement('a');
      lien.href = URL.createObjectURL(blob);
      lien.download = 'lexilogos_clavier.txt';
      lien.click();
      URL.revokeObjectURL(lien.href);
    }
