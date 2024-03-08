const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const offset = {
    x: -1450,
    y: -800
}

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
)

const linus = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: linusDown,
    frames: {
        max: 4
    },
    sprites: {
        up: linusUp,
        down: linusDown,
        left: linusLeft,
        right: linusRight
    }
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const adminTable = new Interactable({
    position: {
        x: -690,
        y: 200
    },
    image: adminTableInitial,
    sprites: {
        init: adminTableInitial,
        high: adminTableHighlighted,
        inter: adminTableInteracted
    },
})

const plcTable1 = new Interactable({
    position: {
        x: 150,
        y: 1000
    },
    image: plcTable1Initial,
    sprites: {
        init: plcTable1Initial,
        high: plcTable1Highlighted,
        inter: plcTable1Interacted
    }
})

const plcTable2 = new Interactable({
    position: {
        x: 150,
        y: 720
    },
    image: plcTable2Initial,
    sprites: {
        init: plcTable2Initial,
        high: plcTable2Highlighted,
        inter: plcTable2Interacted
    }
})

const cups = new Interactable({
    position: {
        x: -930,
        y: 0
    },
    image: cupsInitial,
    sprites: {
        init: cupsInitial,
        high: cupsHighlighted,
        inter: cupsInteracted
    }
})

const adminBell = new Interactable({
    position: {
        x: -250,
        y: 0
    },
    image: adminBellInitial,
    sprites: {
        init: adminBellInitial,
        high: adminBellHighlighted,
    }
})

const gong = new Interactable({
    position: {
        x: 470,
        y: 200
    },
    image: gongInitial,
    sprites: {
        init: gongInitial,
        high: gongHighlighted
    }
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    f: {
        pressed: false
    }
}

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 80) {
    collisionsMap.push(collisions.slice(i, 80 + i))
}

const boundaries = []
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                }))
    })
})

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

let gameTime = 0
let timerInterval

