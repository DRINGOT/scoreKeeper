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

function incrementScore1() {
    if (scoreP1 < scoreMax && scoreP2 < scoreMax) {
        scoreP1++;
        scorePlayer1.innerText = scoreP1;
    }
    if (scoreP1 === scoreMax) {
        scorePlayer1.classList.add('winner')
    }
}

// ============== Player 2 =================

function insertScoreintoSpanP2() {
    scorePlayer2.append(document.createTextNode(scoreP2));
}

function modifyScoreIntoSpanP2() {
    scorePlayer2.innerText = scoreP2;
}

function incrementScore2() {
    if (scoreP2 < scoreMax && scoreP1 < scoreMax) {
        scoreP2++;
        scorePlayer2.innerText = scoreP2;
    }
    if (scoreP2 === scoreMax) {
        scorePlayer2.classList.add('winner')
    }
}

// ============== Winner Score =================

function insertScoreintoSpanMax() {
    winnerScore.append(document.createTextNode(scoreMax));
}

function modifyWinnerScore() {
    winnerScore.innerText = scoreMax;
}

function setWinnerScore() {
    insertScoreintoSpanMax();
}

// ============== Reset =================

function resetScores() {
    scoreP1 = 0;
    scoreP2 = 0;
    scoreMax = 5;
    modifyScoreIntoSpanP1();
    modifyScoreIntoSpanP2();
    modifyWinnerScore();
    scorePlayer1.classList.remove('winner')
    scorePlayer2.classList.remove("winner")
    input.value = "5";
}

// ============== Initial Statement =================

function setScoreMax() {
    scoreMax = +input.value;
    winnerScore.innerText = +input.value;


}

function scoreKeeper() {
    insertScoreintoSpanMax();
    insertScoreintoSpanP1();
    insertScoreintoSpanP2();

}

// ============== Events =================

reset.addEventListener("click", resetScores);
window.addEventListener("load", scoreKeeper);
player1Button.addEventListener("click", incrementScore1);
player2Button.addEventListener("click", incrementScore2);
input.addEventListener('change', setScoreMax);