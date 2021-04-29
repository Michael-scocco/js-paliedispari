/*
Palidroma:
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Se non sappiamo cos'é una parola palindroma Googliamo!
*/

/************************************************
// 1. Chiedere all’utente di inserire una parola*
************************************************/
    // var parolaUtente = prompt('vediamo se è palindroma');

/*
// 1.1 facciamo in modo che qualunque parola sia sempre in minuscolo
    parolaUtente = parolaUtente.toLowerCase();
    console.log(parolaUtente);

// 1.2 adesso devo separare ogni carattere e creare un nuovo array
// Separare ogni carattere,
// questo si ottiene inserendo i doppi apici dentro la parentesi di split
var parolaDivisa = parola.split('');
console.log(parolaDivisa);

// 2. Creare una funzione per capire se la parola inserita è palindroma
// 2.1 per prima cosa controllo con il metodo reverse, cioè rovescia un array,
//     se la parola corrisponde
 parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);


// dopo di che riconverto la parola in una stringa, con la funzione join,
// ma sempre mettendo gli apici al suo interno.

// Se dentro le tonde mettessi (e),
// le parole all'interno dell'array saranno separate dalla parole e.

// Se invece nelle ()lascio vuoto,
// le parole dell'array saranno separate in automatico da una virgola

var parolaInvertita = parolaDivisa.join('');
console.log(parolaInvertita);

// quindi ora non devo fare altro che confrontare la parola dell'utente
// con la parola invertita, data dalla funzione join.

if(parolaUtente == parolaInvertita){
  console.log('la parola è palindroma');

} else {
  console.log('la parola non è palindroma');
}
*/

/*****************************
// VERSIONE 1 metodi separati*
*****************************/
/*
function parolaPalindroma1(inserisciParola){

    inserisciParola = inserisciParola.toLowerCase();

    var parolaDivisa = inserisciParola.split('');
    parolaDivisa = parolaDivisa.reverse();

    var parolaInvertita = parolaDivisa.join('');
    console.log(inserisciParola, parolaDivisa, parolaInvertita);

    if (parolaInvertita == inserisciParola) {
        return 'questa parola è palindroma';
    }
    return 'non è palindroma';
}

// var palindroma = parolaPalindroma(parolaUtente);
// console.log(palindroma);
*/

/******************************
// VERSIONE 2 metodi COMPRESSI*
******************************/

/*
function parolaPalindroma2(inserisciParola){

    var verifica = inserisciParola.toLowerCase().split('').reverse().join('');

    var risultato = '';
    if (verifica != inserisciParola) {
        risultato = 'non è palindroma';

    }else {
        risultato = 'questa parola è palindroma';

    }
return risultato;
}
// var palindroma = parolaPalindroma2(parolaUtente);
// console.log(palindroma);
*/


/***************************
//  VERSIONE 3 versione FOR*
***************************/

/*
function parolaPalindroma3(parolaUtente) {

    // devo fare un ciclo che rovescia la parola, quindi un for inverso.
    var parola = '';//inizializzo la variabile per concatenare i caratteri

    for (var i = parolaUtente.length - 1; i >= 0; i--) {
        var singoloCarattere = parolaUtente[i]

        // devo salvare questa parola in una variabile, la devo concatenare dentro
        parola += singoloCarattere;
        console.log(`lettera che viene concatenata ${parola}, ${singoloCarattere} questo è il singolo carattere`);

    }
    // adesso ke ho concatenato e salvato la parola in una stringa, posso confrontarla
    if (parola === parolaUtente) {
        parola = ' è palindroma';

    }else {
        parola = ' non è palindroma';
    }
 return 'risultato ' + parola;
}

var palindromaFor = parolaPalindroma3(parolaUtente);
console.log(palindromaFor);
*/

/*****************************
//  VERSIONE 4 versione while*
*****************************/

/*
function parolaPalindroma4(parolaUtente) {

    var i = parolaUtente.length - 1;

    var parola = '';

    while (i >= 0) {

        var singoloCarattere = parolaUtente[i];

        parola += singoloCarattere;
        console.log(`lettera che viene concatenata ${parola}, ${singoloCarattere} questo è il singolo carattere`);

        i--;
    }//while

    // adesso ke ho concatenato e salvato la parola in una stringa, posso confrontarla
    if (parola === parolaUtente) {
        parola = ' è palindroma';

    }else {
        parola = ' non è palindroma';
    }
return 'risultato ' + parola;
}//parolaPalindroma4

var palindromaWhile = parolaPalindroma4(parolaUtente);
console.log(palindromaWhile);
*/

/*
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Se non sappiamo cos'é una parola palindroma Googliamo!
*/

// 1. L’utente sceglie pari o dispari
var sceltaUtente = prompt('pari o dispari');

// 1.1 Inserisce un numero da 1 a 5
var numeroUtente = Number(prompt('dammi un numero tra 1 e 5'));
console.log(numeroUtente, sceltaUtente);

// 2.0 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function generatoreRandom(min, max) {

    return Math.floor(Math.random()* (max - min + 1) + min);

}
var randomPc = generatoreRandom(1, 5);
console.log(randomPc);

// 3.0 Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

var sum = numeroUtente + randomPc;
console.log('questa è la somma ' + sum);
/*
function PariDispari(numeroUtente, randomPc) {

    var sum = numeroUtente + randomPc;
    console.log('questa è la somma ' + sum);

    var risultato = '';

    if (sum % 2 == 0) {
        risultato = ' pari';
        // console.log(risultato);
    }else {
        risultato = ' dispari';
        // console.log(risultato);
    }

return risultato;
}
var risultato = PariDispari(numeroUtente, randomPc);
console.log(risultato);
*/
// 4.0 Dichiariamo chi ha vinto.
var vince = '';

if (sum % 2 == 0 && sceltaUtente === 'pari') {
    vince = `ha vinto il player con il risultato pari ed il numero che ha scelto era ${numeroUtente}`;

}else if (sum % 2 == 1 && sceltaUtente === 'dispari') {
    vince = `ha vinto il player con il risultato dispari ed il numero che ha scelto era ${numeroUtente}`;

}else if (sceltaUtente === 'dispari' && sum % 2 == 0 ) {
    vince = `ha vinto il pc con il risultato pari ed il numero era ${randomPc}`;

}else if (sceltaUtente === 'pari' && sum % 2 == 1) {
    vince = `ha vinto il pc con il risultato dispari ed il numero era ${randomPc}`;
}
console.log(vince);
