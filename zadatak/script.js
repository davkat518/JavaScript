function racunaj(prviBroj,drugiBroj){
//    var prviBroj = prompt("unesi prvi broj:");
//   var drugiBroj= prompt("unesi drugi broj:");
//    var treciBroj= prompt("unesi treci broj:");
treciBroj = 5;
    var prvi= parseFloat(prviBroj);
    var drugi= parseFloat (drugiBroj);
    var treci= parseFloat (treciBroj);
  var zbir = (prvi + drugi)* treci;
  return zbir;
}


var rezultat = racunaj(4,6); 
alert("Rezultat je "+rezultat);

//var prozor;
//
//function zatvori() {
//     prozor=window.close();
//    
//    }

 function otvori() {
     window.open("Reklama.html", "_blank", "width=320,height=250");
//     setTimeout('zatvori()', 6000);

    }


