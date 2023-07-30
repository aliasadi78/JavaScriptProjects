const btn = document.querySelector('.nav-toggle')
const menu2 = document.querySelector('.menu2')
const bar = document.querySelector('.fa-bars')
let open = false
btn.addEventListener('click', () => {
    open = !open
    if (open) {
        menu2.classList.add('show-menu')
        bar.style.transform = 'rotate(90deg)'
    } else {
        menu2.classList.remove('show-menu')
        bar.style.transform = 'rotate(0deg)'
    }
    
})
