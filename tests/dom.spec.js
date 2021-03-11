const listeners = require('../js/listeners.js');

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
    describe('dom handlers', () => {
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
})
