// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
//  Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti;

// definisco e inizializzo contatori
var reds = 0;
var greens = 0;


$(".square").click(function() {                                                    //seleziono tutti i quadrati che risponderanno al click eseguendo la funzione
   if ($( this ).hasClass("score")) {                                              //se il quadrato clickato avrà classe "score" allora gli verrà aggiunta la classe "red" e diventerà rosso
     $(this).addClass("red");
     reds++;                                                                       //incremento il contatore di uno
     console.log(reds);
     document.getElementById("red-score").innerHTML = reds;                        //visualizzo contatore
   } else {                                                                        //se il quadrato non presenta la classe "score" allora apparirà verde
     $(this).addClass("green");
     greens++;                                                                     //incremento il contatore di uno
     document.getElementById("green-score").innerHTML = greens;                    //visualizzo contatore
   }
});
