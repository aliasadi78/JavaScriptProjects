let bodyEl = document.getElementById('body')
randomGen = () => {
    let result = '#';
    const alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    for (let index = 0; index < 6; index++) {
        result += alphabet[Math.floor((Math.random() * 16))]
    }
    return result
}
writeValue = (value) => {
    document.querySelector('.background-value').innerHTML = value
}
let randomFirst = randomGen()
writeValue(randomFirst);
bodyEl.style.backgroundColor = randomFirst
let btn = document.getElementById('btn').addEventListener('click',
    () => {
        random = randomGen();
        writeValue(random);
        bodyEl.style.backgroundColor = random;
    }
)