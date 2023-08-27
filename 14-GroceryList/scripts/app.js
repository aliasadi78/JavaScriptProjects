const getSaveItems = () => {
    let itemsJSON = localStorage.getItem('items')
    try {
        return itemsJSON !== null ? JSON.parse(itemsJSON) : []
    } catch (error) {
        return []
    }

}
const getIsDark = () => {
    try {
        return localStorage.getItem('isDark')
    } catch (error) {
        return 'light'
    }

}
const saveItem = items => localStorage.setItem('items', JSON.stringify(items))
let items = getSaveItems()

const message = document.querySelector('.message')
const form = document.querySelector('.form')
const input = document.querySelector('.value')
const listDiv = document.querySelector('.list')
const clear = document.querySelector('.clear')
const check = document.querySelector('.check')

let isDark = getIsDark()
console.log(isDark);
isDark === 'light' ? check.setAttribute('checked', 'checked') : null
let edit = false
let body = document.querySelector('.body')
body.classList.add(isDark)
let container = document.querySelector('.container')
container.classList.add(isDark)
let value = document.querySelector('.value')
value.classList.add(isDark)
let submit = document.querySelector('.submit-btn')
submit.classList.add(isDark)
let itemsRow = document.querySelectorAll('.item-row')
itemsRow.forEach(item => {
    item.classList.add(isDark)
})
let modes = document.querySelectorAll('.mode')
modes.forEach(mode => {
    mode.classList.add(isDark)
})

let editItem = ''
const removeItem = (id) => {
    const itemIndex = items.findIndex(item => item.id === id)
    itemIndex > -1 && items.splice(itemIndex, 1)
    message.innerHTML = '<div>item removed</div>'
    setTimeout(() => { message.innerHTML = '<div></div>' }, 3000)
}

const renderItems = (items) => {
    listDiv.innerHTML = ``
    items.length === 0 ? [] :
        items.forEach((item) => {
            listDiv.appendChild(createItemDOM(item))
        });
}
const createItemDOM = (item) => {
    const productEl = document.createElement('div')

    productEl.setAttribute('class', 'product-row')

    const div = document.createElement('div')
    div.setAttribute('class', 'item-row light')
    const section = document.createElement('section')
    section.setAttribute('class', 'section')

    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'btn remove-btn')
    removeButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash-can"></i>'

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'btn edit-btn')
    editButton.innerHTML = '<i class="fa-sharp fa-solid fa-pencil"></i>'

    const spanText = document.createElement('span')
    spanText.textContent = item.title

    section.appendChild(spanText)
    section.appendChild(removeButton)
    section.appendChild(editButton)
    div.appendChild(section)
    productEl.appendChild(div)

    removeButton.addEventListener('click', () => {
        removeItem(item.id)
        saveItem(items)
        renderItems(items)
    })
    editButton.addEventListener('click', () => {
        edit = true
        editItem = item.title
        input.value = item.title
    })

    return productEl


}

renderItems(items)
let result = []
form.addEventListener('submit', e => {
    e.preventDefault()
    if (edit === false) {
        items.push({
            id: uuidv4(),
            title: input.value
        })
        saveItem(items)
        edit ? edit = false : null
        renderItems(items)
        input.value = ""
        message.innerHTML = '<div>add to list</div>'
        setTimeout(() => { message.innerHTML = '<div></div>' }, 3000)
    } else {
        for (let index = 0; index < items.length; index++) {
            if (items[index].title === editItem) {
                items[index].title = input.value
            }
        }
        input.value = ""
        saveItem(items)
        renderItems(items)
        edit ? edit = false : null
        message.innerHTML = '<div>item updated</div>'
        setTimeout(() => { message.innerHTML = '<div></div>' }, 3000)
    }
})


clear.addEventListener('click', () => {
    items = []
    saveItem(items)
    listDiv.innerHTML = ''
    message.innerHTML = '<div>clear list</div>'
    setTimeout(() => { message.innerHTML = '<div></div>' }, 3000)
})

check.addEventListener('click', () => {
    if (!check.checked) {
        localStorage.setItem('isDark', 'dark')
        console.log(check.checked);
        let body = document.querySelector('.body')
        body.classList.remove('light')
        body.classList.add('dark')
        let container = document.querySelector('.container')
        container.classList.remove('light')
        container.classList.add('dark')
        let value = document.querySelector('.value')
        value.classList.remove('light')
        value.classList.add('dark')
        let submit = document.querySelector('.submit-btn')
        submit.classList.remove('light')
        submit.classList.add('dark')
        let items = document.querySelectorAll('.item-row')
        items.forEach(item => {
            item.classList.remove('light')
            item.classList.add('dark')
        })
        let modes = document.querySelectorAll('.mode')
        modes.forEach(mode => {
            mode.classList.remove('light')
            mode.classList.add('dark')
        })
    } else {
        localStorage.setItem('isDark', 'light')
        console.log(check.checked);
        let body = document.querySelector('.body')
        body.classList.remove('dark')
        body.classList.add('light')
        let container = document.querySelector('.container')
        container.classList.remove('dark')
        container.classList.add('light')
        let value = document.querySelector('.value')
        value.classList.remove('dark')
        value.classList.add('light')
        let submit = document.querySelector('.submit-btn')
        submit.classList.remove('dark')
        submit.classList.add('light')
        let items = document.querySelectorAll('.item-row')
        items.forEach(item => {
            item.classList.remove('dark')
            item.classList.add('light')
        });
        let modes = document.querySelectorAll('.mode')
        modes.forEach(mode => {
            mode.classList.remove('dark')
            mode.classList.add('light')
        });
    }
})