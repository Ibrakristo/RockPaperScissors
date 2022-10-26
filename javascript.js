function getComputerChoice(){
let x = Math.random()*3;
x = Math.floor(x);
if  (x==0){
    return "rock";
}
else if(x==1){
    return "paper";
}
else{
    return "scissors";
}
}
function playround(playerSelection, computerSelection){
if(playerSelection.toLowerCase() == "rock"){
    if(computerSelection =="paper"){
        return "You Lose! Paper beats Rock!";
    }
    if(computerSelection =="scissors"){
        return "You Win! Rock beats scissors!";
    }
    if(computerSelection =="rock"){
        return "Draw!";
    }
}
else if(playerSelection.toLowerCase() =="paper"){
    if(computerSelection =="paper"){
        return "Draw!";
    }
    if(computerSelection =="scissors"){
        return "You Lose! Scissors beats Paper!";
    }
    if(computerSelection =="rock"){
        return "You Win! Paper beats Rock!";
    }
}

else{
    if(computerSelection =="paper"){
        return "You Win! Scissors beats Paper!";
    }
    if(computerSelection =="scissors"){
        return "Draw!";
    }
    if(computerSelection =="rock"){
        return "You Lose! Rock beats Scissors";
    }
}
}

function game(){
    let pscore = 0;
    let cscore = 0;
    for(let i = 0;i<5;i++){
        let playerSelection = prompt("Your Choice :");
        let computerSelection = getComputerChoice();
        let result = playround(playerSelection, computerSelection);
        //console.log(result);
        if(result.includes("Win")) pscore++;
        else cscore++;
    }
    if(pscore>cscore) console.log("YOU WON!");
    else if(pscore == cscore) console.log("DRAW!");
    else console.log("YOU LOSE!");
}
game();