function displayTimer() {
    const timerElement = document.getElementById('timer')
    const minutes = Math.floor(gameTime / 60)
    const seconds = gameTime % 60
    timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

function startTimer() {
    timerInterval = setInterval(() => {
        gameTime++
        displayTimer()
    }, 1000)
}

function stopTimer() {
    clearInterval(timerInterval)
}

// function spawnPlayer() {
//     document.getElementById('game-screen').style.display = 'block'
//     document.getElementById('timer').style.display = 'block'
//     document.getElementById('main-menu').style.display = 'none'
//     document.getElementById('testimage').style.display = 'none'
// }
// function openInstructions() {
//     document.getElementById('main-menu').style.display = 'none'
//     document.getElementById('testimage').style.display = 'none'
//     document.getElementById('instruction-screen').style.display = 'block'
//     document.getElementById('back').style.display = 'block'
// }
// function closeInstructions() {
//     document.getElementById('main-menu').style.display = 'block'
//     document.getElementById('testimage').style.display = 'block'
//     document.getElementById('back').style.display = 'none'
// }
// function restartGame() {
//     document.getElementById('main-menu').style.display = 'block'
//     document.getElementById('testimage').style.display = 'block'
//     document.getElementById('end-screen').style.display = 'none'
// }

// document.getElementById('start-game').addEventListener('click', () => {
//     spawnPlayer()
// }) 
// document.getElementById('instructions').addEventListener('click', () => {
//     openInstructions()
// })
// document.getElementById('back').addEventListener('click', () => {
//     closeInstructions()
// })
// document.getElementById('restart').addEventListener('click', () => {
//     restartGame()
// })

const interactables = [adminTable, plcTable1, plcTable2, cups, adminBell, gong]
const movables = [background, ...boundaries, ...interactables]

let objectState = {
    adminTable: {
        highlighted: false,
        interacted: false
    }, plcTable1: {
        highlighted: false,
        interacted: false
    }, plcTable2: {
        highlighted: false,
        interacted: false
    }, cups: {
        highlighted: false,
        interacted: false
    }, adminBell: {
        highlighted: false
    }, gong: {
        highlighted: false,
        timerStarted: false,
        timerStopped: false
    }
}

const imageConstants = [
    linusDown, linusLeft, linusRight, linusUp, 
    image,
    adminTableInitial, adminTableHighlighted, adminTableInteracted,
    plcTable1Initial, plcTable1Highlighted, plcTable1Interacted,
    plcTable2Initial, plcTable2Highlighted, plcTable2Interacted,
    cupsInitial, cupsHighlighted, cupsInteracted,
    adminBellInitial, adminBellHighlighted,
    gongInitial, gongHighlighted,
]

let imagesLoaded = 0

function loadImage(imageConstant) {
    const image = new Image()
    image.onload = function() {
        if (imagesLoaded < imageConstants.length) {
            loadImage(imageConstants[imagesLoaded])
            imagesLoaded++
        } else {
            animate()
            imagesLoaded = 0
        }
    }
    image.src = imageConstant.src
}

loadImage(imageConstants[0])

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundaries => {
        boundaries.draw()
    })
    linus.draw()
    interactables.forEach(interactable => {
        interactable.draw()
    })

    const adminTableDistance = calculateFourtableVerticalDistance(linus, adminTable)
    const plcTable1Distance = calculateFourtableVerticalDistance(linus, plcTable1)
    const plcTable2Distance = calculateFourtableVerticalDistance(linus, plcTable2)
    const cupsDistance = calculateCupsDistance(linus, cups)
    const adminBellDistance = calculateAdminBellDistance(linus, adminBell)
    const gongDistance = calculateGongDistance(linus, gong)


    let moving = true
    linus.moving = false
    let gongable = true

    if (keys.w.pressed) {
        linus.moving = true
        linus.image = linus.sprites.up
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: linus,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 4
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        } if (moving)
            movables.forEach((movables) => {
                movables.position.y += 4
            })
    } else if (keys.a.pressed) {
        linus.moving = true
        linus.image = linus.sprites.left
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: linus,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x + 4,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movables) => {
                movables.position.x += 4
            })
    } else if (keys.s.pressed) {
        linus.moving = true
        linus.image = linus.sprites.down
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: linus,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 4
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movables) => {
                movables.position.y -= 4
            })
    } else if (keys.d.pressed) {
        linus.moving = true
        linus.image = linus.sprites.right
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: linus,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x - 4,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movables) => {
                movables.position.x -= 4
            })
    } if (keys.f.pressed) {
        if (objectState.adminTable.highlighted) {
            objectState.adminTable.interacted = true
            objectState.adminTable.highlighted = false
        } if (objectState.plcTable1.highlighted) {
            objectState.plcTable1.interacted = true
            objectState.plcTable1.highlighted = false
        } if (objectState.plcTable2.highlighted) {
            objectState.plcTable2.interacted = true
            objectState.plcTable2.highlighted = false
        } if (objectState.cups.highlighted) {
            objectState.cups.interacted = true
            objectState.cups.highlighted = false
        } if (objectState.adminBell.highlighted) {
            audio.Bell.play()
        }
    }
    objectState.adminTable.highlighted = adminTableDistance <= 160;
    adminTable.image = 
    (objectState.adminTable.interacted) ? 
    adminTable.sprites.inter : 
    (objectState.adminTable.highlighted ? adminTable.sprites.high : adminTable.sprites.init)

    objectState.plcTable1.highlighted = plcTable1Distance <= 160;
    plcTable1.image = 
    (objectState.plcTable1.interacted) ? 
    plcTable1.sprites.inter : 
    (objectState.plcTable1.highlighted ? plcTable1.sprites.high : plcTable1.sprites.init)

    objectState.plcTable2.highlighted = plcTable2Distance <= 160;
    plcTable2.image = 
    (objectState.plcTable2.interacted) ? 
    plcTable2.sprites.inter : 
    (objectState.plcTable2.highlighted ? plcTable2.sprites.high : plcTable2.sprites.init)

    objectState.cups.highlighted = cupsDistance <= 160;
    cups.image = 
    (objectState.cups.interacted) ? 
    cups.sprites.inter : 
    (objectState.cups.highlighted ? cups.sprites.high : cups.sprites.init)

    objectState.gong.highlighted = gongDistance <= 90;
    gong.image = 
    (!objectState.gong.interacted && objectState.gong.highlighted) ? 
    gong.sprites.high : gong.sprites.init;

    objectState.adminBell.highlighted = adminBellDistance <= 40;
    adminBell.image = 
    (!objectState.adminBell.interacted && objectState.adminBell.highlighted) ? 
    adminBell.sprites.high : adminBell.sprites.init;
}



window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
        case 'f':
            keys.f.pressed = true
            lastKey = 'f'
            break
    }
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case 'f':
            keys.f.pressed = false
            break
    }
})

