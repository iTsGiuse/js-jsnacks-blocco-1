/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti. */

/* CREAZIONE ARRAY */
const numbers = [];

/* DICHIARAZIONE VARIABILE SOMMA */
let sum = 0;

/* CREAZIONE CICLO */
for (let i = 0; i < 5; i++) {

    /* INSERIMENTO NUMERI FROM INPUT */
    let number = parseInt(prompt('inserisci un numero'));
    console.log(number);

    /* FAI LA SOMMA DEI NUMERI INSERITI */
    sum = sum + number;
    console.log(sum);
}

/* MOSTRA SOMMA IN CONSOLE */
console.log('La somma è' + ' ' + sum);