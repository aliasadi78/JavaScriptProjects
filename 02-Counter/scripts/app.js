const decreaseBtn = document.querySelector('.decrease')
const resetBtn = document.querySelector('.reset')
const increaseBtn = document.querySelector('.increase')
let count = 0;
decreaseBtn.addEventListener('click', () => {
    count--;
    writeCount(count)
})
resetBtn.addEventListener('click', () => {
    count = 0;
    writeCount(count)
})
increaseBtn.addEventListener('click', () => {
    count++;
    writeCount(count)
})
writeCount = (count) => {
    document.querySelector('#count').innerHTML = count
}