/* - Dato un array contenente 10 numeri, stampare in console il numero più grande. */

/* CREAZIONE ARRAY */
const numbers = [];
let max = 0;

let min = 0;

/* CICLO */
for (let i = 0; i < 3; i++ ) {

    /* INSERISCI I NUMERI */
    let number = parseInt(prompt('Inserisci un numero'));
    console.log('il numero inserito è' + '  ' + number);

    /* INSERISCI I NUMERI NELL'ARRAY */
    numbers.push(number);
    console.log(numbers);
    
    /* METODO ALTERNATIVO PER TROVARE IL MAX */
    if (min < numbers[i]) {
        min = numbers[i];
    }

}

/* IL NUMERO PIù GRANDE */ 
max = Math.max(...numbers);
console.log('il numero inserito più grande è' + '  ' + max);

/* METODO ALTERNATIVO PER TROVARE IL MAX */
console.log('il numero MAX (secondo metodo) è ' + min);