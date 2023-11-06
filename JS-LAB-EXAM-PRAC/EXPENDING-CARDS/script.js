const panels = document.querySelectorAll('.panel')


panels.forEach (panel => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
        panel.style.border = "12px solid black";
    })
})

function removeActiveClass () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}