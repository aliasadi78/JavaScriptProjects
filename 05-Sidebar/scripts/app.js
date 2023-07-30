const btn = document.querySelector('.nav-toggle')
const close = document.querySelector('.fa-multiply')
const header = document.querySelector('.header')
const bar = document.querySelector('.fa-bars')
let open = false
btn.addEventListener('click', () => {
    menu()
})
close.addEventListener('click', () => {
    menu()
})

const menu = () => {
    open = !open
    if (open) {
        header.classList.add('show-menu')
        bar.style.transform = 'rotate(90deg)'
    } else {
        header.classList.remove('show-menu')
        bar.style.transform = 'rotate(0deg)'
    }
}
