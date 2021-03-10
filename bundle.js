(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Example Get method implementation:
async function getData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
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

const clearBtn = document.getElementById('clear-btn')
function renderInputClear(data) {
    if (data.length > 0) {
        clearBtn.style.display = "flex"
    }
    else {
        clearBtn.style.display = "none"
    }
}

module.exports = {
    layoutChange,
    renderInputClear
}
},{}],3:[function(require,module,exports){
// INITIAL
// const listeners = require('./listeners')

const listeners = require('./listeners');

// const searchBtn = document.getElementById('search-button');
// const luckyBtn = document.getElementById('lucky-button');

// searchBtn.addEventListener('click', getResultList);
// luckyBtn.addEventListener('click', getRandomResult);

// quick functions to target search bar -> move these to listeners?
window.addEventListener("load", () => {
    document.getElementById('search-bar').focus()
})

document.getElementsByClassName('child')[0].addEventListener("click", () => {
    document.getElementById('search-bar').focus()
})

listeners.searchBarHelper()
listeners.searchButton()
listeners.luckyButton()

},{"./listeners":4}],4:[function(require,module,exports){
const apiFuncs = require('./api');
const handlerFuncs = require('./handlers')
// IMPORTANT: 
// uncomment to use server api
const searchbar = document.getElementById('search-bar')

function searchBarHelper() {
    searchbar.addEventListener("input", () => handlerFuncs.renderInputClear(searchbar.value))
}

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener("click", (e) => {
    e.preventDefault()
    searchbar.value = ''
    clearBtn.style.display = "none"
})


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
            // let children = resSect.childNodes;
            // for(let i = 0; i < children.length; i++){
            //     resSect.removeChild(children[0]);
            // }

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

// function getResultList(e){
//     e.preventDefault(); 
//     keyword = document.getElementById('search-bar').value;
//     console.log("Return of the result list for keyword: " + keyword);
//     getData(keyword)  
// }

// function getRandomResult(e){
//     e.preventDefault(); 
//     keyword = document.getElementById('search-bar').value;
//     console.log("Redirection the result for keyword: " + keyword);
//     getData(keyword);
// }

// async function getData(keyword){
//     try{
//         const data = await result;
//         const data = await apiFuncs.getData(`http://localhost:3000/search/${keyword}`)
//         appendList(data);
//     } catch(err){
//         console.log(err);
//     } 
// }


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
    luckyButton,
    searchButton,
    searchBarHelper
}

//searchButton,  submitKeyword,
},{"./api":1,"./handlers":2}]},{},[3]);
