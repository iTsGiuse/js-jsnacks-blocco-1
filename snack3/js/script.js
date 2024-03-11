/* Crea un array vuoto.
  Chiedi per 6 volte all’utente di inserire un numero,
  se è dispari inseriscilo nell’array. */

/* CREAZIONE ARRAY */
const dispari = [];

/* CREAZIONE CICLO */
for (let i = 0; i < 6; i++) {

        /* INSERIMENTO NUMERI FROM INPUT */
        let number = parseInt(prompt('inserisci un numero'));
        console.log(number);
    
        /* VERIFICA SE IL NUMERO E' DISPARI E AGGIUNGILO NELL'ARRAY */
        if (number % 2 !== 0) {
            dispari.push(number);
        }

}

/* MOSTRA ARRAY DISPARI IN CONSOLE */
console.log(dispari);