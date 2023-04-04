function heitäNoppaa(){
  while (nopanHeitto != 6){
    var nopanHeitto = Math.floor(Math.random() *6) + 1;
    document.querySelector('#heitot').insertAdjacentHTML("beforebegin", "<li>" + nopanHeitto + "</li>");
}
}
heitäNoppaa();
document.querySelector('#vastaus').innerHTML = 'Heitetyt nopat: '
