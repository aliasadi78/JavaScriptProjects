const btn = document.querySelector('.main')
const close = document.querySelector('.fa-times ')
const overlay = document.querySelector('body')
const modal = document.querySelector('.modal-overlay')

btn.addEventListener('click', () => {
    modal.classList.add('open-overlay')
})
modal.addEventListener('click', () => {
    modal.classList.remove('open-overlay')
})
close.addEventListener('click', () => {
    modal.classList.remove('open-overlay')
})
