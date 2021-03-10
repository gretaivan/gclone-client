// INITIAL
// const listeners = require('./listeners')

const listeners = require('./listeners');
const { geolocate } = require('./geolocation');

// const searchBtn = document.getElementById('search-button');
// const luckyBtn = document.getElementById('lucky-button');

// searchBtn.addEventListener('click', getResultList);
// luckyBtn.addEventListener('click', getRandomResult);

// quick functions to target search bar -> move these to listeners?
window.addEventListener("load", () => {
    document.getElementById('search-bar').focus()
})

// window.addEventListener("load", geolocate);

document.getElementsByClassName('child')[0].addEventListener("click", () => {
    document.getElementById('search-bar').focus()
})

listeners.searchBarHelper()
listeners.searchButton()
listeners.luckyButton()

geolocate;

