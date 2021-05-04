$(document).ready(function(){
  // creo array di stringhe
const arrString = ['antonio','LUCA', 'michelE', 'aLeSSaNDRo','sIMONE'];

/* trasferisco le stringe in un nuovo array e le faccio diventare tutte minuscole e richiamo la funzione che rende maiuscola solo la prima lettera */

const arrMinuscolo = arrString.map((string) => {
  let minuscolo = string.toLowerCase();
  return capitalize(minuscolo);
});

console.log(arrMinuscolo)

/* funzione:
in una variabile viene trasferito il primo carattere della stringa e con slice salvo tutti i valori tranne quelli in posizione 1 ovvero la prima lettera, per tanto ritorno la prima lettera maiuscola */

function capitalize(str) {
  let primaLettera = str.charAt(0).toUpperCase();
  let sostituisciStringa = str.slice(1, str.length)
  return primaLettera + sostituisciStringa;
}



})