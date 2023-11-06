const cupSmall = document.querySelectorAll('.cup-small')
const liters = document.querySelector('#liters')
const percentage = document.querySelector('#percentage')
const remained = document.querySelector('#remained')

cupSmall.forEach((cup, idx) => {
    cup.addEventListener('click', () => fillCups(idx))
})

function fillCups(idx) {
    if (idx===cupSmall.length-1 && cupSmall[idx].classList.contains("full")){
        idx--;
    }
    else if(cupSmall[idx].classList.contains('full') && !cupSmall[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    cupSmall.forEach((cup, index2) => {
        if(index2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    fillBigContainer()
}

function fillBigContainer() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;

    if(fullCups == 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.opacity = 1
        percentage.style.height = `${fullCups / cupSmall.length * 330}px`
        percentage.innerText = `${fullCups / cupSmall.length * 100}%`
    }

    if(fullCups === cupSmall.length) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (0.25 * fullCups)}Liters`
    }
}