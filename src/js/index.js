const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let jumping = false
creatCactus()

document.addEventListener('keypress', (event) => {
    if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyW") {
        if (!jumping) {
            jump()
        }
    }
})

function jump() {
    let position = 0
    jumping = true
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval)
                    jumping = false
                } else {
                    position -= 10
                    dino.style.bottom = `${position}px`
                }
            }, 30);
        } else {
            position += 10
            dino.style.bottom = `${position}px`
        }
    }, 30);
}

function creatCactus() {
    let cactus = document.createElement('div')
    cacutus.classList.add('cactus')
    let cactusPosition = 1000
    cactus.style.left = `${cactusPosition} px`

    background.appendChild(cactus)
}