const dogs = [];

for (let i = 0; i < 6; i++){
    var dog_name = prompt("Give a name for a dog. (Total number of dogs is 6.)")
    dogs.push(dog_name)
}

dogs.reverse();

for (let i = 0; i < dogs.length; i++) {
        document.querySelector('#koirat').insertAdjacentHTML("beforebegin", "<li>" + dogs[i] + "</li>");
        console.log(`Name: ${dogs[i]}`);
    }