const food = [
    {
        name: 'Buttermilk Pancakes',
        price: '$15.99',
        image: 'images/item-1.jpeg',
        kind: 'Breakfast',
        description: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        name: 'Diner Double',
        price: '$13.99',
        image: 'images/item-2.jpeg',
        kind: 'Lunch',
        description: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats'
    },
    {
        name: 'Godzilla Milkshake',
        price: '$6.99',
        image: 'images/item-3.jpeg',
        kind: 'Shakes',
        description: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.'
    },
    {
        name: 'Country Delight',
        price: '$20.99',
        image: 'images/item-4.jpeg',
        kind: 'Breakfast',
        description: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,'
    },
    {
        name: 'Egg Attack',
        price: '$22.99',
        image: 'images/item-5.jpeg',
        kind: 'Lunch',
        description: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90s pop-up'
    },
    {
        name: 'Oreo Dream',
        price: '$18.99',
        image: 'images/item-6.jpeg',
        kind: 'Shakes',
        description: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday'
    },
    {
        name: 'Bacon Overflow',
        price: '$8.99',
        image: 'images/item-7.jpeg',
        kind: 'Breakfast',
        description: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird'
    },
    {
        name: 'American Classic',
        price: '$12.99',
        image: 'images/item-8.jpeg',
        kind: 'Lunch',
        description: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut'
    },
    {
        name: 'Quarantine Buddy',
        price: '$16.99',
        image: 'images/item-9.jpeg',
        kind: 'Shakes',
        description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.'
    },
    {
        name: 'Steak Dinner',
        price: '$39.99',
        image: 'images/item-10.jpeg',
        kind: 'Dinner',
        description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.'
    },
]

const btns = document.querySelectorAll('.btn')
const foods = document.querySelector('.foods')
let result = []
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        foods.innerHTML = ''
        result = food.filter((item) => item.kind === btn.innerHTML || btn.innerHTML === 'All')
        result.map((item) => {
            foods.innerHTML += `
                <div class="cart">
                    <p class="name">${item.name}</p>
                    <p class="price">${item.price}</p>
                    <p class="image"><img src=${item.image}></img></p>
                    <p class="description">${item.description}</p>
                </div>
            `
        })
    })

})
