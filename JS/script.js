'use strict';

const h1 = document.querySelector("h1");
const scorePlayer1 = document.querySelectorAll("span")[0];
const scorePlayer2 = document.querySelectorAll("span")[1];
const winnerScore = document.querySelectorAll("span")[2];
const input = document.querySelector("input");
const player1Button = document.querySelectorAll("button")[0];
const player2Button = document.querySelectorAll("button")[1];
const reset = document.querySelectorAll("button")[2];

let scoreP1 = 0;
let scoreP2 = 0;
let scoreMax = 5;


// ============== Player 1 =================
function insertScoreintoSpanP1() {
    scorePlayer1.append(document.createTextNode(scoreP1));
}

function modifyScoreIntoSpanP1() {
    scorePlayer1.innerText = scoreP1;
}

