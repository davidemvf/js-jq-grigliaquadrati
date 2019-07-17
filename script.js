// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

// definisco e inizializzo contatori
var reds = 0;
var greens = 0;

// tramite jquery:
$(".square").click(function() {                                           //seleziono tutti i quadrati che risponderanno al click eseguendo la funzione
   if ($( this ).hasClass("score")) {                                     //se il quadrato clickato avrà classe "score" allora gli verrà aggiunta la classe "red" e diventerà rosso
     $(this).addClass("red");
   } else {                                                               //se il quadrato non presenta la classe "score" allora apparirà verde
     $(this).addClass("green");
   }
});
