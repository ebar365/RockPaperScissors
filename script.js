

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

function getHumanChoice(){
    let text=prompt("Type rock, paper or scissors");
    return text.toLowerCase();
}

function playGame(){
let humanScore=0;
let computerScore=0;

for (let i=0;i<5;i++){

    function playRound(humanChoice,computerChoice){
        if(humanChoice==computerChoice){
            console.log("It's a Draw!")
        } else {
            switch(humanChoice){
                case "rock":
                    if (computerChoice=="paper"){
                        console.log("You lose! paper beats rock")
                        ++computerScore
                    } else {
                        console.log("You win! rock beats scissors")
                        ++humanScore
                    }
                    break;
                case "paper":
                    if (computerChoice=="rock"){
                        console.log("You win! paper beats rock")
                        ++humanScore
                    } else {
                        console.log("You lose! scissors beat paper")
                        ++computerScore
                    }
                     break;
                case "scissors":
                    if (computerChoice=="rock"){
                        console.log("You lose! rock beats scissors")
                        computerScore=++computerScore
                    } else {
                        console.log("You win! scissors beat paper")
                        ++humanScore
                    }
                     break;
            } 
        }
        
    }
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        playRound(humanSelection, computerSelection);
}

if (humanScore>computerScore){
    console.log(`YOU WON THE GAME! ${humanScore} : ${computerScore}`);
} else if (humanScore==computerScore){
    console.log(`IT'S A DRAW ${humanScore} : ${computerScore}`);
} else {
    console.log(`YOU LOST THE GAME! ${humanScore} : ${computerScore}`);
}
}

playGame();