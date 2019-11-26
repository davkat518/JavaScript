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

var trVreme= setInterval(vreme,1000);
function vreme(){
    
    sada =new Date;

            document.getElementById("vreme").innerHTML=" Trenutno vreme je " + (sada.getHours() < 10? '0' : '')+sada.getHours() + ":" + (sada.getMinutes() < 10? '0' : '')+sada.getMinutes() + ":" + (sada.getSeconds() < 10? '0' : '')+sada.getSeconds();

}
    

 function otvori() {
     window.open("Reklama.html", "_blank", "width=320,height=250");

    }

function obrisi(){
//        var ime= document.getElementById("ime");
//        var prezime= document.getElementById("prezime");
//        ime.value="";
//        prezime.value="";
    var a = document.getElementsByClassName("unos");
    for (var i=0; i<a.length; i++){
                  
                a[i].value="";
                
    }
    

}


function ofarbajPozadinu(){
    boja= prompt("Izaberi boju");

    document.body.style.backgroundColor = boja;
}

function stampaj(){
          var a = document.getElementsByClassName("unos");
          for (var i=0; i<6; i++){
                  
                console.log(a[i].value);
                
              }
                
      }
//function ispisi() {
//    var a=document.getElementsBy[i].value;
//    var i;
//    for (var i = 0; i < a.length; i++) {
//                text =text + a[i] + ", ";
//            }
////     var a= document.getElementsById[i];
//    console.log(a);
//    }

