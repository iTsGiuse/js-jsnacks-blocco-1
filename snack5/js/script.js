/* - Dato un array contenente 10 numeri, stampare in console il numero più grande. */

/* CREAZIONE ARRAY */
const numbers = [];
let max = 0;

/* CICLO */
for (let i = 0; i < 10; i++ ) {

    /* INSERISCI I NUMERI */
    let number = parseInt(prompt('Inserisci un numero'));
    console.log('il numero inserito è' + '  ' + number);

    /* INSERISCI I NUMERI NELL'ARRAY */
    numbers.push(number);
    console.log(numbers);
    
}

    /* IL NUMERO PIù GRANDE */ 
    max = Math.max(...numbers);
    console.log('il numero inserito più grande è' + '  ' + max);
