const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
const displayWidth = document.querySelector('.background').clientWidth

//pulo do dinossauro
let position = 0

//sons
const jumpSound = document.getElementById("jump")

let jumping = false

creatCactus()

document.addEventListener('keypress', (event) => {
    if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyW") {
        if (!jumping) {
            jump()
            jumpSound.play()
        }
    }
})

function jump() {

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
    cactus.classList.add('cactus')

    let randomTime = Math.floor(Math.random() * 6000)

    let cactusPosition = displayWidth - 60
    cactus.style.left = `${cactusPosition}px`

    background.appendChild(cactus)

    let leftInterval = setInterval(() => {

        if (cactusPosition < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //gameover
            clearInterval(leftInterval)
            document.body.innerHTML = "<h1 class='gameover'>FIM DE JOGO!</ h1>"
        } else {
                    cactusPosition -= 10
            cactus.style.left = `${cactusPosition}px`
        }
    }, 25);

                setTimeout(creatCactus, randomTime);
}