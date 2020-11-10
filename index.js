// OKO

//PLAYER VARIABLES

let scoreInitial = 0;
let randomNumberMultiplier = 32;
let arrayOfCardPoint = [];

// PC VARIABLES

let scoreInitialPC = 0;
let arrayOfCardPointsPC = [15, 16, 17, 18, 19, 20, 21, 23, 24];

// ČERVEŇ
const card_0 = [7, "imgs/0.JPG"];
const card_1 = [8, "imgs/1.JPG"];
const card_2 = [9, "imgs/2.JPG"];
const card_3 = [10, "imgs/3.JPG"];
const card_4 = [2, "imgs/4.JPG"];
const card_5 = [3, "imgs/5.JPG"];
const card_6 = [4, "imgs/6.JPG"];
const card_7 = [11, "imgs/7.JPG"];

// ZELEŇ
const card_8 = [7, "imgs/8.JPG"];
const card_9 = [8, "imgs/9.JPG"];
const card_10 = [9, "imgs/10.JPG"];
const card_11 = [10, "imgs/11.JPG"];
const card_12 = [2, "imgs/12.JPG"];
const card_13 = [3, "imgs/13.JPG"];
const card_14 = [4, "imgs/14.JPG"];
const card_15 = [11, "imgs/15.JPG"];

//GUĽA
const card_16 = [7, "imgs/16.JPG"];
const card_17 = [8, "imgs/17.JPG"];
const card_18 = [9, "imgs/18.JPG"];
const card_19 = [10, "imgs/19.JPG"];
const card_20 = [2, "imgs/20.JPG"];
const card_21 = [3, "imgs/21.JPG"];
const card_22 = [4, "imgs/22.JPG"];
const card_23 = [11, "imgs/23.JPG"];

//ŽALUĎ
const card_24 = [7, "imgs/24.JPG"];
const card_25 = [8, "imgs/25.JPG"];
const card_26 = [9, "imgs/26.JPG"];
const card_27 = [10, "imgs/27.JPG"];
const card_28 = [2, "imgs/28.JPG"];
const card_29 = [3, "imgs/29.JPG"];
const card_30 = [4, "imgs/30.JPG"];
const card_31 = [11, "imgs/31.JPG"];
const card_32 = [0, "imgs/card_default.JPG"];

let cardDeck = [
  card_0,
  card_1,
  card_2,
  card_3,
  card_4,
  card_5,
  card_6,
  card_7,
  card_8,
  card_9,
  card_10,
  card_11,
  card_12,
  card_13,
  card_14,
  card_15,
  card_16,
  card_17,
  card_18,
  card_19,
  card_20,
  card_21,
  card_22,
  card_23,
  card_24,
  card_25,
  card_26,
  card_27,
  card_28,
  card_29,
  card_30,
  card_31,
  card_32,
];

// GAME LOGIC

document.getElementById("your_score_output").innerHTML = scoreInitial;
document.getElementById("opponent_output").innerHTML = scoreInitialPC;

// FUNCTION PLAYER

function firstStep() {
  let randomNumber = Math.floor(Math.random() * randomNumberMultiplier);

  scoreInitial += cardDeck[randomNumber][0];

  arrayOfCardPoint.push(cardDeck[randomNumber][0]);

  document.getElementById("your_score_output").innerHTML = scoreInitial;

  // IMAGE ASSIGNING

  let cardPlayable = document.querySelectorAll("img")[3];

  cardPlayable.setAttribute("src", cardDeck[randomNumber][1]);

  cardDeck.splice(randomNumber, 1);

  randomNumberMultiplier -= 1;

  // SCORE CONDITION

  if (arrayOfCardPoint[0] + arrayOfCardPoint[1] == 22) {
    document.getElementById("your_score_output").innerHTML =
      scoreInitial +
      ` ➨ GOOD JOB! You hit the GOLDEN EYE - your score is 22 points`;
    document.getElementById("add_card").disabled = true;
  } else if (scoreInitial >= 22) {
    document.getElementById("your_score_output").innerHTML =
      scoreInitial + ` ➨ TROP - your score is above 21 points`;

    document.getElementById("add_card").disabled = true;
  }
}

// PC FUNCTION

function secondStep() {
  let randomNumberPC = Math.floor(Math.random() * 9);
  scoreInitialPC = arrayOfCardPointsPC[randomNumberPC];
  document.getElementById("opponent_output").innerHTML = scoreInitialPC;
  document.getElementById("add_card").disabled = true;
  document.getElementById("stop_card").disabled = true;
  resultCreator();
  document.getElementById("refresh_card").style.visibility = "visible";
}

// REFRESH FUNCTION

function refreshStep() {
  window.location.reload();
}

// RESULT FUNCTION

function resultCreator() {
  if (arrayOfCardPoint[0] + arrayOfCardPoint[1] == 22) {
    document.getElementById("result_output").innerHTML =
      "Well done - YOU WIN!!!";
  } else if (scoreInitial >= 22 && scoreInitialPC >= 22) {
    document.getElementById("result_output").innerHTML =
      "DRAW! - you have both lost!";
  } else if (
    scoreInitial == scoreInitialPC &&
    scoreInitial <= 21 &&
    scoreInitialPC <= 21
  ) {
    document.getElementById("result_output").innerHTML =
      "DRAW! - you both reached the same score!";
  } else if (scoreInitial <= 21 && scoreInitial > scoreInitialPC) {
    document.getElementById("result_output").innerHTML =
      "CONGRATS! - you have WON!";
  } else if (scoreInitialPC <= 21 && scoreInitialPC > scoreInitial) {
    document.getElementById("result_output").innerHTML =
      "I am Sorry! You have lost this time. Try your LUCK again!";
  } else if (scoreInitial >= 22 && scoreInitialPC <= 21) {
    document.getElementById("result_output").innerHTML =
      "Sorry Pal! You have lost this time. Try your LUCK again!";
  } else if (scoreInitialPC >= 22 && scoreInitial <= 21) {
    document.getElementById("result_output").innerHTML =
      "CONGRATS! - you have WON!";
  }
}

// Getting Elements from HTML

const addButton = document.getElementById("add_card");

const stopButton = document.getElementById("stop_card");

const refreshButton = document.getElementById("refresh_card");

// Buttons Onclick

addButton.addEventListener("click", firstStep);
stopButton.addEventListener("click", secondStep);
refreshButton.addEventListener("click", refreshStep);
