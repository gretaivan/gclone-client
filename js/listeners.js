const apiFuncs = require('./api');
const result = require('./data');
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
        const query = searchbar.value
        e.preventDefault()
        const data = await apiFuncs.getData(`http://localhost:3000/search/${query}`)       
        // handle responses
        appendList(data.body)
        handlerFuncs.layoutChange()
    })
} 

function luckyButton() {
    document.getElementById('lucky-button').addEventListener("click", async (e) => {
        const query = searchbar.value
        e.preventDefault()
        // IMPORTANT:
        // Uncomment to use api
        const data = await apiFuncs.getData(`http://localhost:3000/search/lucky/${query}`)
        console.log(data.body.url)
        window.location.href = data.body.url
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
    resSect.appendChild(resultBox);
}


module.exports = {
    luckyButton,
    searchButton,
    searchBarHelper
}

//searchButton,  submitKeyword,