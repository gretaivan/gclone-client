// INITIAL
// const listeners = require('./listeners')

// listeners.searchButton()
// listeners.luckyButton()
const {submitKeyword, getResultList, getRandomResult} = require('./listeners');

const searchBtn = document.getElementById('search-button');
const luckyBtn = document.getElementById('lucky-button');

searchBtn.addEventListener('click', getResultList);
luckyBtn.addEventListener('click', getRandomResult)