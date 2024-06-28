function getComputerChoice(){
    let rand=Math.floor(Math.random()*3+1);
    switch (rand){
        case 1:
            return("rock")
            break;
        case 2:
            return("paper")
            break;
        case 3:
            return("scissors")
            break;
    }
}

let computerScore=0;
let humanScore=0;

function playRound(humanChoice,computerChoice){
       const div=document.querySelector(".results");
       const score=document.querySelector(".score");    
     
        if(humanChoice==computerChoice){
            div.textContent="It's a Draw!"
        } else {
            switch(humanChoice){
                case "rock":
                    if (computerChoice=="paper"){
                        div.textContent="You lose! paper beats rock"
                        ++computerScore
                    } else {
                        div.textContent="You win! rock beats scissors"
                        ++humanScore
                    }
                    break;
                case "paper":
                    if (computerChoice=="rock"){
                        div.textContent="You win! paper beats rock"
                        ++humanScore
                    } else {
                        div.textContent="You lose! scissors beat paper"
                        ++computerScore
                    }
                     break;
                case "scissors":
                    if (computerChoice=="rock"){
                        div.textContent="You lose! rock beats scissors"
                        computerScore=++computerScore
                    } else {
                        div.textContent="You win! scissors beat paper"
                        ++humanScore
                    }
                     break;
            }
        }
        score.textContent= `Score: ${humanScore} : ${computerScore}`;
        const final=document.createElement("p");
        if (humanScore==5){
            final.textContent="YOU WON THE GAME!";
            score.appendChild(final);
            computerScore=0;
            humanScore=0;
        } else if (computerScore==5){
            final.textContent="YOU LOST THE GAME!";
            score.appendChild(final);
            computerScore=0;
            humanScore=0;
        }
        
    }

const btn=document.querySelectorAll("button");
btn.forEach((element) => {
    element.addEventListener("click", ()=>{
        const humanSelection=element.id;
        const computerSelection=getComputerChoice();
        playRound(humanSelection, computerSelection);      
    });
});



