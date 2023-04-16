var userScore = 0;
var computerScore = 0;

function play() {
  var userChoice = document.getElementById("userChoice").value;
  document.getElementById("countdown").innerHTML = "3";
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = "2";
    setTimeout(function () {
      document.getElementById("countdown").innerHTML = "1";
      setTimeout(function () {
        document.getElementById("countdown").innerHTML = "";
        var computerChoice = getComputerChoice();
        var result = getResult(userChoice, computerChoice);
        document.getElementById("result").innerHTML =
          "Vous avez choisi " +
          userChoice +
          ", l'ordinateur a choisi " +
          computerChoice +
          ". " +
          result;
        if (result === "Vous avez gagné !") {
          userScore++;
        } else if (result === "Vous avez perdu !") {
          computerScore++;
          if (userScore > 0) {
            userScore--;
          }
        }
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("computerScore").innerHTML = computerScore;
      }, 1000);
    }, 1000);
  }, 1000);
}

function getComputerChoice() {
  var choices = ["pierre", "feuille", "ciseaux"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Match nul !";
  } else if (
    (userChoice === "pierre" && computerChoice === "ciseaux") ||
    (userChoice === "feuille" && computerChoice === "pierre") ||
    (userChoice === "ciseaux" && computerChoice === "feuille")
  ) {
    return "Vous avez gagné !";
  } else {
    return "Vous avez perdu !";
  }
}
