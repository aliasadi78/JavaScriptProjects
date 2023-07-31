const questions = document.querySelectorAll('.question')
let open = false
questions.forEach((question) => {
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', () => {
        open = !open
        questions.forEach((item) => {
            const btn1 = item.querySelector('.question-btn')
            if (item !== question) {
                item.classList.remove('show-text')
                btn1.innerHTML = '<i class="fas fa-plus"></i>'
            }

        })
        question.classList.toggle('show-text')
        if (btn.innerHTML === '<i class="fas fa-minus"></i>') {
            btn.innerHTML = '<i class="fas fa-plus"></i>'
        } else {
            btn.innerHTML = '<i class="fas fa-minus"></i>'
        }

    })
})
