/* creo due array di diversa lunghezza */
var arrUno = [
  'a','b','c','d','e','f'
];

var arrDue = [
  1,2,3,4,5
];

/* creo un array vuoto che conterrà gli oggetti dei due array precedenti ma in ordine alternato*/
var arrCombinato = [];


/* creo le condizioni tali per cui se i due array di partenza sono di diversa lunghezza, verranno inseriti in ordine alternato solo gli elementi pari ordinati ovvero: a,1,b,2,c,3,d,4  */
if (arrUno.length === arrDue.length){
   for(i=0; i<arrUno; i++){
     arrCombinato.push(arrUno[i]);
     arrCombinato.push(arrDue[i]);
    }
} else if(arrUno.length<arrDue.length){
   for(i=0; i<arrUno.length; i++){
     arrCombinato.push(arrUno[i]);
     arrCombinato.push(arrDue[i]);
    }
} else if(arrDue.length<arrUno.length){
  for(i=0; i<arrDue.length; i++){
    arrCombinato.push(arrUno[i]);
    arrCombinato.push(arrDue[i]);
   }
}

console.log(arrCombinato)
