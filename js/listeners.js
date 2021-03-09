const apiFuncs = require('./api');
const data = require('./data');


function searchButton() {
    const query = document.getElementById('search-bar').value
    console.log(query)
    document.getElementById('search-button').addEventListener("click", async (e) => {
        e.preventDefault()
        /*uncomment to use server api
        * const data = await apiFuncs.getData(`http://localhost:3000/search/${query}`)
        */

        const data = 
        // handle responses
        console.log(data)
    })
}

function luckyButton() {
    const query = document.getElementById('search-bar').value
    document.getElementById('lucky-button').addEventListener("click", async (e) => {
        e.preventDefault()
        /*Uncomment to use api
        * const data = await apiFuncs.getData(`http://localhost:3000/search/lucky/${query}`)
        */
        // redirect to random page 
        // window.location.href = 'dataUrl...'
    })
}


module.exports = {
    searchButton,
    luckyButton
}