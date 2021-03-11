const listeners = require('../js/listeners.js');
const handlers = require('../js/handlers.js')
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
            }
        ]

describe ('dom functions', () => {

    describe('result list tests', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = '<div id="resultSection"></div>';
            global.resultSection = document.getElementById('resultSection')
        })

        
        it('should create a new list item', () => {
            listeners.generateListItem(data[0])
            expect(resultSection.innerHTML).toContain('<h3>Colon (punctuation) - Wikipedia</h3>')
        })

        it('should append formatted data to resultSection', () => {
            listeners.appendList(data)
            expect(resultSection.innerHTML).toBe('<div class=\"result-box\"><a href=\"https://en.wikipedia.org/wiki/Colon_(punctuation)\">https://en.wikipedia.org/wiki/Colon_(punctuation)<h3>Colon (punctuation) - Wikipedia</h3></a><p>The colon : is a punctuation mark consisting of two equally sized dots placed one above the other on the same vertical line. A colon often precedes an ...</p></div>')
        })
    })

    describe('search bar tests', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = `<form>
            <h1>G<div>c</div><div>l</div><div>o</div><div>n</div><div>e</div></h1>
            <div class="parent">
                <input type="text" id="search-bar" autocomplete="off" />
                <div class="child"><button id="clear-btn">&#10005;</button><span>&#x1F50D;</span></div>
            </div>

            <div class="input-button-cont"> 
                <input id="search-button"  type="submit" value="gClone Search" />
                <input id="lucky-button" type="submit" value="I'm Feeling Random" />
            </div>
        </form>`;
            global.searchBar = document.getElementById('search-bar')
            global.clearBtn = document.getElementById('clear-btn')
        })

        it('should show/hide search bar clear-btn if value is not empty/empty', () => {
            handlers.renderInputClear('')
            expect(clearBtn.style.display).toBe('none')
            handlers.renderInputClear('text')
            expect(clearBtn.style.display).toBe('flex')
        })
    })
})
