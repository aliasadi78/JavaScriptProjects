const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

const tempDate = new Date()
const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()
const tempDay = tempDate.getDate()

const futureDate = new Date(tempYear, tempMonth, tempDay + 1, 18, 35, 50);

const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const weekday = weekdays[futureDate.getDay()]
const date = futureDate.getDate()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime()

getRemaindingTime = () => {
    const today = new Date().getTime()
    const t = futureTime - today

    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinuets = 60 * 1000

    let days = Math.floor(t / oneDay)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMinuets)
    let seconds = Math.floor((t % oneMinuets) / 1000)

    const values = [days, hours, minutes, seconds]

    format = (item) => {
        if (item < 10) {
            return (item = `0${item}`)
        }
        return item
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index])
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
    }
}

let countdown = setInterval(getRemaindingTime,1000)

getRemaindingTime()


