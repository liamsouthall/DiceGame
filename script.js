const dice = document.getElementById("dice");
const startButton = document.getElementById("startButton");
const diceImageOne = document.getElementById("diceImageOne");
const totalOne = document.getElementById("totalOne");
const totalTwo = document.getElementById("totalTwo");
const result = document.getElementById("result");
const resultOne = document.getElementById("resultOne");
const resultTwo = document.getElementById("resultTwo");
const roll = document.getElementById("roll");
const onePlayer = document.getElementById("onePlayer");
const twoPlayer = document.getElementById("twoPlayer");
const playersSelect = document.getElementById("playersSelect");
const diceImageTwo = document.getElementById("diceImageTwo");
const diceImageTwoBlock = document.getElementById("diceImageTwoBlock");
let scoreOne = 0;
let scoreTwo = 0;
let multiPlayer = false;
let turn = "P1";

roll.addEventListener("click", () => {
  const rnum = Math.ceil(Math.random() * 6);

  let game = () => {
    if (rnum == 1) {
      if (turn == "P1") {
        diceImageOne.src = `img/dice${rnum}.png`;
        scoreOne = 0;
        scoreTwo = 0;
        totalOne.textContent = scoreOne;
        resultOne.textContent = "You Lose";
        resultTwo.textContent = "You Win";
        startButton.style.display = "flex";
        roll.style.display = "none";
      } else {
        diceImageTwo.src = `img/dice${rnum}.png`;
        scoreOne = 0;
        scoreTwo = 0;
        totalTwo.textContent = scoreTwo;
        resultTwo.textContent = "You Lose";
        resultOne.textContent = "You Win";
        startButton.style.display = "flex";
        roll.style.display = "none";
      }
    } else {
      if (turn == "P1") {
        diceImageOne.src = `img/dice${rnum}.png`;
        scoreOne += rnum;
        totalOne.textContent = scoreOne;
      } else {
        diceImageTwo.src = `img/dice${rnum}.png`;
        scoreTwo += rnum;
        totalTwo.textContent = scoreTwo;
      }
    }

    if (scoreOne >= 20) {
      resultTwo.textContent = "You Lose";
      resultOne.textContent = "You Win";
      startButton.style.display = "flex";
      roll.style.display = "none";
      scoreOne = 0;
      scoreTwo = 0;
    }
    if (scoreTwo >= 20) {
      resultOne.textContent = "You Lose";
      resultTwo.textContent = "You Win";
      startButton.style.display = "flex";
      roll.style.display = "none";
      scoreOne = 0;
      scoreTwo = 0;
    }
  };

  if (multiPlayer == false) {
    game();
  } else {
    if (turn == "P1") {
      turn = "P2";
      game();
    } else {
      turn = "P1";
      game();
    }
  }
});

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  roll.style.display = "flex";
  diceImageOne.src = "";
  diceImageTwo.src = "";
  resultOne.textContent = "";
  resultTwo.textContent = "";
  totalOne.textContent = "";
  totalTwo.textContent = "";
});

onePlayer.addEventListener("click", () => {
  playersSelect.style.display = "none";
  roll.style.display = "flex";
});

twoPlayer.addEventListener("click", () => {
  playersSelect.style.display = "none";
  roll.style.display = "flex";
  totalTwo.style.display = "flex";
  diceImageTwo.style.display = "flex";
  multiPlayer = true;
  turn = "P2";
  resultTwo.style.display = "flex";
  diceImageTwoBlock.style.display = "flex";
});
