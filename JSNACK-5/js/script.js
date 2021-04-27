/* 
1 Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
la media punti fatti per partita deve essere compresa tra 0 e 50
la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

var team = [
  {
    codice: '',
    media_punti: '',
    percentuale_tiri_bbboni:'',
  },

  {
    codice: '',
    media_punti: '',
    percentuale_tiri_bbboni:'',
  },

  {
    codice: '',
    media_punti: '',
    percentuale_tiri_bbboni:'',
  },

  {
    codice: '',
    media_punti: '',
    percentuale_tiri_bbboni:'',
  },

  {
    codice: '',
    media_punti: '',
    percentuale_tiri_bbboni:'',
  }

];


  /* creo la funzione che genera tre caratteri alfabetici random */
function alfaCode(length) {
  /* creo un array vuoto nel quale verrà inserito il risultato delle lettere sorteggiate randomicamente */
  var result = [];
  /* dichiaro la seguente variabile stringa che stabilisce il range totale delle lettere dell'alfabeto*/
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  /* dichiaro la seguente variabile che corrisponde alla lunghezza totale della variabile precedente  */
  var lettersLength = letters.length;
  /* apro un ciclo for che ad ogni ciclo genera una stringa  */
  for ( var i = 0; i < length; i++ ) {
    result.push(letters.charAt(Math.floor(Math.random() * 
  lettersLength)));
  }
  return result.join('');
}

function numberCode(length) {
  /* creo un array vuoto nel quale verrà inserito il risultato dei numeri sorteggiati randomicamente */
  var result = [];
  /* dichiaro la seguente variabile stringa che stabilisce il range totale dei numeri da 0 a 1*/
  var numbers = '0123456789';
  /* dichiaro la seguente variabile che corrisponde alla lunghezza totale della variabile precedente  */
  var numbersLenght = numbers.length;
  /* apro un ciclo for che ad ogni ciclo genera una stringa random */
  for ( var i = 0; i < length; i++ ) {
    result.push(numbers.charAt(Math.floor(Math.random() * 
  numbersLenght)));
  }
  return result.join('');
}


for(i=0; i<team.length; i++){
  var generator_random_code = numberCode(3)+alfaCode(3);
  team[i].codice = generator_random_code;
  var media = Math.floor(Math.random()*51);
  team[i].media_punti = media;
  var percentualeBonaggine = Math.floor(Math.random()*101);
  team[i].percentuale_tiri_bbboni = percentualeBonaggine;
} 

console.log(team);


