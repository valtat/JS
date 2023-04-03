numbers = [];

number1 = parseInt(prompt("Give the first number: "));
number2 = parseInt(prompt("Give the second number: "));
number3 = parseInt(prompt("Give the third number: "));
number4 = parseInt(prompt("Give the fourth number: "));
number5 = parseInt(prompt("Give the fifth number: "));

numbers.push(number1, number2, number3, number4, number5);

for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}