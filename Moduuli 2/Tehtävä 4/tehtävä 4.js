numerot = [];
numero = parseInt(prompt("Anna numero"))

while (numero != 0){
    if (numero == 0){
        break;
    } else{
        numerot.push(numero)
        numero = parseInt(prompt("Anna numero"))
    }
}

numerot.sort((a, b) => b - a);
console.log(numerot);

