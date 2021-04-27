/* creo un array di 10 oggetti zucchine */

var zucchina = [
  {
    lunghezza:2,
    peso: 1,
  },

  {
    lunghezza:3,
    peso: 2,
  },

  {
    lunghezza:4,
    peso: 3,
  },

  {
    lunghezza:5,
    peso: 4,
  },

  {
    lunghezza:6,
    peso: 5,
  },

  {
    lunghezza:7,
    peso: 6,
  },

  {
    lunghezza:8,
    peso: 7,
  },

  {
    lunghezza:9,
    peso: 8,
  },
   
  {
    lunghezza:16,
    peso: 1,
  },

  {
    lunghezza:20,
    peso: 2,
  },

];

/* creo due variabili array vuoti che conterrano le zucchine con lunchezza > o < di 15 */

var lilZuck = [];

var bigZuck = [];

for(i= 0; i<zucchina.length; i++ ){
  if(zucchina[i].lunghezza < 15){
    lilZuck.push(zucchina[i]);
}else{
  bigZuck.push(zucchina[i]);
}};

console.log(bigZuck);
console.log(lilZuck);


