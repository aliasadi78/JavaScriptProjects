let order = []
let playerOrder = []
let flash
let turn
let good
let compTurn
let interValId
let strict = false
let noise = true
let on = false
let win

const turnCounter = document.querySelector('#turn')
const topLeft = document.querySelector('#top-left')
const topRight = document.querySelector('#top-right')
const bottomRight = document.querySelector('#bottom-right')
const bottomLeft = document.querySelector('#bottom-left')
const strictButton = document.querySelector('#strict')
const onButton = document.querySelector('#on')
const startButton = document.querySelector('#start')

strictButton.addEventListener('click', () => {
    strictButton.checked ? strict = true : strict = false
})

onButton.addEventListener('click', () => {
    if (onButton.checked) {
        on = true
        turnCounter.innerHTML = '-'
    } else {
        on = false
        turnCounter.innerHTML = ''
        clearColor()
        clearInterval(interValId)
    }
})
startButton.addEventListener('click', () => {
    if (on || win) {
        play()
    }
})
play = () => {
    win = false
    order = []
    playerOrder = []
    flash = 0
    intervalId = 0
    turn = 1
    turnCounter.innerHTML = 1
    good = true
    for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true

    interValId = setInterval(gameTurn, 800)
}

gameTurn = () => {
    on = false

    if (flash == turn) {
        clearInterval(interValId)
        compTurn = false
        clearColor()
        on = true
    }

    if (compTurn) {
        clearColor()
        setTimeout(() => {
            if (order[flash] == 1) one()
            if (order[flash] == 2) two()
            if (order[flash] == 3) three()
            if (order[flash] == 4) four()
            flash++
        }, 200)
    }

}

one = () => {
    if (noise) {
        let audio = document.getElementById('clip1')
        audio.play()
    }
    noise = true
    topLeft.style.backgroundColor = 'lightgreen'
}
two = () => {
    if (noise) {
        let audio = document.getElementById('clip2')
        audio.play()
    }
    noise = true
    topRight.style.backgroundColor = 'tomato'
}
three = () => {
    if (noise) {
        let audio = document.getElementById('clip3')
        audio.play()
    }
    noise = true
    bottomRight.style.backgroundColor = 'yellow'
}
four = () => {
    if (noise) {
        let audio = document.getElementById('clip4')
        audio.play()
    }
    noise = true
    bottomLeft.style.backgroundColor = 'lightskyblue'
}
clearColor = () => {
    topLeft.style.backgroundColor = 'darkgreen'
    topRight.style.backgroundColor = 'darkred'
    bottomRight.style.backgroundColor = 'goldenrod'
    bottomLeft.style.backgroundColor = 'darkblue'
}

flashColor = () => {
    topLeft.style.backgroundColor = 'lightgreen'
    topRight.style.backgroundColor = 'tomato'
    bottomRight.style.backgroundColor = 'yellow'
    bottomLeft.style.backgroundColor = 'lightskyblue'
}

topLeft.addEventListener('click', () => {
    if (on) {
        playerOrder.push(1)
        check()
        one()
        if (!win) {
            setTimeout(() => { clearColor() }, 300)
        }
    }
})
topRight.addEventListener('click', () => {
    if (on) {
        playerOrder.push(2)
        check()
        two()
        if (!win) {
            setTimeout(() => { clearColor() }, 300)
        }
    }
})
bottomRight.addEventListener('click', () => {
    if (on) {
        playerOrder.push(3)
        check()
        three()
        if (!win) {
            setTimeout(() => { clearColor() }, 300)
        }
    }
})
bottomLeft.addEventListener('click', () => {
    if (on) {
        playerOrder.push(4)
        check()
        four()
        if (!win) {
            setTimeout(() => { clearColor() }, 300)
        }
    }
})

check = () => {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) {
        good = false
    }
    if (playerOrder.length == 3 && good) {
        winGame()
    }

    if (good == false) {
        flashColor()
        turnCounter.innerHTML = "NO!"
        setTimeout(() => {
            turnCounter.innerHTML = turn
            clearColor()

            if (strict) {
                play()
            } else {
                compTurn = true
                flash = 0
                playerOrder = []
                good = true
                interValId = setInterval(gameTurn, 800)
            }

        }, 800)

        noise = false
    }

    if (turn === playerOrder.length && good && !win) {
        turn++
        compTurn = true
        flash = 0
        playerOrder = []
        turnCounter.innerHTML = turn
        interValId = setInterval(gameTurn, 800)
    }
}

winGame = () => {
    flashColor()
    turnCounter.innerHTML = "WIN!"
    on = false
    win = true
}
