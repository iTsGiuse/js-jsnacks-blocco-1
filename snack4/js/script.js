/* Calcola la somma e la media dei primi 10 numeri. */
/* DICHIARAZIONI VARIABILI */
let sum = 0;
let media = 0;

/* CICLO */
for (let i = 0; i <= 10; i++ ) {

    /* INSERISCI I NUMERI */
    let number = parseInt(prompt('Inserisci un numero'));
    console.log('il numero inserito è' + '  ' + number);

    /* FAI LA SOMMA PROVVISORIA */ 
    sum = sum + number; 
    console.log('La somma per ora è' + '  ' + sum);

}
/* FAI LA SOMMA*/ 
console.log('La somma è' + '  ' + sum);

/* FAI LA MEDIA */ 
media = sum / 10 ;
console.log('La media è' + '  ' + media);