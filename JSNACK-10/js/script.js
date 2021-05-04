/* Esercizio (array, oggetti, filter)
Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
[
	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi. */


/* 1) Crea un array di oggetti che rappresentano degli animali */

$(document).ready(function(){

  const arrAnimali = [
    {
      nome: "leone", 
      famiglia: "felidi", 
      classe: "mammiferi"
    },
    
    {
        nome: "yak", 
        famiglia: "bovindi", 
        classe: "mammiferi"
    },

    {
      nome: "squalo", 
      famiglia: "pesci", 
      classe: "oviparo"
    },

    {
      nome: "arpia", 
      famiglia: "rapace", 
      classe: "oviparo"
    },

    {
      nome: "capibara", 
      famiglia: "roditore", 
      classe: "mammifero"
    },

  ]

/* 2) escludo tutti gli animali a parte i mammiferi e li inserisco nel nuovo array mammiferi */
   const arrMammiferi = arrAnimali.filter((animale) => animale.classe === 'mammiferi');

/* 3) stampo il nuovo arrayMammiferi */

/* stampo a video il nuovo array */
    console.log(arrMammiferi);

})

