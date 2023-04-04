numerot = [];
numero = parseInt(prompt("Anna numero"));
numero_jo_listassa = false

while (numero_jo_listassa === false){
    if (numerot.includes(numero)){
    numero_jo_listassa = true;
    break;
    } else {
    numerot.push(numero);
    numero = parseInt(prompt("Anna numero"));
    }
}

document.querySelector('#announcement').innerHTML = 'Syöttämäsi luku on jo taulukossa.';
numerot.sort((a, b) => a - b);
console.log(numerot);

