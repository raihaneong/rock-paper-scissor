let headerEl = document.getElementById('header-el');
let randomizeEl = document.getElementById;('randomize-btn')

let hand = ['rock', 'paper', 'scissor']

function handleRandomize() {
    let randomIndex = Math.floor(Math.random() * 3)
    headerEl.innerText = hand[randomIndex]
    console.log(randomIndex)
}