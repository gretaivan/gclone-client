//const apiFuncs = require('./api');
const result = require('./data');

let keyword;

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
    keyword = document.getElementById('search-bar').value;
    console.log("I will return the result list for keyword: " + keyword);
    getData(keyword)
    

}

function getRandomResult(e){
    e.preventDefault(); 
    keyword = document.getElementById('search-bar').value;
    console.log("I will redirect you to the result for keyword: " + keyword);

    getData(keyword);
}

async function getData(keyword){
    try{
        const data = await result;
        //FOR GOOGLE API
        // const data = await apiFuncs.getData(`http://localhost:3000/search/${keyword}`)
        appendList(data.modules);
    } catch(err){
        console.log(err);
    } 
}


function appendList(data){
   // let resSect = document.querySelector('ul');
    data.forEach(result => generateListItem(result)
        // console.log(result)
    );

    // for(result of data){
    //     console.log(result);

    //     // let li =  document.createElement('li');
    //     // li.textContent = result; 
    //     // resSect.appendChild(li)
        
    //     // listItem.innerHTML = "hi";
    // }
    
}

function generateListItem(result){
    const resSect = document.querySelector('#resultSection');
    //let li =  document.createElement('li');
    //hyperlink

    
    //header 
    let h = document.createElement('h3');
    h.textContent = result.title;
    resSect.appendChild(h);

    // description

}


function luckyButton() {
    const query = document.getElementById('search-bar').value
    document.getElementById('lucky-button').addEventListener("click", async (e) => {
        e.preventDefault()
        /*IMPORTANT:
        *Uncomment to use api
        * const data = await apiFuncs.getData(`http://localhost:3000/search/lucky/${keyword}`)
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