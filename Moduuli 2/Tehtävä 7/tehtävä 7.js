let tahkojenMäärä = parseInt(prompt("Kuinka monta tahkoa nopassa on?"))
  function heitäNoppaa(tahkojenMäärä){
      while (nopanHeitto != tahkojenMäärä){
        var nopanHeitto = Math.floor(Math.random() *tahkojenMäärä) + 1;
        document.querySelector('#heitot').insertAdjacentHTML("beforebegin", "<li>" + nopanHeitto + "</li>");
    }
}
heitäNoppaa(tahkojenMäärä);
document.querySelector('#vastaus').innerHTML = 'Heitetyt nopat: '