const participants_amount = parseInt(prompt("How many participants?"))
const participants_list = []

for (i = 0; participants_amount > i; i++){
  var participant = prompt("Give the name of participant number " + (i+1))
  participants_list.push(participant)
}

for (let i = 0; i < participants_list.length; i++) {
        participants_list.sort();
        document.querySelector('#osallistujat').insertAdjacentHTML("beforebegin", "<li>" + participants_list[i] + "</li>");
        console.log(`Name: ${participants_list[i]}`);
    }