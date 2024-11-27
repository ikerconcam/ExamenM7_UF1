// Selecció de llistes
const tasquesPendents = document.getElementById('tasques-pendents');
const tasquesFetes = document.getElementById('tasques-fetes');

// Funció per moure una tasca a la llista corresponent
function moureTasca(event) {
  const tasca = event.target.parentElement; // Selecciona el <li> de la tasca
  const boto = event.target; // Selecciona el botó clicat

  if (boto.classList.contains('mou-feta')) {
    // Mou la tasca a "Fetes"
    tasquesFetes.appendChild(tasca);
    boto.textContent = "Pendent"; // Canvia el text del botó
    boto.classList.replace('mou-feta', 'mou-pendent'); // Actualitza la classe del botó
  } else if (boto.classList.contains('mou-pendent')) {
    // Mou la tasca a "Pendents"
    tasquesPendents.appendChild(tasca);
    boto.textContent = "Fet"; // Canvia el text del botó
    boto.classList.replace('mou-pendent', 'mou-feta'); // Actualitza la classe del botó
  }
}

// Afegir listeners inicials als botons
function inicialitzarListeners() {
  const botons = document.querySelectorAll('button'); // Selecciona tots els botons
  botons.forEach(boto => {
    boto.removeEventListener('click', moureTasca); // Evita duplicar listeners
    boto.addEventListener('click', moureTasca); // Afegeix el listener
  });
}

// Inicialitzar els listeners al carregar la pàgina
inicialitzarListeners();
