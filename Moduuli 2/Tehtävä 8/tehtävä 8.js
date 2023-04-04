let array = ["Johnny", "DeeDee", "Joey", "Marky"]
let result = '';

  function concat(array){
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
    }
}
concat(array);
document.querySelector('#vastaus').innerHTML = result;
console.log(result);