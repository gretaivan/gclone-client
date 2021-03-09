const apiFuncs = require('./api')

function searchButton() {
    const query = document.getElementById('search-bar').value
    console.log(query)
    document.getElementById('search-button').addEventListener("click", async (e) => {
        e.preventDefault()
        const data = await apiFuncs.getData(`http://localhost:3000/search?${query}`)
        // handle responses
        console.log(data)
    })
}

function luckyButton() {
    const query = document.getElementById('search-bar').value
    document.getElementById('lucky-button').addEventListener("click", async (e) => {
        e.preventDefault()
        const data = await apiFuncs.getData(`http://localhost:3000/search/lucky?${query}`)
        // redirect to random page 
        // window.location.href = 'dataUrl...'
    })
}


module.exports = {
    searchButton,
    luckyButton
}