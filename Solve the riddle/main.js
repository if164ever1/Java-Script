const riddle = {
    question: "hanging pear but it can not be eaten",
    correctAnswer: "bulb",
    hits: [""],
    tries: 3,
    checkAnswewr(str){
        if(this.tries < 1){
            console.log("The game is end!");
            return alert("The game is end!");
        }
        if(str.toLowerCase().includes(this.correctAnswer)){
            alert("Correct answer");
            console.log("Correct answer");
        }else {
            alert("Ancorrect answer");
            console.log("Ancorrect answer");
            this.tries--;
        }
    },
};


window.onload = function(){
    document.getElementById("riddle").innerText = riddle.question;
};

function check(){
    const input = document.getElementsByTagName('input')[0];
    const guessAnswer = input.value;
    if(guessAnswer){
        riddle.checkAnswewr(guessAnswer);
    }
}