let scoreCounterHome = document.getElementById("score-counter-home")
let scoreCounterAway = document.getElementById("score-counter-away")
let totalScoreHome = 0
let totalScoreAway = 0

function addOneHome () {
    totalScoreHome += 1
    scoreCounterHome.textContent = totalScoreHome
}

function addTwoHome () {
    totalScoreHome += 2
    scoreCounterHome.textContent = totalScoreHome
}

function addThreeHome () {
    totalScoreHome += 3
    scoreCounterHome.textContent = totalScoreHome
}

function addOneAway () {
    totalScoreAway += 1
    scoreCounterAway.textContent = totalScoreAway
}

function addTwoAway () {
    totalScoreAway += 2
    scoreCounterAway.textContent = totalScoreAway
}

function addThreeAway () {
    totalScoreAway += 3
    scoreCounterAway.textContent = totalScoreAway
}

function reset () {
    scoreCounterAway.textContent = 0
    totalScoreAway = 0
    scoreCounterHome.textContent = 0
    totalScoreHome = 0
}