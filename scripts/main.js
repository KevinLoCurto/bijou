"use strict";

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

const zeriNPC = new Sprite({
    position: {
        x: 110,
        y: -415
    },
    image: npcZeri
})

const kevinNPC = new Sprite({
    position: {
        x: -250,
        y: 240
    },
    image: npcKevin
})

const gianNPC = new Sprite({
    position: {
        x: 770,
        y: 80
    },
    image: npcGian
})

const simonNPC = new Sprite({
    position: {
        x: 140,
        y: 875
    },
    image: npcSimon
})

const background = new Sprite({
    position: {
        x: -1450,
        y: -1440
    },
    image: image
})

const christineTable = new Sprite({
    position: {
        x: 430,
        y: -280
    },
    image: cT
})

const edoTable = new Sprite({
    position: {
        x: 710,
        y: 280
    },
    image: eT
})

const jokiTable = new Sprite({
    position: {
        x: 270,
        y: 1320
    },
    image: jT
})

const karinTable = new Sprite({
    position: {
        x: 110,
        y: -280
    },
    image: kT
})

const rosaTable = new Sprite({
    position: {
        x: 110,
        y: 240
    },
    image: rT
})

const ursTable = new Sprite({
    position: {
        x: 990,
        y: 0
    },
    image: uT
})

const glassTable1 = new Sprite({
    position: {
        x: -530,
        y: 920
    },
    image: gT1
})

const glassTable2 = new Sprite({
    position: {
        x: -890,
        y: 800
    },
    image: gT2
})

