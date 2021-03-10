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