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

function obrisi(){
        var ime= document.getElementById("ime");
        var prezime= document.getElementById("prezime");
        ime.value="";
        prezime.value="";

}


function ofarbajPozadinu(){
    boja= prompt("Izaberi boju");

    document.body.style.backgroundColor = boja;
}

function stampaj(){
          
          for (var i=0; i<6;){
              if (typeof document.getElementsByClassName("unos")[i] != 'undefined'){
                var a = document.getElementsByClassName("unos")[i].value; 
                console.log(a);
                i++
              }
          }       
      }
//function ispisi() {
//    var a=document.getElementsById[i];
//    var i;
//    for (var i = 0; i < a.length; i++) {
//                text =text + a[i] + ", ";
//            }
////     var a= document.getElementsById[i];
//    console.log(a);
//    }