const glassTable3 = new Sprite({
    position: {
        x: -810,
        y: 1120
    },
    image: gT3
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

const sink = new Interactable({
    position: {
        x: -490,
        y: 0
    },
    image: sinkInitial,
    sprites: {
        init: sinkInitial,
        high: sinkHighlighted,
        inter: sinkInteracted
    },
})

const adminDesk = new Interactable({
    position: {
        x: -370,
        y: 80
    },
    image: adminDeskInitial,
    sprites: {
        init: adminDeskInitial,
        high: adminDeskHighlighted,
        inter: adminDeskInteracted
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

const plcTable3 = new Interactable({
    position: {
        x: 110,
        y: -600
    },
    image: plcTable3Initial,
    sprites: {
        init: plcTable3Initial,
        high: plcTable3Highlighted,
        inter: plcTable3Interacted
    }
})

const plcTable4 = new Interactable({
    position: {
        x: 350,
        y: -600
    },
    image: plcTable4Initial,
    sprites: {
        init: plcTable4Initial,
        high: plcTable4Highlighted,
        inter: plcTable4Interacted
    }
})

const plcTable5 = new Interactable({
    position: {
        x: 510,
        y: 1200
    },
    image: plcTable5Initial,
    sprites: {
        init: plcTable5Initial,
        high: plcTable5Highlighted,
        inter: plcTable5Interacted
    }
})

const plcTable6 = new Interactable({
    position: {
        x: 510,
        y: 880
    },
    image: plcTable6Initial,
    sprites: {
        init: plcTable6Initial,
        high: plcTable6Highlighted,
        inter: plcTable6Interacted
    }
})

const plcTable7 = new Interactable({
    position: {
        x: 110,
        y: -80
    },
    image: plcTable7Initial,
    sprites: {
        init: plcTable7Initial,
        high: plcTable7Highlighted,
        inter: plcTable7Interacted
    }
})

const plcTable8 = new Interactable({
    position: {
        x: 510,
        y: 680
    },
    image: plcTable8Initial,
    sprites: {
        init: plcTable8Initial,
        high: plcTable8Highlighted,
        inter: plcTable8Interacted
    }
})

const plcTable9 = new Interactable({
    position: {
        x: 350,
        y: -80
    },
    image: plcTable9Initial,
    sprites: {
        init: plcTable9Initial,
        high: plcTable9Highlighted,
        inter: plcTable9Interacted
    }
})

const plcTable10 = new Interactable({
    position: {
        x: 790,
        y: -80
    },
    image: plcTable10Initial,
    sprites: {
        init: plcTable10Initial,
        high: plcTable10Highlighted,
        inter: plcTable10Interacted
    }
})

const plcTable11 = new Interactable({
    position: {
        x: 790,
        y: -320
    },
    image: plcTable11Initial,
    sprites: {
        init: plcTable11Initial,
        high: plcTable11Highlighted,
        inter: plcTable11Interacted
    }
})

const plcTable12 = new Interactable({
    position: {
        x: -130,
        y: 1240
    },
    image: plcTable12Initial,
    sprites: {
        init: plcTable12Initial,
        high: plcTable12Highlighted,
        inter: plcTable12Interacted
    }
})

const plcTable13 = new Interactable({
    position: {
        x: -130,
        y: 960
    },
    image: plcTable13Initial,
    sprites: {
        init: plcTable13Initial,
        high: plcTable13Highlighted,
        inter: plcTable13Interacted
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

const printer = new Interactable({
    position: {
        x: -135,
        y: 560
    },
    image: printerInitial,
    sprites: {
        init: printerInitial,
        high: printerHighlighted,
        inter: printerInteracted
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
    },
    b: {
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

function spawnPlayer() {
    document.getElementById('character-selection-screen').style.display = 'none'
    document.getElementById('game-screen').style.display = 'block'
    document.getElementById('timer').style.display = 'block'
    document.getElementById('tasklist').style.display = 'block'
    audio.sBijou.play()
}
function openInstructions() {
    document.getElementById('main-menu').style.display = 'none'
    document.getElementById('testimage').style.display = 'none'
    document.getElementById('instruction-screen').style.display = 'block'
    document.getElementById('back').style.display = 'block'
}
function closeInstructions() {
    document.getElementById('main-menu').style.display = 'block'
    document.getElementById('testimage').style.display = 'block'
    document.getElementById('end-screen').style.display = 'none'
    document.getElementById('instruction-screen').style.display = 'none'
    document.getElementById('back').style.display = 'none'
}
function openCharacterSelection() {
    document.getElementById('main-menu').style.display = 'none'
    document.getElementById('testimage').style.display = 'none'
    document.getElementById('character-selection-screen').style.display = 'block'
}
function restartGame() {
    document.getElementById('main-menu').style.display = 'block'
    document.getElementById('testimage').style.display = 'block'
    document.getElementById('timer').style.display = 'none'
    document.getElementById('restart').style.display = 'none'
    document.getElementById('end-screen').style.display = 'none'
    document.getElementById('bad-ending').style.display = 'none'
}
function goodEnding() {
    document.getElementById('game-screen').style.display = 'none'
    document.getElementById('tasklist').style.display = 'none'
    document.getElementById('timer').style.display = 'none'
    document.getElementById('end-screen').style.display = 'block'
    document.getElementById('restart').style.display = 'block'
    stopTimer()
}
function badEnding() {
    document.getElementById('game-screen').style.display = 'none'
    document.getElementById('tasklist').style.display = 'none'
    document.getElementById('timer').style.display = 'none'
    document.getElementById('bad-ending').style.display = 'block'
    document.getElementById('restart').style.display = 'block'
    audio.harryZemeschiss.play()
    stopTimer()
}

document.getElementById('character-select').addEventListener('click', () => {
    openCharacterSelection()
})
document.getElementById('start-game').addEventListener('click', () => {
    spawnPlayer()
    displayTimer()
})
document.getElementById('instructions').addEventListener('click', () => {
    openInstructions()
})
document.getElementById('back').addEventListener('click', () => {
    closeInstructions()
})
document.getElementById('restart').addEventListener('click', () => {
    restartGame()
})

const npcs = [
    zeriNPC, kevinNPC, gianNPC, simonNPC
]

const stoicObjects = [
    christineTable, edoTable, jokiTable, karinTable, rosaTable, ursTable,
    glassTable1, glassTable2, glassTable3
]
const interactables = [
    adminTable, adminDesk, sink, adminBell,
    plcTable1, plcTable2, plcTable3, plcTable4, plcTable5, plcTable6,
    plcTable7, plcTable8, plcTable9, plcTable10, plcTable11, plcTable12, plcTable13,
    cups, printer, gong
]
const movables = [
    background, ...boundaries,
    ...interactables, ...stoicObjects,
    ...npcs
]

let objectState = {
    adminTable: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable1: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable2: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable3: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable4: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable5: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable6: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable7: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable8: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable9: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable10: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable11: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable12: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, plcTable13: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, cups: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, adminBell: {
        highlighted: false
    }, gong: {
        highlighted: false,
        audioPlay: false,
        timerStarted: false,
        timerStopped: true
    }, adminDesk: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, sink: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, printer: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }
}

let npcState = {
    zeri: {
        delayed: false,
    },
    kevin: {
        delayed: false
    },
    gian: {
        delayed: false
    },
    simon: {
        delayed: false
    }
}

const imageConstants = [
    linusDown, linusLeft, linusRight, linusUp, image,
    npcZeri,
    adminTableInitial, adminTableHighlighted, adminTableInteracted,
    plcTable1Initial, plcTable1Highlighted, plcTable1Interacted,
    plcTable2Initial, plcTable2Highlighted, plcTable2Interacted,
    plcTable3Initial, plcTable3Highlighted, plcTable3Interacted,
    plcTable4Initial, plcTable4Highlighted, plcTable4Interacted,
    plcTable5Initial, plcTable5Highlighted, plcTable5Interacted,
    plcTable6Initial, plcTable6Highlighted, plcTable6Interacted,
    plcTable7Initial, plcTable7Highlighted, plcTable7Interacted,
    plcTable8Initial, plcTable8Highlighted, plcTable8Interacted,
    plcTable9Initial, plcTable9Highlighted, plcTable9Interacted,
    plcTable10Initial, plcTable10Highlighted, plcTable10Interacted,
    plcTable11Initial, plcTable11Highlighted, plcTable11Interacted,
    plcTable12Initial, plcTable12Highlighted, plcTable12Interacted,
    plcTable13Initial, plcTable13Highlighted, plcTable13Interacted,
    printerInitial, printerHighlighted, printerInteracted,
    cupsInitial, cupsHighlighted, cupsInteracted,
    adminDeskInitial, adminDeskHighlighted, adminDeskInteracted,
    sinkInitial, sinkHighlighted, sinkInteracted,
    adminBellInitial, adminBellHighlighted,
    gongInitial, gongHighlighted,
]

let imagesLoaded = 0
let interactablesDone = 0
let steckerliisteUsgmacht = 0
let tasseUfgruumt = 0
let gschirrspüelerIgruumt = 0
let druckerUfgruumt = 0
let bijouComplete = false
let gameEnded = false
let characterSelected = 0
imageConstants.forEach((imageConstant, index) => {
    const image = new Image();
    image.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === imageConstants.length) {
            animate();
        }
    }
    image.src = imageConstant.src;
})

function playerIsLinus() {
    document.getElementById('linus').style.display = 'block'
    document.getElementById('zeri').style.display = 'none'
    document.getElementById('kevin').style.display = 'none'
    document.getElementById('gian').style.display = 'none'
    document.getElementById('simon').style.display = 'none'
}
function playerIsKevin() {
    document.getElementById('linus').style.display = 'none'
    document.getElementById('zeri').style.display = 'none'
    document.getElementById('kevin').style.display = 'block'
    document.getElementById('gian').style.display = 'none'
    document.getElementById('simon').style.display = 'none'
}
function playerIsZeri() {
    document.getElementById('linus').style.display = 'none'
    document.getElementById('zeri').style.display = 'block'
    document.getElementById('kevin').style.display = 'none'
    document.getElementById('gian').style.display = 'none'
    document.getElementById('simon').style.display = 'none'
}
function playerIsGian() {
    document.getElementById('linus').style.display = 'none'
    document.getElementById('zeri').style.display = 'none'
    document.getElementById('kevin').style.display = 'none'
    document.getElementById('gian').style.display = 'block'
    document.getElementById('simon').style.display = 'none'
}
function playerIsSimon() {
    document.getElementById('linus').style.display = 'none'
    document.getElementById('zeri').style.display = 'none'
    document.getElementById('kevin').style.display = 'none'
    document.getElementById('gian').style.display = 'none'
    document.getElementById('simon').style.display = 'block'
}

document.getElementById('next-character').addEventListener('click', () => {
    if (characterSelected < 5) {
        characterSelected++
    }
})
document.getElementById('prev-character').addEventListener('click', () => {
    if (characterSelected > 0) {
        characterSelected--
    }
})

 



function animate() {
    window.requestAnimationFrame(animate);
    background.draw()
    boundaries.forEach(boundaries => {
        boundaries.draw()
    })
    linus.draw()
    stoicObjects.forEach(stoicObjects => {
        stoicObjects.draw()
    })
    interactables.forEach(interactable => {
        interactable.draw()
    })
    npcs.forEach(npc => {
        npc.draw()
    })

    console.log(characterSelected)

    const adminTableDistance = calculateFourtableVerticalDistance(linus, adminTable)
    const plcTable1Distance = calculateFourtableVerticalDistance(linus, plcTable1)
    const plcTable2Distance = calculateFourtableVerticalDistance(linus, plcTable2)
    const plcTable3Distance = calculateFourtableVerticalDistance(linus, plcTable3)
    const plcTable4Distance = calculateFourtableVerticalDistance(linus, plcTable4)
    const plcTable5Distance = calculateFourtableVerticalDistance(linus, plcTable5)
    const plcTable6Distance = calculateFourtableVerticalDistance(linus, plcTable6)
    const plcTable7Distance = calculateSinkDistance(linus, plcTable7)
    const plcTable8Distance = calculateSinkDistance(linus, plcTable8)
    const plcTable9Distance = calculateSinkDistance(linus, plcTable9)
    const plcTable10Distance = calculateCupsDistance(linus, plcTable10)
    const plcTable11Distance = calculateCupsDistance(linus, plcTable11)
    const plcTable12Distance = calculateCupsDistance(linus, plcTable12)
    const plcTable13Distance = calculateCupsDistance(linus, plcTable13)
    const cupsDistance = calculateCupsDistance(linus, cups)
    const adminDeskDistance = calculateCupsDistance(linus, adminDesk)
    const sinkDistance = calculateSinkDistance(linus, sink)
    const adminBellDistance = calculateAdminBellDistance(linus, adminBell)
    const printerDistance = calculatePrinterDistance(linus, printer)
    const gongDistance = calculateGongDistance(linus, gong)

    let moving = true
    linus.moving = false

    if (keys.w.pressed && !gameEnded) {
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
    } if (keys.a.pressed && !gameEnded) {
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
    } if (keys.s.pressed && !gameEnded) {
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
    } if (keys.d.pressed && !gameEnded) {
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
    } if (keys.f.pressed && !gameEnded) {
        if (objectState.adminTable.highlighted) {
            objectState.adminTable.interacted = true
            objectState.adminTable.highlighted = false
            if (!objectState.adminTable.audioPlay) {
                audio.Click.play()
                objectState.adminTable.audioPlay = true
            }
        } if (objectState.plcTable1.highlighted) {
            objectState.plcTable1.interacted = true
            objectState.plcTable1.highlighted = false
            if (!objectState.plcTable1.audioPlay) {
                audio.Click.play()
                objectState.plcTable1.audioPlay = true
            }
        } if (objectState.plcTable2.highlighted) {
            objectState.plcTable2.interacted = true
            objectState.plcTable2.highlighted = false
            if (!objectState.plcTable2.audioPlay) {
                audio.Click.play()
                objectState.plcTable2.audioPlay = true
            }
        } if (objectState.plcTable3.highlighted) {
            objectState.plcTable3.interacted = true
            objectState.plcTable3.highlighted = false
            if (!objectState.plcTable3.audioPlay) {
                audio.Click.play()
                objectState.plcTable3.audioPlay = true
            }
        } if (objectState.plcTable4.highlighted) {
            objectState.plcTable4.interacted = true
            objectState.plcTable4.highlighted = false
            if (!objectState.plcTable4.audioPlay) {
                audio.Click.play()
                objectState.plcTable4.audioPlay = true
            }
        } if (objectState.plcTable5.highlighted) {
            objectState.plcTable5.interacted = true
            objectState.plcTable5.highlighted = false
            if (!objectState.plcTable5.audioPlay) {
                audio.Click.play()
                objectState.plcTable5.audioPlay = true
            }
        } if (objectState.plcTable6.highlighted) {
            objectState.plcTable6.interacted = true
            objectState.plcTable6.highlighted = false
            if (!objectState.plcTable6.audioPlay) {
                audio.Click.play()
                objectState.plcTable6.audioPlay = true
            }
        } if (objectState.plcTable7.highlighted) {
            objectState.plcTable7.interacted = true
            objectState.plcTable7.highlighted = false
            if (!objectState.plcTable7.audioPlay) {
                audio.Click.play()
                objectState.plcTable7.audioPlay = true
            }
        } if (objectState.plcTable8.highlighted) {
            objectState.plcTable8.interacted = true
            objectState.plcTable8.highlighted = false
            if (!objectState.plcTable8.audioPlay) {
                audio.Click.play()
                objectState.plcTable8.audioPlay = true
            }
        } if (objectState.plcTable9.highlighted) {
            objectState.plcTable9.interacted = true
            objectState.plcTable9.highlighted = false
            if (!objectState.plcTable9.audioPlay) {
                audio.Click.play()
                objectState.plcTable9.audioPlay = true
            }
        } if (objectState.plcTable10.highlighted) {
            objectState.plcTable10.interacted = true
            objectState.plcTable10.highlighted = false
            if (!objectState.plcTable10.audioPlay) {
                audio.Click.play()
                objectState.plcTable10.audioPlay = true
            }
        } if (objectState.plcTable11.highlighted) {
            objectState.plcTable11.interacted = true
            objectState.plcTable11.highlighted = false
            if (!objectState.plcTable11.audioPlay) {
                audio.Click.play()
                objectState.plcTable11.audioPlay = true
            }
        } if (objectState.plcTable12.highlighted) {
            objectState.plcTable12.interacted = true
            objectState.plcTable12.highlighted = false
            if (!objectState.plcTable12.audioPlay) {
                audio.Click.play()
                objectState.plcTable12.audioPlay = true
            }
        } if (objectState.plcTable13.highlighted) {
            objectState.plcTable13.interacted = true
            objectState.plcTable13.highlighted = false
            if (!objectState.plcTable13.audioPlay) {
                audio.Click.play()
                objectState.plcTable13.audioPlay = true
            }
        } if (objectState.cups.highlighted) {
            objectState.cups.interacted = true
            objectState.cups.highlighted = false
            if (!objectState.cups.audioPlay) {
                audio.Cups.play()
                objectState.cups.audioPlay = true
            }
        } if (objectState.adminBell.highlighted) {
            audio.Bell.play()
        } if (objectState.adminDesk.highlighted) {
            objectState.adminDesk.interacted = true
            objectState.adminDesk.highlighted = false
            if (!objectState.adminTable.audioPlay) {
                audio.Click.play()
                objectState.cups.audioPlay = true
            }
        } if (objectState.sink.highlighted) {
            objectState.sink.interacted = true
            objectState.sink.highlighted = false
            if (!objectState.sink.audioPlay) {
                audio.Sink.play()
                objectState.sink.audioPlay = true
            }
        } if (objectState.printer.highlighted) {
            objectState.printer.interacted = true
            objectState.printer.highlighted = false
            if (!objectState.printer.audioPlay) {
                audio.Printer.play()
                objectState.printer.audioPlay = true
            }
        } if (objectState.gong.highlighted) {
            if (!objectState.gong.timerStarted) {
                keys.f.pressed = false
                startTimer()
                audio.Gong.play()
                playerAudio.linusStart.play()
                objectState.gong.timerStarted = true
                objectState.gong.timerStopped = false
            } else {
                keys.f.pressed = false
                audio.Gong.play()
                objectState.gong.timerStarted = false
                gameEnded = true
                if (interactablesDone === 18) {
                    stopTimer()
                    goodEnding()
                } else {
                    stopTimer()
                    badEnding()
                }
            }
        }
    } if (keys.b.pressed && !gameEnded) {
        playRandomDialogueKevin()
        keys.b.pressed = false
    }

    if (calculateNPCDistance(linus, zeriNPC) <= 200) {
        if (!npcState.zeri.delayed) {
            playRandomDialogueZeri()
            npcState.zeri.delayed = true
            setTimeout(() => {
                npcState.zeri.delayed = false
            }, 5000)
        }
    } if (calculateNPCDistance(linus, kevinNPC) <= 200) {
        if (!npcState.kevin.delayed) {
            playRandomDialogueKevin()
            npcState.kevin.delayed = true
            setTimeout(() => {
                npcState.kevin.delayed = false
            }, 5000)
        }
    } if (calculateNPCDistance(linus, gianNPC) <= 200) {
        if (!npcState.gian.delayed) {
            playRandomDialogueGian()
            npcState.gian.delayed = true
            setTimeout(() => {
                npcState.gian.delayed = false
            }, 5000)
        }
    } if (calculateNPCDistance(linus, simonNPC) <= 200) {
        if (!npcState.simon.delayed) {
            playRandomDialogueSimon()
            npcState.simon.delayed = true
            setTimeout(() => {
                npcState.simon.delayed = false
            }, 5000)
        }
    }

    objectState.gong.highlighted = gongDistance <= 90;
    gong.image =
        (!objectState.gong.interacted && objectState.gong.highlighted) ?
            gong.sprites.high : gong.sprites.init;

    objectState.adminBell.highlighted = adminBellDistance <= 40;
    adminBell.image =
        (!objectState.adminBell.interacted && objectState.adminBell.highlighted) ?
            adminBell.sprites.high : adminBell.sprites.init;

    if (objectState.gong.timerStarted) {
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

        objectState.plcTable3.highlighted = plcTable3Distance <= 240;
        plcTable3.image =
            (objectState.plcTable3.interacted) ?
                plcTable3.sprites.inter :
                (objectState.plcTable3.highlighted ? plcTable3.sprites.high : plcTable3.sprites.init)

        objectState.plcTable4.highlighted = plcTable4Distance <= 160;
        plcTable4.image =
            (objectState.plcTable4.interacted) ?
                plcTable4.sprites.inter :
                (objectState.plcTable4.highlighted ? plcTable4.sprites.high : plcTable4.sprites.init)

        objectState.plcTable5.highlighted = plcTable5Distance <= 160;
        plcTable5.image =
            (objectState.plcTable5.interacted) ?
                plcTable5.sprites.inter :
                (objectState.plcTable5.highlighted ? plcTable5.sprites.high : plcTable5.sprites.init)

        objectState.plcTable6.highlighted = plcTable6Distance <= 160;
        plcTable6.image =
            (objectState.plcTable6.interacted) ?
                plcTable6.sprites.inter :
                (objectState.plcTable6.highlighted ? plcTable6.sprites.high : plcTable6.sprites.init)

        objectState.plcTable7.highlighted = plcTable7Distance <= 120;
        plcTable7.image =
            (objectState.plcTable7.interacted) ?
                plcTable7.sprites.inter :
                (objectState.plcTable7.highlighted ? plcTable7.sprites.high : plcTable7.sprites.init)

        objectState.plcTable8.highlighted = plcTable8Distance <= 200;
        plcTable8.image =
            (objectState.plcTable8.interacted) ?
                plcTable8.sprites.inter :
                (objectState.plcTable8.highlighted ? plcTable8.sprites.high : plcTable8.sprites.init)

        objectState.plcTable9.highlighted = plcTable9Distance <= 120;
        plcTable9.image =
            (objectState.plcTable9.interacted) ?
                plcTable9.sprites.inter :
                (objectState.plcTable9.highlighted ? plcTable9.sprites.high : plcTable9.sprites.init)

        objectState.plcTable10.highlighted = plcTable10Distance <= 120;
        plcTable10.image =
            (objectState.plcTable10.interacted) ?
                plcTable10.sprites.inter :
                (objectState.plcTable10.highlighted ? plcTable10.sprites.high : plcTable10.sprites.init)

        objectState.plcTable11.highlighted = plcTable11Distance <= 120;
        plcTable11.image =
            (objectState.plcTable11.interacted) ?
                plcTable11.sprites.inter :
                (objectState.plcTable11.highlighted ? plcTable11.sprites.high : plcTable11.sprites.init)

        objectState.plcTable12.highlighted = plcTable12Distance <= 200;
        plcTable12.image =
            (objectState.plcTable12.interacted) ?
                plcTable12.sprites.inter :
                (objectState.plcTable12.highlighted ? plcTable12.sprites.high : plcTable12.sprites.init)

        objectState.plcTable13.highlighted = plcTable13Distance <= 200;
        plcTable13.image =
            (objectState.plcTable13.interacted) ?
                plcTable13.sprites.inter :
                (objectState.plcTable13.highlighted ? plcTable13.sprites.high : plcTable13.sprites.init)

        objectState.cups.highlighted = cupsDistance <= 160;
        cups.image =
            (objectState.cups.interacted) ?
                cups.sprites.inter :
                (objectState.cups.highlighted ? cups.sprites.high : cups.sprites.init)

        objectState.adminDesk.highlighted = adminDeskDistance <= 160;
        adminDesk.image =
            (objectState.adminDesk.interacted) ?
                adminDesk.sprites.inter :
                (objectState.adminDesk.highlighted ? adminDesk.sprites.high : adminDesk.sprites.init)

        objectState.sink.highlighted = sinkDistance <= 160;
        sink.image =
            (objectState.sink.interacted) ?
                sink.sprites.inter :
                (objectState.sink.highlighted ? sink.sprites.high : sink.sprites.init)

        objectState.printer.highlighted = printerDistance <= 160;
        printer.image =
            (objectState.printer.interacted) ?
                printer.sprites.inter :
                (objectState.printer.highlighted ? printer.sprites.high : printer.sprites.init)
    }

    if (objectState.adminTable.interacted && !objectState.adminTable.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.adminTable.increased = true
    } if (objectState.plcTable1.interacted && !objectState.plcTable1.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable1.increased = true
    } if (objectState.plcTable2.interacted && !objectState.plcTable2.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable2.increased = true
    } if (objectState.plcTable3.interacted && !objectState.plcTable3.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable3.increased = true
    } if (objectState.plcTable4.interacted && !objectState.plcTable4.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable4.increased = true
    } if (objectState.plcTable5.interacted && !objectState.plcTable5.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable5.increased = true
    } if (objectState.plcTable6.interacted && !objectState.plcTable6.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable6.increased = true
    } if (objectState.plcTable7.interacted && !objectState.plcTable7.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable7.increased = true
    } if (objectState.plcTable8.interacted && !objectState.plcTable8.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable8.increased = true
    } if (objectState.plcTable9.interacted && !objectState.plcTable9.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable9.increased = true
    } if (objectState.plcTable10.interacted && !objectState.plcTable10.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable10.increased = true
    } if (objectState.plcTable11.interacted && !objectState.plcTable11.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable11.increased = true
    } if (objectState.plcTable12.interacted && !objectState.plcTable12.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable12.increased = true
    } if (objectState.plcTable13.interacted && !objectState.plcTable13.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.plcTable13.increased = true
    } if (objectState.cups.interacted && !objectState.cups.increased) {
        interactablesDone++
        tasseUfgruumt++
        objectState.cups.increased = true
    } if (objectState.adminDesk.interacted && !objectState.adminDesk.increased) {
        interactablesDone++
        steckerliisteUsgmacht++
        objectState.adminDesk.increased = true
    } if (objectState.sink.interacted && !objectState.sink.increased) {
        interactablesDone++
        gschirrspüelerIgruumt++
        objectState.sink.increased = true
    } if (objectState.printer.interacted && !objectState.printer.increased) {
        interactablesDone++
        druckerUfgruumt++
        objectState.printer.increased = true
    }

    if (interactablesDone === 18 && !bijouComplete) {
        bijouComplete = true
        playerAudio.linusEnd.play()
    }

    document.getElementById('sterckerliisteUsmache').textContent = steckerliisteUsgmacht
    document.getElementById('gschirrspüelerIruume').textContent = gschirrspüelerIgruumt
    document.getElementById('tasseUfruume').textContent = tasseUfgruumt
    document.getElementById('druckerUfruume').textContent = druckerUfgruumt
    document.getElementById('gameTime').textContent = gameTime

    if (characterSelected === 0) {
        playerIsLinus()
    } if (characterSelected === 1) {
        playerIsKevin()
    } if (characterSelected === 2) {
        playerIsZeri()
    } if (characterSelected === 3) {
        playerIsGian()
    } if (characterSelected === 4) {
        playerIsSimon()
    }
}


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
        case 'f':
            keys.f.pressed = true
            break
        case 'b':
            keys.b.pressed = true
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
        case 'b':
            keys.b.pressed = false
            break
    }
})


