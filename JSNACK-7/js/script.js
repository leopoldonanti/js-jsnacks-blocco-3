/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

//Creare 2 array di 2 lunghezze diverse
var array_1 = ['a', 'b', 'c', 'd'];
var array_2 = ['e', 'f', 'g', 'h', 'i', 'l'];
//Confrontare le lunghezze
//riempire l'array più corto finchè non raggiunge la lunghezza di quello più lungo
if(array_1.length < array_2.length){
    while(array_1.length<array_2.length){
    array_1.push('a')
    }
}else if(array_2.length<array_1.length){
    while(array_2.length<array_1.length){
        array_2.push('a')
        }
}else{
    alert("I due array sono uguali")
}
console.log(array_1)
console.log(array_2)