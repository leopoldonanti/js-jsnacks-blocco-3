/* 2
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */


var arrayNumery = [];

var nA = prompt("inserisci un numero da 1 a 69");

var nB = prompt("inserisci un numero diverso e inferiore di quello appena inserito");

for(i=0; i<69; i++){
  arrayNumery[i]= i+1;
}

var risultatoFinale = jsnack5(nA, nB, arrayNumery);


function jsnack5(numero_a,numero_b,elencoNumery){
  var arrayFinale = [];
  y=0;

  if(numero_b < numero_a){
    alert("hai inserito dei valori sbagliati. prima il valore piu grande e poi quello piu piccolo.");
  } else if(numero_b==numero_a){
    alert("hai inserito dei valori sbagliati. i due numeri non devono essere uguali.");
  } else if(numero_a == "" || numero_b == ""){
    alert("hai inserito dei valori inesistenti.")
  }else{
    
    for(i=numero_b-1; i<numero_a; i++){
     arrayFinale[y] = elencoNumery[i]
     y++
    } 
  } 
  return(arrayFinale)
} 

console.log(risultatoFinale)

