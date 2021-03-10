// INITIAL
const listeners = require('./listeners')

// const {submitKeyword, getResultList, getRandomResult} = require('./listeners');

// const searchBtn = document.getElementById('search-button');
// const luckyBtn = document.getElementById('lucky-button');

// searchBtn.addEventListener('click', listeners.searchButton)
// luckyBtn.addEventListener('click', listeners.luckyButton)

// quick functions to target search bar -> move these to listeners?
window.addEventListener("load", () => {
    document.getElementById('search-bar').focus()
})

document.getElementsByClassName('child')[0].addEventListener("click", () => {
    document.getElementById('search-bar').focus()
})

listeners.searchButton()
listeners.luckyButton()