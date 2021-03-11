// INITIAL
// const listeners = require('./listeners')

const listeners = require('./listeners');
const { geolocate } = require('./geolocation');

// const searchBtn = document.getElementById('search-button');
// const luckyBtn = document.getElementById('lucky-button');

// searchBtn.addEventListener('click', getResultList);
// luckyBtn.addEventListener('click', getRandomResult);

// quick functions to target search bar -> move these to listeners?


// window.addEventListener("load", geolocate);

listeners.searchBarHelper()
listeners.clearBtnHelper()
listeners.initSearchFocus()
listeners.allocateSearchFocus()
listeners.searchButton()
listeners.luckyButton()

geolocate;

