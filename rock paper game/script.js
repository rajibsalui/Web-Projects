let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");


const genCompChoice=() => {
   const options = ["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};

const playGame=(userChoice) =>{
   console.log("user Choice =", userChoice);
   const compChoice = genCompChoice();
   console.log("comp choice=",compChoice);
   if (userChoice === compChoice){
      drawGame();
 }
 else{
    let userWin=true;
    if(userChoice==="rock"){
       userWin=compChoice=== "paper" ? false:true;
    }
    else if(userChoice==="paper"){
       userWin=compChoice=== "scissors" ? false:true;
    }
    else {
      userWin=compChoice=== "rock" ? false:true;
   }
   showWinner(userWin,userChoice,compChoice);
 }
};
const drawGame=() => {
   console.log("Match is drawn");
   msg.innerText="Match is drawn!!"
}
const showWinner =(userWin,userChoice,compChoice)=>{
   if (userWin){
      console.log("you win!!");
      msg.innerText=`You win!! Your ${userChoice} beats ${compChoice} `;
      userScore++;
      userscore.innerText=userScore;
   }
   else{
      console.log("you lose");
      msg.innerText=`You lose!! ${compChoice} beats your ${userChoice}`;
      compScore++;
      compscore.innerText=compScore;
   }
};


choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        let userChoice=choice.getAttribute("id");
      playGame(userChoice);
    });
});