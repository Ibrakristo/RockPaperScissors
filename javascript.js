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
if(playerSelection == "rock"){
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
else if(playerSelection =="paper"){
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
function playaround(e){
    if(pscore == 5 || cscore == 5) return;
    const selec = this.classList.value;
    const compChoice = getComputerChoice();
    game(selec,compChoice);
    prscore.innerText=`Player Score is ${pscore}`;
    crscore.innerText=`Computer Score is ${cscore}`;
    drscore.innerText=`Draws: ${dscore}`;
    if(pscore == 5){
        result.innerHTML="PLAYER WON!!!";
        selector.appendChild(reset);
    }
    else if(cscore == 5){
        result.innerHTML="COMPUTER WON!!!";
        selector.appendChild(reset);
    }
}
function game(playerSelection, computerSelection){
    let result = playround(playerSelection, computerSelection);
    if(result.includes("Win")) pscore++;
    else if(result.includes("Lose")) cscore++;
    else dscore++;
}
function restart(e){
    if(pscore<5 && cscore<5) return;
    pscore = 0;
    cscore = 0;
    dscore = 0;
    prscore.innerText=`Player Score is ${pscore}`;
    crscore.innerText=`Computer Score is ${cscore}`;
    drscore.innerText=`Draws: ${dscore}`;
    result.innerHTML ="";
    result.appendChild(prscore);
    result.appendChild(crscore);
    result.appendChild(drscore);
    selector.removeChild(reset);
}
const selector = document.querySelector(".reset");
const reset = document.createElement("button");
const prscore = document.querySelector(".pscore");
const crscore = document.querySelector(".cscore");
const drscore = document.querySelector(".dscore");
const result = document.querySelector(".result");
reset.style.width = "100px";
reset.style.height = "70px";
reset.innerText="RESTART";
reset.style.fontSize="24px";
let pscore = 0;
let cscore = 0;
let dscore = 0;
reset.addEventListener("mousedown",restart);
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=> button.addEventListener("mousedown",playaround));