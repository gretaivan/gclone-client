(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Example Get method implementation:
async function getData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'    
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  module.exports = {
      getData
  }
},{}],2:[function(require,module,exports){
const apiFuncs = require('./api')

function geolocate() {
    console.log("Geolocating")
    if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
   }
}

async function onGeolocateSuccess(coordinates) {
   const { latitude, longitude } = coordinates.coords;
   console.log('Found coordinates: ', latitude, longitude);
   const data = await apiFuncs.getData(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=10`)
   console.log(data.address.county, data.address.state)
   appendLocation(data.address.county, data.address.state); 
}

function onGeolocateError(error) {
   console.warn(error.code, error.message);

   if (error.code === 1) {
   // they said no
   } else if (error.code === 2) {
   // position unavailable
   } else if (error.code === 3) {
   // timeout
   }
}

function appendLocation(county, state){
    const footer = document.getElementById('location');
    //let locationText = document.createElement('p');
    footer.innerHTML = `<p>${county}, ${state}</p>`
}

geolocate();

exports.modules = { geolocate  };
},{"./api":1}],3:[function(require,module,exports){
function layoutChange() {
    const searchArea = document.getElementsByClassName('search-container')[0]
    const form = document.querySelector('form')
    const buttonGroup = document.getElementsByClassName('input-button-cont')[0]
    const title = document.querySelector('h1')
    searchArea.style.marginTop = 0
    searchArea.style.paddingBottom = '22px'
    searchArea.style.borderBottom = '1px solid #ebebeb'
    buttonGroup.style.paddingTop = 0
    title.style.padding = '0 12px'
    title.style.margin = 0
    title.style.fontSize = '24px'
    form.className = 'form-top'
}

function renderInputClear(data) {
    const clearBtn = document.getElementById('clear-btn')
    if (data.length > 0) {
        clearBtn.style.display = "flex"
    }
    else {
        clearBtn.style.display = "none"
    }
}

function targetSearch(){
    document.getElementById('search-bar').focus()
}

module.exports = {
    layoutChange,
    renderInputClear,
    targetSearch
}
},{}],4:[function(require,module,exports){
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

listeners.initSearchFocus()
listeners.searchBarHelper()
listeners.clearBtnHelper()
listeners.allocateSearchFocus()
listeners.searchButton()
listeners.luckyButton()

geolocate;


},{"./geolocation":2,"./listeners":5}],5:[function(require,module,exports){
const apiFuncs = require('./api');
const handlerFuncs = require('./handlers')
// IMPORTANT: 
// uncomment to use server api
const searchbar = document.getElementById('search-bar')

function searchBarHelper() {
    searchbar.addEventListener("input", () => handlerFuncs.renderInputClear(searchbar.value))
}

function clearBtnHelper() {
    const clearBtn = document.getElementById('clear-btn')
    clearBtn.addEventListener("click", (e) => {
        e.preventDefault()
        searchbar.value = ''
        clearBtn.style.display = "none"
    })
}

function initSearchFocus(){
    window.addEventListener("DOMContentLoaded", () => {
        handlerFuncs.targetSearch()
    })    
}

function allocateSearchFocus(){
    document.getElementsByClassName('child')[0].addEventListener("click", () => {
        handlerFuncs.targetSearch()
    })
}



function searchButton() {
    document.getElementById('search-button').addEventListener("click", async (e) => {
        e.preventDefault()
        const query = searchbar.value
        try {
            if (query.length < 1) throw new Error('please enter a search query')
            const data = await apiFuncs.getData(`http://localhost:3000/search/${query}`)   
            
            //destroys old content
            const resSect = document.querySelector('#resultSection');
            resSect.innerHTML = "";

            appendList(data.body)
            handlerFuncs.layoutChange()
        } catch(err) {
            alert(err)
            throw err
        }
    })
} 

function luckyButton() {
    document.getElementById('lucky-button').addEventListener("click", async (e) => {
        e.preventDefault()
        const query = searchbar.value
        try {
            if (query.length < 1) throw new Error('please enter a search query')
            const data = await apiFuncs.getData(`http://localhost:3000/search/lucky/${query}`)
            console.log(data.body.url)
            window.location.href = data.body.url
        } catch(err) {
            alert(err)
            throw err
        }
    })
}


function appendList(data){
    data.forEach(result => generateListItem(result));
}

function generateListItem(result){
    
    const resSect = document.querySelector('#resultSection');
    const resultBox = document.createElement('div');


    if(resSect.contains(resultBox)){
        console.log("it is not a first search");
    } else{
        console.log("first search")
    }
    
    
    resultBox.className = "result-box";
    //hyperlink
    let link = document.createElement('a');
    let resultLink = result.url;
    link.setAttribute("href", resultLink)
    //header 
    let textContent = `<h3>${result.title}</h3>`;
    //assign clickable elements
    link.innerHTML = resultLink+textContent;
    // description
    let description = document.createElement('p');
    description.textContent = result.snippet;
    // let description = `<p>${result.snippet}</p>`
    resultBox.append(link);
    resultBox.append(description);
    resSect.append(resultBox);
}


module.exports = {
    clearBtnHelper,
    luckyButton,
    searchButton,
    searchBarHelper,
    generateListItem,
    appendList,
    initSearchFocus,
    allocateSearchFocus
}

//searchButton,  submitKeyword,
},{"./api":1,"./handlers":3}]},{},[4]);
