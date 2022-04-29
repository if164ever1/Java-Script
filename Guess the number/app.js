const secretNumber = Math.ceil(Mayh.random() * 11);
let tries = 0;


function guessNum(number){
    if(tries < 5){
        if(number === secretNumber){
            alert("You are guess this number");
        } else {
             alert("Oh, wrong. Try again!")
             tries++; 
        }
    }else return alert("You are lose")
}
