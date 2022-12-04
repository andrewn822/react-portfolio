// globals

/** 
 * get all our elements
 * -start button
 * -word guess area
 * -wins
 * -losses
 * -timer
 * wins
 * loses
 * available words
 * chosen word
 * gussed letter
 * initialTime
 * timeleft
 * */ 

var startBtn = document.querySelector('.startBtn')
var resetBtn = document.querySelector('.resetBtn')
var wordArea = document.querySelector('.wordArea')
var winsText = document.querySelector('.wins')
var lossesText = document.querySelector('.losses')
var timer = document.querySelector('.timer')

var gameStarted = false
var wins = 0 
var losses = 0
var availableWords = ['variable','array','modulus','object','function','string','boolean']
var chosenWord = null
var pastWords = []
var guessedLetter = []
var initialTime = 20
var timeLeft = null
var blanks = []
var chosenWordLetters = [] 






// functions

/**
 * initialization
 * -get wins 
 * -get loses
 * -render wins
 * -render losses
 * -render initialTime
 * 
 * start game
 * -start timer
 * -choose word
 * -render blanks
 * 
 * 
 * win condition
 * -render win text
 * increment win
 * 
 * loss condition
 * -render lose text
 * -increments loss
 * 
 * 
 * gameLogic
 * -check chosen letter vs word
 * -if letter exists, render letter
 * -if all letter revealed, win
 * -if timer runsout, loss
 * 
 * reset
 * -set wins 0
 * -set losses 0
 * -clears chosen words
 * 
 */
 function init() {
    wins = localStorage.getItem('wins') || 0
    losses = localStorage.getItem('losses') || 0
    timer.textContent = initialTime
    winsText.textContent = wins
    lossesText.textContent = losses
}

function chooseWord() {
    chosenWord = availableWords[Math.floor(Math.random() * availableWords.length)]
    chosenWordLetters = chosenWord.split("")

    for( var i = 0; i < chosenWordLetters.length; i++) {
        blanks.push("_")
    }

    wordArea.textContent = blanks.join(' ')
}


function startTimer() {
    timeLeft = initialTime
    var gameTime = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--
            timer.textContent = timeLeft
        } else {
            console.log('gameOver')
            clearInterval(gameTime)
            gameStarted = false
        }


    }, 1000)
}

function startGame() {
    if (gameStarted) {
        return
    }
    gameStarted = true

    startTimer()
    chooseWord()
}


function gameLogic(event) {
    if(!gameStarted){
        return
    }

    var letterPresent =

}





// listeners

/**
 * start button 'click', start
 * reset 'click', reset
 * keydown, gamelogic
 * 
 * 
 * 
 * 
 */
startBtn.addEventListener('click', startGame)
document.addEventListener('keydown', gameLogic)
// calls
init()
