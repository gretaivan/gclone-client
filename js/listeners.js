//const apiFuncs = require('./api');
const result = require('./data');

let query;

/*IMPORTANT: 
** uncomment to use server api
function searchButton() {
    const query = document.getElementById('search-bar').value
    console.log(query)
    document.getElementById('search-button').addEventListener("click", async (e) => {
        e.preventDefault()
        

        const data = await apiFuncs.getData(`http://localhost:3000/search/${query}`)
       

         
        // handle responses
        console.log(result)
    })
} */

function getResultList(e){
    e.preventDefault(); 
    query = document.getElementById('search-bar').value;
    console.log("returns list for query: " + query);
}

function getRandomResult(e){
    e.preventDefault(); 
    query = document.getElementById('search-bar').value;
    console.log("I will redirect you to the result " + query);
}



function luckyButton() {
    const query = document.getElementById('search-bar').value
    document.getElementById('lucky-button').addEventListener("click", async (e) => {
        e.preventDefault()
        /*IMPORTANT:
        *Uncomment to use api
        * const data = await apiFuncs.getData(`http://localhost:3000/search/lucky/${query}`)
        */


        // redirect to random page 
        // window.location.href = 'dataUrl...'
    })
}


module.exports = {
   
    getResultList,
    getRandomResult,
    luckyButton
}

//searchButton,  submitKeyword,