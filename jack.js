let player = {
    name : window.prompt("Write your name: "),
    chips : 200

}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

//let name = window.prompt("Write your name: ")
playerEl.innerText = player.name +": "+ player.chips
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)
    renderGame()
}
function getRandomCard(){
    let random = (Math.random() * 13)+1
    random = Math.floor(random)
    if(random===1){
        random = 11
        return random
    }
    else if(random>10){
        random = 10
        return random
    }
    else{
        return random
    }
}
function renderGame(){
    cardEl.innerText = "Cards: "
    for(let i =0; i<cards.length;i++){
        cardEl.innerText = cardEl.innerText+" "+cards[i]
    }
    sumEl.innerText ="Sum: " + sum
    if (sum <= 20) {
        message= "Do you want to draw a new card? "
    } else if (sum === 21) {
        message="Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message= "You're out of the game! "
        isAlive = false
    }
    messageEl.innerText = message
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}
