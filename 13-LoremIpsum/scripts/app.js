const texts = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae eum vel odit ipsa porro hic dignissimos veniam, culpa voluptate ad unde perferendis totam illum atque quidem laborum, earum optio.',
    'Quod, ab veritatis consectetur ipsam nulla consequuntur architecto sunt iste laborum nihil. A, laboriosam repellat dolorem molestiae corrupti consectetur minus magnam ex suscipit autem, nihil incidunt odio iure voluptatem ab?',
    'Repellat sunt, mollitia sapiente aliquid dolorum repellendus sed natus distinctio veniam veritatis adipisci facilis obcaecati? Dicta mollitia rerum veritatis maiores odio id, unde quaerat itaque consequuntur beatae incidunt quam exercitationem.',
    'Autem dolorum quia optio, doloremque numquam officia modi distinctio culpa nesciunt quae esse rerum minus quisquam pariatur ipsa corporis quod. Voluptatum dolorem architecto corporis, illo hic doloremque omnis praesentium impedit?',
    'Rerum corrupti esse dolorum modi nostrum earum amet optio enim tempora, voluptatum provident tempore illum fugiat maiores doloremque quia. Consequatur optio ipsam doloribus nihil ut sunt rerum eligendi ea ab.',
    'Vitae quod numquam et aperiam enim, repellendus illum ut asperiores in, similique sint. Voluptatibus eaque, quibusdam accusamus error molestiae totam? Esse a aperiam vero error, veniam voluptatum magnam nobis consequuntur!',
    'Culpa perferendis nihil ab sint earum tenetur minus placeat eveniet, quos eligendi numquam, corrupti dolores, excepturi officia unde perspiciatis deserunt ratione deleniti. Dolores, neque corrupti! Sapiente quidem rem excepturi ratione!',
    'Quia dicta distinctio minus nesciunt atque molestias nemo animi, rerum possimus tenetur a, nam molestiae ipsa, corrupti facilis nulla libero aperiam deleniti voluptas! Debitis possimus in adipisci, rem porro saepe?',
    'Nulla quibusdam consequuntur eius, id facilis voluptates possimus atque, impedit iste libero quidem consectetur sed eveniet ducimus laboriosam? Suscipit officiis nulla exercitationem possimus sapiente officia, ex aliquam quae earum est.'
]

const form = document.querySelector('.form')
const amount = document.querySelector('.amount')
let result = document.querySelector('.text')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = parseInt(amount.value)
    const random = Math.floor(Math.random() * texts.length)

    if (isNaN(value) || value < 0 || value > 9) {
        result.innerHTML = `<p class="result">${texts[random]}</p>`
    } else {
        let tempText = texts.slice(0, value)
        tempText = tempText.map(item => {
            return `<p class="result">${item}</p>`
        }).join("")
        result.innerHTML = tempText
    }
})

