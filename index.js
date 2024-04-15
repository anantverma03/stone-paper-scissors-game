let userScore=0;
let compScore=0;

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    const options = ["rock","paper","scissor"];
    const randIx=Math.floor(Math.random()*3);
    return options[randIx];

}

const drawGame =()=>{
    console.log("Game was draw");
    msg.innerHTML="Game was Draw.Play again!"
    msg.style.backgroundColor="black";
}


const showWinner=(userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML=userScore;
        console.log("you win!");
        msg.innerHTML=`You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        compScore++;
        compScorePara.innerHTML=compScore;
        console.log("you loose");
        msg.innerHTML=`You loose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}



const playGame=(userChoice )=>{
    console.log("user choice = ", userChoice);
    const compChoice= genCompChoice();
    console.log("Computer choice = ", compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true; 
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice , compChoice);


    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});