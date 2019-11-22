alert('Zombi apokalipsa');
alert('Nalazite se u napustenoj prodavnici i pretrazujete okolinu u potrazi za necim korisnim');
alert('U tom trenutku ulazi zombi na vrata!');

var oruzje=prompt('Gledate oko sebe i uocavate tri vrste oruzja. Birajte: sipku, noz ili gumenu patku');

var vrednost=Math.round(Math.random()*5); //*5 daje izbor od 0 zaključno sa 4

if(vrednost===0){
    alert('Zamahujete sa '+oruzje+', ali promasujete');
}else{
    alert('Zamahujete sa '+oruzje+' i pogadjate zombija');
}