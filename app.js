const inputBoxItem = document.querySelector('.input__value')
const listElements = document.querySelector('.list')

const addNewItem = () => {
    inputBoxItem.addEventListener('keypress', (event) => {
        if(event.keyCode===13) {
            const newListItem = createNewItem(inputBoxItem.value)
            listElements.insertBefore(newListItem, listElements.childNodes[0])
            inputBoxItem.value = ''
        }
    })
}

const createNewItem = (item) => {
    const newListElement = document.createElement('li')
    const newSpanElement = document.createElement('span')

    newListElement.textContent = item
    newListElement.classList.add('list__item')
    newSpanElement.classList.add('fa', 'fa-trash')
    newSpanElement.textContent = ''
    newListElement.appendChild(newSpanElement)
    return newListElement
}

const crossOutItem = () => {
    listElements.addEventListener('click', (event)=> {
        if(event.target.classList.contains('list__item')) {
            event.target.classList.toggle('done')
        }
    })
}

const deleteListItem = () => {
    listElements.addEventListener('click', (event)=> {
        if(event.target.classList.contains('fa-trash')) {
            listElements.removeChild(event.target.parentNode)
        }
    })
}

addNewItem();
crossOutItem();
deleteListItem();