//  copyright lexilogos.com

function alfa(item) {
  // Supprimer les U+25CC avant insertion
  const cleanChar = item.replace(/\u25CC/g, '');
  const input = document.getElementById("bar");
  input.focus();

  // Méthode moderne (navigateurs récents)
  if (typeof input.selectionStart === 'number' && typeof input.selectionEnd === 'number') {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const before = input.value.substring(0, start);
    const after = input.value.substring(end);

    input.value = before + cleanChar + after;

    const newPos = start + cleanChar.length;
    input.selectionStart = input.selectionEnd = newPos;
  }
  // Fallback pour très vieux navigateurs (IE <= 8)
  else if (document.selection) {
    const range = document.selection.createRange();
    range.text = cleanChar;
    range.select();
  }
  // Autre fallback : append à la fin
  else {
    input.value += cleanChar;
  }
}



var car;
function annuler() {
    const input = document.getElementById("bar");
    car = input.value;
    car = car.replace(/\u200b/g, "");
    input.value = car;
}
