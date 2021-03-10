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
const data = [
    {
        position: 1,
        title: 'Colon (punctuation) - Wikipedia',
        snippet: 'The colon : is a punctuation mark consisting of two equally sized dots placed one above the other on the same vertical line. A colon often precedes an ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://en.wikipedia.org/wiki/Colon_(punctuation)',
        domain: 'en.wikipedia.org',
        displayed_url: 'http://en.wikipedia.org › wiki › Colon_(punctuation)'
      },
      {
        position: 2,
        title: 'Colon (punctuation) - Simple English Wikipedia, the free ...',
        snippet: 'The colon (":") is a punctuation mark, visually consisting of two equally sized dots centered on the same vertical (up/down) line. Contents.',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://simple.wikipedia.org/wiki/Colon_(punctuation)',
        domain: 'simple.wikipedia.org',
        displayed_url: 'http://simple.wikipedia.org › wiki › Colon_(punctuation)'
      },
      {
        position: 3,
        title: 'When to Use a Colon with Colon Punctuation Rules • 7ESL',
        snippet: 'The actual meaning of a colon symbol is like a statement. You are making a pause after a sentence, noticing the most important things. Usually, after a colon, the ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://7esl.com/colon/',
        domain: '7esl.com',
        displayed_url: 'http://7esl.com › colon'
      },
      {
        position: 4,
        title: 'The Colon: Punctuation for Students - YouTube',
        snippet: "To get more out of this video English lesson visit the Britlish Library - it's free to use at https://britlish ...",
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.youtube.com/watch?v=3jMAje8AXNo',
        domain: 'www.youtube.com',
        displayed_url: 'http://www.youtube.com › watch'
      },
      {
        position: 5,
        title: 'Semicolons, colons, and dashes – The Writing Center ...',
        snippet: 'In a sentence, I would separate these items with commas: I bought apples, grapes, and pears. Now suppose that the three items I want to list are described in ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://writingcenter.unc.edu/tips-and-tools/semi-colons-colons-and-dashes/',
        domain: 'writingcenter.unc.edu',
        displayed_url: 'http://writingcenter.unc.edu › tips-and-tools › semi-colons-co...'
      },
      {
        position: 6,
        title: 'Colon | punctuation | Britannica',
        snippet: 'Other articles where Colon is discussed: punctuation: Punctuation in English since 1600: The colon (:), which was once used like a full point and was followed by ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.britannica.com/topic/colon-punctuation',
        domain: 'www.britannica.com',
        displayed_url: 'http://www.britannica.com › topic › colon-punctuation'
      },
      {
        position: 7,
        title: 'Colon | The Punctuation Guide',
        snippet: 'The bookstore specializes in: art, architecture, and graphic design. Between independent clauses when the second explains or illustrates the first. The colon is ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.thepunctuationguide.com/colon.html',
        domain: 'www.thepunctuationguide.com',
        displayed_url: 'http://www.thepunctuationguide.com › colon'
      },
      {
        position: 8,
        title: 'Colon (:) When to Use a Colon with Colon Punctuation Rules ...',
        snippet: 'Aug 31, 2019 - Learn how and when to use a colon (:) with examples and useful colon punctuation rules. The mark (:) in the middle of a sentence indicates that ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.pinterest.com/pin/583638432943201017/',
        domain: 'www.pinterest.com',
        displayed_url: 'http://www.pinterest.com › pin'
      },
      {
        position: 9,
        title: 'Colon (punctuation) | Radiology Reference Article ...',
        snippet: 'Examples of colon use include a sentence with multiple list options: an item: and a description. Related Radiopaedia articles. Help and Style Guide. style ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://radiopaedia.org/articles/colon-punctuation?lang=us',
        domain: 'radiopaedia.org',
        displayed_url: 'http://radiopaedia.org › articles › colon-punctuation'
      },
      {
        position: 10,
        title: 'Colon Punctuation - Rules and Examples - Really Learn English',
        snippet: 'In writing, colon punctuation is used for one thing: to introduce. Mary has only one thing on her mind: work. My mom always told me to follow the Golden Rule: " ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.really-learn-english.com/colon-punctuation.html',
        domain: 'www.really-learn-english.com',
        displayed_url: 'http://www.really-learn-english.com › colon-punctuation'
      },
      {
        position: 11,
        title: 'Colon Punctuation HD Stock Images | Shutterstock',
        snippet: 'Find colon punctuation stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection. Thousands of ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.shutterstock.com/search/colon+punctuation',
        domain: 'www.shutterstock.com',
        displayed_url: 'http://www.shutterstock.com › search › colon+punctuation'
      },
      {
        position: 12,
        title: 'Colon Punctuation - Grammar Island',
        snippet: 'The team was jubilant: They had won their game and were tied for the championship. Examples 1. Use colon punctuation as needed in these sentences. There is ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.grammar-island.com/colon-punctuation.html',
        domain: 'www.grammar-island.com',
        displayed_url: 'http://www.grammar-island.com › colon-punctuation'
      },
      {
        position: 13,
        title: 'The Correct Colon Punctuation Rules | Punctuation Checker',
        snippet: 'For example, “I love movies: Titanic, Star Wars, and Blood Diamond.” colon punctuation usage You can make use of colons or semicolons or both of them in your ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.punctuationchecker.org/correct-colon-punctuation-rules/',
        domain: 'www.punctuationchecker.org',
        displayed_url: 'http://www.punctuationchecker.org › correct-colon-punctuati...'
      },
      {
        position: 14,
        title: 'Colon Punctuation Mark Poster | KS2 Resources - Twinkl',
        snippet: 'Use this handy colon punctuation mark poster to remind your children when to use colons in their writing.',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.twinkl.com/resource/t-m-1759-colon-punctuation-poster',
        domain: 'www.twinkl.com',
        displayed_url: 'http://www.twinkl.com › resource › t-m-1759-colon-punctuat...'
      },
      {
        position: 15,
        title: 'Colon (:) When to Use a Colon with Colon Punctuation Rules ...',
        snippet: 'May 7, 2019 — Learn how and when to use a colon (:) with examples and useful colon punctuation rules. The mark (:) in the middle of a sentence indicates that ...',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://punctuationmarks.org/colon/',
        domain: 'punctuationmarks.org',
        displayed_url: 'http://punctuationmarks.org › colon'
      },
      {
        position: 16,
        title: 'Definition and Examples of Colons - ThoughtCo',
        snippet: 'Jul 17, 2018 — The colon (:) is a mark of punctuation used after a statement that introduces a quotation, an explanation, an example, or a series.',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.thoughtco.com/what-is-colon-punctuation-1689868',
        domain: 'www.thoughtco.com',
        displayed_url: 'http://www.thoughtco.com › English › English Grammar'
      },
      {
        position: 17,
        title: 'translate.google.com/translate_t?q=号码设定：写码前请将开关拔到A...',
        snippet: '',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'http://translate.google.com/translate_t?q=%E5%8F%B7%E7%A0%81%E8%AE%BE%E5%AE%9A%EF%BC%9A%E5%86%99%E7%A0%81%E5%89%8D%E8%AF%B7%E5%B0%86%E5%BC%80%E5%85%B3%E6%8B%94%E5%88%B0A%E4%BD%8D%E7%BD%AE%E3%80%81%E7%94%A8%E7%9F%AD%E4%BF%A1%E5%8F%91%E9%80%81GDM(%E6%B3%A8%EF%BC%9AGDM%E6%AF%95%E9%9C%80%E7%94%A8%E5%A4%A7%E5%86%99%E5%AD%97%E6%AF%8D)%E5%8A%A0%E6%89%80%E8%A6%81%E6%8E%A5%E5%90%AC%E7%9A%84%E5%8F%B7%E7%A0%81%E5%8D%B3%E5%8F%AF%E3%80%81(%E5%A6%82GDM%23%23%23%23)&um=1&ie=UTF-8&sa=N&hl=en&tab=wT',
        domain: 'translate.google.com',
        displayed_url: 'http://'
      },
      {
        position: 18,
        title: 'ASL sign for COLON (PUNCTUATION MARK) - HandSpeak',
        snippet: 'How to sign COLON (PUNCTUATION MARK) in ASL | American Sign Language dictionary.',
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.handspeak.com/word/search/index.php?id=4078',
        domain: 'www.handspeak.com',
        displayed_url: 'http://www.handspeak.com › word › search'
      },
      {
        position: 19,
        title: 'When to Use a Colon | Punctuation Rules & Examples | Ginger',
        snippet: "When separating an independent clause from an explanation, use the colon as illustrated in the following example. There's not much time: get to the sale while you ...",
        prerender: false,
        cached_page_url: {},
        related_pages_url: {},
        url: 'https://www.gingersoftware.com/content/grammar-rules/colons/',
        domain: 'www.gingersoftware.com',
        displayed_url: 'http://www.gingersoftware.com › grammar-rules › colons'
      }
]

exports.modules = data; 
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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

},{"./listeners":5}],5:[function(require,module,exports){
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
},{"./api":1,"./data":2,"./handlers":3}]},{},[4]);
