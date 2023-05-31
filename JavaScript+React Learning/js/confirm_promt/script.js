alert("hello");

const result = confirm("Are you here");
console.log(result);

const answer = prompt("How old are you?", "18"); //always string
console.log(answer);


const answers = [];

answers[0] = prompt("How old are you?", "");
answers[1] = prompt("What is your name?", "");
answers[2] = prompt("How are you?", "");


document.write(answers);
 