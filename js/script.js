// console.log('hello');
// REPO: js-paliedispari
// GOAL:

// esercizio n°1 Una funzione per capire se la parola è palindroma

/*l'ersercizio, prevede di creare un button ed un input text, dove il tutto prende vita dal momento in cui attivi il click,
inoltre non si deve creare un array, con parole palindrome all'interno, ma si deve far in modo che il sistema
prende atto che la parola stessa sia palindrama o meno, di conseguenza dato ke la parola è perfettamente identica leggendola al contrario
la si deve dividere in due, e arrotondarla per negativo(es: 3/2 = 1,5 diventa 1), quindi al mio ciclo for, devo dirgli che deve leggere solo metà della parola
da destra a sinistra, e che deve leggere l'latra metà da sinistra verso destra.*/

// tutto questo detto in una funzione (vedere la lezione di oggi per capire ke cazzo è una funzione)

    // step-2, creo il mio prompt(), per chiedere all'utente di inserire una parola.
    // var parolaUtente = prompt('scrivi una parola');

/*    var parolaBnt = document.getElementById('button');
    parolaBnt.addEventListener('click', function() {

    var parolaUtente = document.getElementById('parolaInserita').value//contiene il valore dell'input, delutente inserito

    var lunghezza = parolaUtente.length;

    var esito = verificataPalindrome(parolaUtente);//variabile

    if (esito) {
        console.log('la parola è palindroma se è true');

    }else {
        console.log('la parola non è palindroma se è false');

    }

});

    function verificataPalindrome(parola){//parametro

        var lunghezza;

        var giriLoop = Math.floor(lunghezza / 2);

        var risultato;
        for (var i = 0; i < giriLoop; i++) {

            var primaLettera = parolaUtente[i];
            var ultimaLettera = parolaUtente[parolaUtente.length - 1 - i];

            console.log(primaLettera, ultimaLettera);
            if (primaLettera === ultimaLettera) {
                risultato = true;
            }else {
                risultato = false;
                break;
            }
        }
        console.log(risultato);
        return risultato;
    }*/

// _________________________________________________________________________________

// esercizio n°2 L'utente sceglie pari o dispari e un numero
// da 1 a 5.
    // step-1 creare due prompt, dove chiediamo prima il pari e poi un numero all'utente
    var pariDispari = prompt('dimmi se vuoi il pari o dispari');
    var numero = parseInt(prompt('scegli un numero tra 1 e 5'));
    console.log(pariDispari, numero);

    var sceltaGiocatore = pariDispari + ' ' + numero;

// Generiamo un numero random (sempre da 1 a 5) per il computer.
    // step-2 creiamo una random, ma la facciamo diventare una funzione, cosi da usarla sempre in futuro.

    function generatoreRandom(min, max) {

    var minRnd = min;
    var maxRnd = max - minRnd + 1;

    var random1 = Math.floor(Math.random() * maxRnd) + minRnd;

    return random1;
    }

var risultatoRandom = generatoreRandom(1, 5);
console.log(risultatoRandom +' numero pc');



// stabiliamo se la somma dei due numeri è pari o dispari. Sommiamo i due numeri e dichiariamo chi ha vinto.
    // step-3 se la somma che esce tra l'utente ed il pc è pari o dispari, si deve decidere chi ha vinto in base al prompt della scelta dell'utente.

var somma = numero + risultatoRandom;
console.log(somma);

var x = somma % 2;//variante per il pari e dispari

    if(x == 0){
        console.log('pari' + ' win');

    }else {
        console.log('dispari' + ' win');

    }

var stampaHtml = document.getElementById('pariOdispari');
stampaHtml.innerHTML = somma + ' il vincitore è ' + sceltaGiocatore;
