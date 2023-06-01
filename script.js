var computerScore = 0;
var yourScore = 0;
var isGameOver = false;

function play(userChoice) {
    if (isGameOver) {
        document.getElementById("result").style.visibility = "hidden";
        return;
    }
    document.getElementById("user-choice").style.visibility = "visible";
    document.getElementById("computer-choice").style.visibility = "visible";
    document.getElementById("result-text").style.visibility = "visible";
    document.getElementById("you_picked").style.visibility = "visible";
    document.getElementById("computer_picked").style.visibility = "visible";
    document.getElementById("stop-game").style.visibility = "visible";
    document.getElementById("play-again").style.visibility = "visible";

    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var user_Choice = "";
    var computer_Choice = "";
    if(userChoice == "rock")
    {
        user_Choice = "👊";
    }
    else if(userChoice == "paper")
    {
        user_Choice = "✋";
    }
    else
    {
        user_Choice = "✌️";
    }
    if(computerChoice == "rock")
    {
        computer_Choice = "👊";
    }
    else if(computerChoice == "paper")
    {
        computer_Choice = "✋";
    }
    else
    {
        computer_Choice = "✌️";
    }

    // Display user's choice and computer's choice
    document.getElementById("user-choice").textContent = user_Choice;
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("computer-choice").textContent = computer_Choice;

    if (userChoice === computerChoice) {
        // It's a tie
        displayResult("TIE UP");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        // User wins
        yourScore++;
        displayResult("YOU WIN AGAINST PC");
    } else {
        // Computer wins
        computerScore++;
        displayResult("YOU LOST AGAINST PC");
    }

    updateScores();
}

function displayResult(result) {
    document.getElementById("result-text").textContent = result;
}

function updateScores() {
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("your-score").textContent = yourScore;
}
function restartGame() {
    computerScore = 0;
    yourScore = 0;
    isGameOver = false;
    document.getElementById("stop-game").style.visibility = "hidden";
    document.getElementById("play-again").style.visibility = "hidden";
    document.getElementById("user-choice").style.visibility = "hidden";
    document.getElementById("computer-choice").style.visibility = "hidden";
    document.getElementById("you_picked").style.visibility = "hidden";
    document.getElementById("computer_picked").style.visibility = "hidden";
    document.getElementById("result-text").style.visibility = "hidden";
    document.getElementById("user-choice").textContent = "";
    document.getElementById("computer-choice").textContent = "";
    document.getElementById("result-text").textContent = "";
    updateScores();
}
function checkGameEnd() {
    if (yourScore >= 10 || computerScore >= 10) {
        isGameOver = true;
        document.getElementById("play-again").style.display = "block";
        document.getElementById("stop-game").style.display = "none";
        displayGameResult();
    }
}
function displayGameResult() {
    if (yourScore > computerScore) {
        displayResult("HURRAY!! YOU WON THE GAME");
    } else if (yourScore < computerScore) {
        displayResult("SORRY! YOU LOST THE GAME");
    } else {
        displayResult("IT'S A TIE GAME");
    }
}
function stopGame() {
    isGameOver = true;
    document.getElementById("stop-game").style.visibility = "hidden";
    displayGameResult();
}

// Get the rules button and the rules content
const rulesButton = document.getElementById("rules-button");
const rulesContent = document.getElementById("rules-content");

// Add event listener to the rules button
rulesButton.addEventListener("click", function() {
  // Toggle the visibility of the rules content
  if (rulesContent.style.display === "none") {
    rulesContent.style.display = "block";
  } else {
    rulesContent.style.display = "none";
  }
});
