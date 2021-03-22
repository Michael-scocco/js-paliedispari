// console.log('hello');
// REPO: js-paliedispari
// GOAL:

// Una funzione per capire se la parola è palindroma

// se l'utente inserisce una parola, la funzione capisce se è palindroma o meno;


var parolaUtente = prompt('dammi una parola palindroma');

function controllaParola(parolaUtente) {

    var parolaData = parolaUtente.length;// conto la lunghezza dei caratteri della parola
    console.log(parolaUtente + ' la parola è formata da numero caratteri ' + parolaData);

    var parolaRisulta = Math.floor(parolaData / 2);//divido la parola in due, metto il floor perchè voglio una divisione senza virgola
    console.log('la parola una volta divisa risulta ' + parolaRisulta);

    for (var i = 0; i < parolaRisulta; i++) {

        if (parolaUtente.charAt(i) !== parolaUtente.charAt(parolaData - 1 - i) ) {
            return false;
        }
    }
    return true;
}
var risultaVero = controllaParola(parolaUtente);
console.log(risultaVero);

// _____________________________________________________________________________

// esercizio n°2
// L'utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// stabiliamo se la somma dei due numeri è pari o dispari. Sommiamo i due numeri e dichiariamo chi ha vinto.


var sceltaUtente = prompt('cosa scegli');
console.log('l\'utente ha scelto ' + sceltaUtente);

function generaNumeriCasuali(min, max) {

    var valoreMin = min;
    var valoreMax = max - valoreMin +1;

    var numeroCasuale = Math.floor(Math.random() *valoreMax ) + 1;

    return numeroCasuale;
}

function giocoPariDispari(sceltaUtente) {

    var numeroCasualeGiocatore = generaNumeriCasuali(1, 5)
    console.log('numero giocatore ' + numeroCasualeGiocatore);

    var numeroCasualePc = generaNumeriCasuali(1, 5)
    console.log('numero pc ' + numeroCasualePc);

    var somma = numeroCasualeGiocatore + numeroCasualePc;
    console.log('il numero del giocatore ' + numeroCasualeGiocatore +
    ' + ' + numeroCasualePc + ' il numero del pc, è = ' + somma);


    var risultato;

    if (somma % 2 == 0 && sceltaUtente === 'pari') {
        risultato = true;
        console.log(risultato + ' il numero è pari l\'utente ha vinto ha scelto ' + sceltaUtente);
    }else if (somma % 2 == 1 && sceltaUtente === 'dispari') {
        risultato = true;
        console.log(risultato + ' il numero è dispari l\'utente ha vinto ha scelto ' + sceltaUtente);
    }else if (sceltaUtente === somma % 2 == 1) {
        risultato = false;
        console.log(risultato + ' l\'utente ha perso ha ha scelto dispari');
    }else {
        risultato = false;
        console.log(risultato + ' l\'utente ha perso ha scelto pari');
    }

return risultato;
}

var risultato = giocoPariDispari(sceltaUtente)
console.log(risultato);
// _____________________________________esercizi per casa parola palindroma-->
