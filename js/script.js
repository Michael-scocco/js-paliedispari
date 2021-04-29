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






// 1. Chiedere all’utente di inserire una parola
    var parolaUtente = prompt('vediamo se è palindroma');

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

// versione 1 FUNZIONA
/*
function parolaPalindroma(inserisciParola){

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
var palindroma = parolaPalindroma(parolaUtente);
console.log(palindroma);
*/

//  VERSIONE 2 non funziona devo capire il perchè

function parolaPalindroma(inserisciParola){

    inserisciParola = inserisciParola.toLowerCase().split('').reverse().join('');

    var risultato = '';
    if (inserisciParola != inserisciParola) {
        risultato = 'non è palindroma';

    }else {
        risultato = 'questa parola è palindroma';

    }
return risultato;
}





// versione for
// devo fare un ciclo che rovescia la parola, quindi un for inverso.

for (var i = 0; i < parolaUtente.length; i++) {
    parolaUtente[i]
}


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
