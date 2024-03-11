/* Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati 
(inserire il numero nell'array solo se non è già presente). */

/* CREAZIONE ARRAY */
const numbers = [];

/* CREAZIONE CICLO */
for (let i = 0; i < 5; i++) {

    /* INSERIMENTO NUMERI FROM INPUT */
    let number = parseInt(prompt('inserisci un numero'));
    console.log(number);

    /* VERIFICA SE IL NUMERO è GIA PRESENTE NEL DATABASE */
    if (numbers.includes(number) === false)  {
        numbers.push(number);
    }
}

/* MOSTRA ARRAY IN CONSOLE */
console.log(numbers);