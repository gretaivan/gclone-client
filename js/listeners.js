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
    clearBtnHelper,
    luckyButton,
    searchButton,
    searchBarHelper,
    generateListItem,
    appendList
}

//searchButton,  submitKeyword,