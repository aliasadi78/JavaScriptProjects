const h = document.querySelectorAll('.h')
const c = document.querySelectorAll('.c')
const res = document.querySelector('.result')
const againBtn = document.querySelector('.again')
const cBox = document.querySelector('.c-box')
const hBox = document.querySelector('.h-box')
const hS = document.querySelector('.h-score')
const cS = document.querySelector('.c-score')

let hScore = 0
let cScore = 0


h.forEach((item, index) => {
    item.addEventListener('click', () => {
        hBox.innerHTML = ''
        cBox.innerHTML = ''
        hBox.appendChild(item.cloneNode(true))
        let random = Math.floor(Math.random() * 3)
        console.log(random);
        cBox.appendChild(c[random].cloneNode(true))
        if (index === 0 && random === 0) {
            res.innerHTML = 'draw'
        } else if (index === 0 && random === 1) {
            res.innerHTML = 'human win'
            hScore++
            hS.innerHTML = hScore
        } else if (index === 0 && random === 2) {
            res.innerHTML = 'computer win'
            cScore++
            cS.innerHTML = cScore
        } else if (index === 1 && random === 0) {
            res.innerHTML = 'computer win'
            cScore++
            cS.innerHTML = cScore
        } else if (index === 1 && random === 1) {
            res.innerHTML = 'draw'
        } else if (index === 1 && random === 2) {
            res.innerHTML = 'human win'
            hScore++
            hS.innerHTML = hScore
        } else if (index === 2 && random === 0) {
            res.innerHTML = 'human win'
            hScore++
            hS.innerHTML = hScore
        } else if (index === 2 && random === 1) {
            res.innerHTML = 'computer win'
            cScore++
            cS.innerHTML = cScore
        } else if (index === 2 && random === 2) {
            res.innerHTML = 'draw'
        }
        if (hScore >= 3) {
            res.innerHTML = 'Human win'
            again()
        } else if (cScore >= 3) {
            res.innerHTML = 'computer win'
            again()
        }
    })

})

again = () => {
    hScore = 0
    cScore = 0
    hBox.innerHTML = ''
    cBox.innerHTML = ''
    cS.innerHTML = 0
    hS.innerHTML = 0
}

againBtn.addEventListener('click', () => {
    again()
})