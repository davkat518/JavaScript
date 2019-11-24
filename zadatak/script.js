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

 function otvori() {
     window.open("Reklama.html", "_blank", "width=320,height=250");

    }


function ofarbajPozadinu(){
    boja= prompt("Izaberi boju");

    document.body.style.backgroundColor = boja;
}

function ispisi() {
//    for (var i = 0; i < input.length; i++) {
//                text =text + input[i] + ", ";
//            }
     var a= document.getElementsByTagName("input");
    console.log(a);
    }

