const person = [
    {
        image: 'images/1.jpg',
        name: 'Reza',
        job: 'BackEnd',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem.`
    },
    {
        image: 'images/2.jpg',
        name: 'Mohammad',
        job: 'Django',
        description: `Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.`
    },
    {
        image: 'images/3.jpg',
        name: 'Hossein',
        job: 'JavaScript',
        description: `Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.`
    },
    {
        image: 'images/4.jpg',
        name: 'Hasan',
        job: 'ReactJS',
        description: `Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque.`
    },
]

let img = document.querySelector('#img-tag');
let names = document.querySelector('#name');
let job = document.querySelector('#job');
let description = document.querySelector('#description');
let btn = document.querySelector('#btn');

const setPerson = (number) => {
    img.src = person[number].image
    names.innerHTML = person[number].name
    job.innerHTML = person[number].job
    description.innerHTML = person[number].description
}

setPerson(0)

let right = document.querySelector('.fa-chevron-right');
let left = document.querySelector('.fa-chevron-left');

let number = 0;

right.addEventListener('click', () => {
    number === 3 ? number = 0 : number++
    setPerson(number)
})

left.addEventListener('click', () => {
    number === 0 ? number = 3 : number--
    setPerson(number)
})

btn.addEventListener('click', () => {
    number = Math.floor(Math.random() * 4)
    setPerson(number)
})