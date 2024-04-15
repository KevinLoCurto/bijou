"use strict";

// ------------------------- GENERAL CANVAS --------------------------------- 

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

// ------------------------- UNIVERSALLY USED VARIABLES --------------------------------- 

let imagesLoaded = 0
let interactablesDone = 0
let steckerliisteUsgmacht = 0
let tasseUfgruumt = 0
let gschirrspüelerIgruumt = 0
let druckerUfgruumt = 0
let chübelGleert = 0
let bijouComplete = false
let gameEnded = false
let characterSelected = 0
let movementSpeed = 0
let trashCapacity = 0
let gameTime = 0
let timerInterval

// ------------------------- PLAYER CHARACTER --------------------------------- 

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

const kevin = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: kevinDown,
    frames: {
        max: 4
    },
    sprites: {
        up: kevinUp,
        down: kevinDown,
        left: kevinLeft,
        right: kevinRight
    }
})

const zeri = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: zeriDown,
    frames: {
        max: 4
    },
    sprites: {
        up: zeriUp,
        down: zeriDown,
        left: zeriLeft,
        right: zeriRight
    }
})

const gian = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: gianDown,
    frames: {
        max: 4
    },
    sprites: {
        up: gianUp,
        down: gianDown,
        left: gianLeft,
        right: gianRight
    }
})

const simon = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: simonDown,
    frames: {
        max: 4
    },
    sprites: {
        up: simonUp,
        down: simonDown,
        left: simonLeft,
        right: simonRight
    }
})

const niki = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: nikiDown,
    frames: {
        max: 4
    },
    sprites: {
        up: nikiUp,
        down: nikiDown,
        left: nikiLeft,
        right: nikiRight
    }
})

// ------------------------- NON-PLAYER CHARACTERS --------------------------------- 

const linusNPC = new Sprite({
    position: {
        x: 310,
        y: 75
    },
    image: npcLinus
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

const nikiNPC = new Sprite({
    position: {
        x: 510,
        y: -625
    },
    image: npcNiki
})

// ------------------------- BACKGROUND --------------------------------- 

const background = new Sprite({
    position: {
        x: -1450,
        y: -1440
    },
    image: image
})

// ------------------------- DECORATIVE OBJECTS --------------------------------- 

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

// ------------------------- INTERACTABLE OBJECTS --------------------------------- 

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

// ------------------------- COLLISIONS --------------------------------- 

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

// ------------------------- TIMER --------------------------------- 


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

// ------------------------- MENU BUTTON INTERACTION --------------------------------- 

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
    npcState.linus.selectionPlayed = false
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

    if (characterSelected === 0) {
        npcState.linus.isPlayer = true
    } if (characterSelected === 1) {
        npcState.kevin.isPlayer = true
    } if (characterSelected === 2) {
        npcState.zeri.isPlayer = true
    } if (characterSelected === 3) {
        npcState.gian.isPlayer = true
    } if (characterSelected === 4) {
        npcState.simon.isPlayer = true
    } if (characterSelected === 5) {
        npcState.niki.isPlayer = true
    }
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

// ------------------------- TRASH --------------------------------- 

const trashcanPLC = new Interactable({
    position: {
        x: 790,
        y: 160
    },
    image: trashcanPLCInitial,
    sprites: {
        init: trashcanPLCInitial,
        high: trashcanPLCHighlighted,
        inter: trashcanPLCInteracted
    }
})

const trashcanLA = new Interactable({
    position: {
        x: -370,
        y: 440
    },
    image: trashcanLAInitial,
    sprites: {
        init: trashcanLAInitial,
        high: trashcanLAHighlighted,
        inter: trashcanLAInteracted
    }
})

// ------------------------- TRASH INVENTORY TRACKING --------------------------------- 

let trashProgress = 0
const progressbar = [
    '/assets/user-interface/progress-0.png',
    '/assets/user-interface/progress-1.png',
    '/assets/user-interface/progress-2.png',
    '/assets/user-interface/progress-3.png',
    '/assets/user-interface/progress-4.png',
    '/assets/user-interface/progress-5.png',
    '/assets/user-interface/progress-6.png',
    '/assets/user-interface/progress-7.png',
    '/assets/user-interface/progress-8.png',
    '/assets/user-interface/progress-9.png',
    '/assets/user-interface/progress-10.png',
    '/assets/user-interface/progress-11.png',
    '/assets/user-interface/progress-12.png',
    '/assets/user-interface/progress-13.png',
    '/assets/user-interface/progress-14.png',
    '/assets/user-interface/progress-15.png',
    '/assets/user-interface/progress-16.png',
    '/assets/user-interface/progress-17.png',
    '/assets/user-interface/progress-18.png',
    '/assets/user-interface/progress-19.png',
    '/assets/user-interface/progress-20.png'
]

const progressImage = document.getElementById('progressbar')
progressImage.src = progressbar[trashProgress]

function smallTrashPickup() {
    if (trashCapacity === 15) {
        trashProgress = (trashProgress + 2) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    } if (trashCapacity === 20) {
        trashProgress = (trashProgress + 1) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    } if (trashCapacity === 30) {
        trashProgress = (trashProgress + 1) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    } if (trashCapacity === 40) {
        trashProgress = (trashProgress + 0) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    }
}
function mediumTrashPickup() {
    if (trashCapacity === 15) {
        trashProgress = (trashProgress + 6) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    } if (trashCapacity === 20) {
        trashProgress = (trashProgress + 5) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    } if (trashCapacity === 30) {
        trashProgress = (trashProgress + 2) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    } if (trashCapacity === 40) {
        trashProgress = (trashProgress + 1) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    }
}
function largeTrashPickup() {
    if (trashCapacity === 15) {
        trashProgress = (trashProgress + 15) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    } if (trashCapacity === 20) {
        trashProgress = (trashProgress + 10) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    } if (trashCapacity === 30) {
        trashProgress = (trashProgress + 6) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    } if (trashCapacity === 40) {
        trashProgress = (trashProgress + 5) % progressbar.length
        progressImage.src = progressbar[trashProgress]
    }
}
function resetProgressbar() {
    trashProgress = 0
}


// ------------------------- OBJECT GROUPING FOR EASIER RENDERING LOGIC ---------------------------------

const players = [
    linus, kevin, zeri, gian, simon, niki
]
const npcs = [
    linusNPC, zeriNPC, kevinNPC, gianNPC, simonNPC, nikiNPC
]
const stoicObjects = [
    christineTable, edoTable, jokiTable, karinTable, rosaTable, ursTable,
    glassTable1, glassTable2, glassTable3
]
const interactables = [
    adminTable, adminDesk, sink, adminBell,
    plcTable1, plcTable2, plcTable3, plcTable4, plcTable5, plcTable6,
    plcTable7, plcTable8, plcTable9, plcTable10, plcTable11, plcTable12, plcTable13,
    cups, printer, gong,
    trashcanPLC, trashcanLA
]
const steckerliiste = [
    adminTable, plcTable1, plcTable2, plcTable3, plcTable4, plcTable5, plcTable6,
    plcTable7, plcTable8, plcTable9, plcTable10, plcTable11, plcTable12, plcTable13,
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
    }, trashcanPLC: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }, trashcanLA: {
        highlighted: false,
        interacted: false,
        audioPlay: false,
        increased: false
    }
}

let npcState = {
    linus: {
        delayed: false,
        selectionPlayed: true,
        isPlayer: false,
        statsApplied: false,
    },
    zeri: {
        delayed: false,
        selectionPlayed: false,
        isPlayer: false,
        statsApplied: false,
    },
    kevin: {
        delayed: false,
        selectionPlayed: false,
        isPlayer: false,
        statsApplied: false,
    },
    gian: {
        delayed: false,
        selectionPlayed: false,
        isPlayer: false,
        statsApplied: false,
    },
    simon: {
        delayed: false,
        selectionPlayed: false,
        isPlayer: false,
        statsApplied: false,
    },
    niki: {
        delayed: false,
        selectionPlayed: false,
        isPlayer: false,
        statsApplied: false,
    }
}

function resetNPCState() {
    npcState.linus.selectionPlayed = false
    npcState.kevin.selectionPlayed = false
    npcState.zeri.selectionPlayed = false
    npcState.gian.selectionPlayed = false
    npcState.simon.selectionPlayed = false
    npcState.niki.selectionPlayed = false
    npcState.linus.statsApplied = false
    npcState.kevin.statsApplied = false
    npcState.zeri.statsApplied = false
    npcState.gian.statsApplied = false
    npcState.simon.statsApplied = false
    npcState.niki.statsApplied = false
}

const imageConstants = [
    linusDown, linusLeft, linusRight, linusUp,
    kevinDown, kevinLeft, kevinRight, kevinUp,
    zeriDown, zeriLeft, zeriRight, zeriUp,
    gianDown, gianLeft, gianRight, gianUp,
    simonDown, simonLeft, simonRight, simonUp,
    nikiDown, nikiLeft, nikiRight, nikiUp,
    image,
    npcLinus, npcKevin, npcZeri, npcGian, npcSimon, npcNiki,
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
    trashcanPLCInitial, trashcanPLCHighlighted, trashcanPLCInteracted,
    trashcanLAInitial, trashcanLAHighlighted, trashcanLAInteracted,
]


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

// ------------------------- CHARACTER SELECTION LOGIC --------------------------------- 

document.getElementById('next-character').addEventListener('click', () => {
    if (characterSelected < 6) {
        characterSelected++
    }
})
document.getElementById('prev-character').addEventListener('click', () => {
    if (characterSelected > 0) {
        characterSelected--
    }
})

function playerIsLinus() {
    document.getElementById('linus').style.display = 'block'
    document.getElementById('zeri').style.display = 'none'
    document.getElementById('kevin').style.display = 'none'
    document.getElementById('gian').style.display = 'none'
    document.getElementById('simon').style.display = 'none'
    document.getElementById('niki').style.display = 'none'
    if (!npcState.linus.selectionPlayed) {
        playerAudio.linusSelect.play()
        npcState.linus.selectionPlayed = true
    } if (!npcState.linus.statsApplied) {
        movementSpeed = 4
        trashCapacity = 20
        npcState.linus.statsApplied = true
    }
}
function playerIsKevin() {
    document.getElementById('linus').style.display = 'none'
    document.getElementById('zeri').style.display = 'none'
    document.getElementById('kevin').style.display = 'block'
    document.getElementById('gian').style.display = 'none'
    document.getElementById('simon').style.display = 'none'
    document.getElementById('niki').style.display = 'none'
    if (!npcState.kevin.selectionPlayed) {
        playerAudio.kevinSelect.play()
        npcState.kevin.selectionPlayed = true
    } if (!npcState.kevin.statsApplied) {
        movementSpeed = 4
        trashCapacity = 30
        npcState.kevin.statsApplied = true
    }
    resetNPCState()
    npcState.kevin.selectionPlayed = true
}
function playerIsZeri() {
    document.getElementById('linus').style.display = 'none'
    document.getElementById('zeri').style.display = 'block'
    document.getElementById('kevin').style.display = 'none'
    document.getElementById('gian').style.display = 'none'
    document.getElementById('simon').style.display = 'none'
    document.getElementById('niki').style.display = 'none'
    if (!npcState.zeri.selectionPlayed) {
        playerAudio.zeriSelect.play()
        npcState.zeri.selectionPlayed = true
    } if (!npcState.zeri.statsApplied) {
        movementSpeed = 5
        trashCapacity = 15
        npcState.zeri.statsApplied = true
    }
    resetNPCState()
    npcState.zeri.selectionPlayed = true

}
function playerIsGian() {
    document.getElementById('linus').style.display = 'none'
    document.getElementById('zeri').style.display = 'none'
    document.getElementById('kevin').style.display = 'none'
    document.getElementById('gian').style.display = 'block'
    document.getElementById('simon').style.display = 'none'
    document.getElementById('niki').style.display = 'none'
    if (!npcState.gian.selectionPlayed) {
        playerAudio.gianSelect.play()
        npcState.gian.selectionPlayed = true
    } if (!npcState.gian.statsApplied) {
        movementSpeed = 3
        trashCapacity = 30
        npcState.gian.statsApplied = true
    }
    resetNPCState()
    npcState.gian.selectionPlayed = true
}
function playerIsSimon() {
    document.getElementById('linus').style.display = 'none'
    document.getElementById('zeri').style.display = 'none'
    document.getElementById('kevin').style.display = 'none'
    document.getElementById('gian').style.display = 'none'
    document.getElementById('simon').style.display = 'block'
    document.getElementById('niki').style.display = 'none'
    if (!npcState.simon.selectionPlayed) {
        playerAudio.simonSelect.play()
        npcState.simon.selectionPlayed = true
    } if (!npcState.simon.statsApplied) {
        movementSpeed = 5
        trashCapacity = 15
        npcState.simon.statsApplied = true
    }
    resetNPCState()
    npcState.simon.selectionPlayed = true
}
function playerIsNiki() {
    document.getElementById('linus').style.display = 'none'
    document.getElementById('zeri').style.display = 'none'
    document.getElementById('kevin').style.display = 'none'
    document.getElementById('gian').style.display = 'none'
    document.getElementById('simon').style.display = 'none'
    document.getElementById('niki').style.display = 'block'
    if (!npcState.niki.selectionPlayed) {
        playerAudio.nikiSelect.play()
        npcState.niki.selectionPlayed = true
    } if (!npcState.niki.statsApplied) {
        trashCapacity = 40
        movementSpeed = 5
        npcState.niki.statsApplied = true
    }
    resetNPCState()
    npcState.niki.selectionPlayed = true
}

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

function animate() {
    // ------------------------- IMAGE PLACEMENT ---------------------------------
    window.requestAnimationFrame(animate);
    background.draw()
    boundaries.forEach(boundaries => {
        boundaries.draw()
    })
    console.log(trashProgress)

    if (npcState.linus.isPlayer) {
        linus.draw()
        if (interactablesDone === 20 && !bijouComplete) {
            bijouComplete = true
            playerAudio.linusEnd.play()
        }
    } if (npcState.kevin.isPlayer) {
        kevin.draw()
        if (interactablesDone === 20 && !bijouComplete) {
            bijouComplete = true
            playerAudio.kevinEnd.play()
        }
    } if (npcState.zeri.isPlayer) {
        zeri.draw()
        if (interactablesDone === 20 && !bijouComplete) {
            bijouComplete = true
            playerAudio.zeriEnd.play()
        }
    } if (npcState.gian.isPlayer) {
        gian.draw()
        if (interactablesDone === 20 && !bijouComplete) {
            bijouComplete = true
            playerAudio.gianEnd.play()
        }
    } if (npcState.simon.isPlayer) {
        simon.draw()
        if (interactablesDone === 20 && !bijouComplete) {
            bijouComplete = true
            playerAudio.simonEnd.play()
        }
    } if (npcState.niki.isPlayer) {
        niki.draw()
        if (interactablesDone === 20 && !bijouComplete) {
            bijouComplete = true
            playerAudio.nikiEnd.play()
        }
    }

    stoicObjects.forEach(stoicObjects => {
        stoicObjects.draw()
    })
    interactables.forEach(interactable => {
        interactable.draw()
    })
    if (!npcState.linus.isPlayer) {
        linusNPC.draw()
    } if (!npcState.kevin.isPlayer) {
        kevinNPC.draw()
    } if (!npcState.zeri.isPlayer) {
        zeriNPC.draw()
    } if (!npcState.gian.isPlayer) {
        gianNPC.draw()
    } if (!npcState.simon.isPlayer) {
        simonNPC.draw()
    } if (!npcState.niki.isPlayer) {
        nikiNPC.draw()
    }

    // ------------------------- DISTANCE CALCULATION ---------------------------------

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

    const trashcanPLCDistance = calculateTrashcanDistance(linus, trashcanPLC)
    const trashcanLADistance = calculateTrashcanDistance(linus, trashcanLA)

    let moving = true
    players.forEach(player => {
        player.moving = false
    })

    // ------------------------- PLAYER MOVEMENT ---------------------------------

    if (keys.w.pressed && !gameEnded) {
        if (npcState.linus.isPlayer) {
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
            }
        } if (npcState.kevin.isPlayer) {
            kevin.moving = true
            kevin.image = kevin.sprites.up
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: kevin,
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
            }
        } if (npcState.zeri.isPlayer) {
            zeri.moving = true
            zeri.image = zeri.sprites.up
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: zeri,
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
            }
        } if (npcState.gian.isPlayer) {
            gian.moving = true
            gian.image = gian.sprites.up
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: gian,
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
            }
        } if (npcState.simon.isPlayer) {
            simon.moving = true
            simon.image = simon.sprites.up
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: simon,
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
            }
        } if (npcState.niki.isPlayer) {
            niki.moving = true
            niki.image = niki.sprites.up
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: niki,
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
            }
        }

        if (moving)
            movables.forEach((movables) => {
                movables.position.y += movementSpeed
            })
    } if (keys.a.pressed && !gameEnded) {
        if (npcState.linus.isPlayer) {
            linus.moving = true
            linus.image = linus.sprites.left
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: linus,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x + movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.kevin.isPlayer) {
            kevin.moving = true
            kevin.image = kevin.sprites.left
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: kevin,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x + movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.zeri.isPlayer) {
            zeri.moving = true
            zeri.image = zeri.sprites.left
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: zeri,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x + movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.gian.isPlayer) {
            gian.moving = true
            gian.image = gian.sprites.left
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: gian,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x + movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.simon.isPlayer) {
            simon.moving = true
            simon.image = simon.sprites.left
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: simon,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x + movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.niki.isPlayer) {
            niki.moving = true
            niki.image = niki.sprites.left
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: niki,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x + movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        }

        if (moving)
            movables.forEach((movables) => {
                movables.position.x += movementSpeed
            })
    } if (keys.s.pressed && !gameEnded) {
        if (npcState.linus.isPlayer) {
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
                                y: boundary.position.y - movementSpeed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.kevin.isPlayer) {
            kevin.moving = true
            kevin.image = kevin.sprites.down
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: kevin,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - movementSpeed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.zeri.isPlayer) {
            zeri.moving = true
            zeri.image = zeri.sprites.down
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: zeri,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - movementSpeed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.gian.isPlayer) {
            gian.moving = true
            gian.image = gian.sprites.down
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: gian,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - movementSpeed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.simon.isPlayer) {
            simon.moving = true
            simon.image = simon.sprites.down
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: simon,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - movementSpeed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.niki.isPlayer) {
            niki.moving = true
            niki.image = niki.sprites.down
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: niki,
                        rectangle2: {
                            ...boundary,
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - movementSpeed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        }

        if (moving)
            movables.forEach((movables) => {
                movables.position.y -= movementSpeed
            })
    } if (keys.d.pressed && !gameEnded) {
        if (npcState.linus.isPlayer) {
            linus.moving = true
            linus.image = linus.sprites.right
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: linus,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x - movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.kevin.isPlayer) {
            kevin.moving = true
            kevin.image = kevin.sprites.right
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: kevin,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x - movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.zeri.isPlayer) {
            zeri.moving = true
            zeri.image = zeri.sprites.right
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: zeri,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x - movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.gian.isPlayer) {
            gian.moving = true
            gian.image = gian.sprites.right
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: gian,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x - movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.simon.isPlayer) {
            simon.moving = true
            simon.image = simon.sprites.right
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: simon,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x - movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        } if (npcState.niki.isPlayer) {
            niki.moving = true
            niki.image = niki.sprites.right
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: niki,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x - movementSpeed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        }

        if (moving)
            movables.forEach((movables) => {
                movables.position.x -= movementSpeed
            })
    }

    // ------------------------- INTERACTION LOGIC & AUTOMATIC AUDIO PLAYING ---------------------------------

    if (keys.f.pressed && !gameEnded) {
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

                if (npcState.linus.isPlayer) {
                    playerAudio.linusStart.play()
                } if (npcState.kevin.isPlayer) {
                    playerAudio.kevinStart.play()
                } if (npcState.zeri.isPlayer) {
                    playerAudio.zeriStart.play()
                } if (npcState.gian.isPlayer) {
                    playerAudio.gianStart.play()
                } if (npcState.simon.isPlayer) {
                    playerAudio.simonStart.play()
                } if (npcState.niki.isPlayer) {
                    playerAudio.nikiStart.play()
                }

                objectState.gong.timerStarted = true
                objectState.gong.timerStopped = false
            } else {
                keys.f.pressed = false
                audio.Gong.play()
                objectState.gong.timerStarted = false
                gameEnded = true
                if (interactablesDone === 20) {
                    stopTimer()
                    goodEnding()
                } else {
                    stopTimer()
                    badEnding()
                }
            }
        } if (objectState.trashcanPLC.highlighted) {
            objectState.trashcanPLC.interacted = true
            objectState.trashcanPLC.highlighted = false
            if (!objectState.trashcanPLC.audioPlay) {
                audio.Printer.play()
                largeTrashPickup()
                objectState.trashcanPLC.audioPlay = true
            }
        } if (objectState.trashcanLA.highlighted) {
            objectState.trashcanLA.interacted = true
            objectState.trashcanLA.highlighted = false
            if (!objectState.trashcanLA.audioPlay) {
                audio.Printer.play()
                largeTrashPickup()
                objectState.trashcanLA.audioPlay = true
            }
        }
    } if (keys.b.pressed && !gameEnded) {
        playRandomDialogueKevin()
        keys.b.pressed = false
    }

    if (calculateNPCDistance(linus, linusNPC) <= 200) {
        if (!npcState.linus.delayed && !npcState.linus.isPlayer) {
            playRandomDialogueLinus()
            npcState.linus.delayed = true
            setTimeout(() => {
                npcState.linus.delayed = false
            }, 5000)
        }
    } if (calculateNPCDistance(linus, zeriNPC) <= 200) {
        if (!npcState.zeri.delayed && !npcState.zeri.isPlayer) {
            playRandomDialogueZeri()
            npcState.zeri.delayed = true
            setTimeout(() => {
                npcState.zeri.delayed = false
            }, 5000)
        }
    } if (calculateNPCDistance(linus, kevinNPC) <= 200) {
        if (!npcState.kevin.delayed && !npcState.kevin.isPlayer) {
            playRandomDialogueKevin()
            npcState.kevin.delayed = true
            setTimeout(() => {
                npcState.kevin.delayed = false
            }, 5000)
        }
    } if (calculateNPCDistance(linus, gianNPC) <= 200) {
        if (!npcState.gian.delayed && !npcState.gian.isPlayer) {
            playRandomDialogueGian()
            npcState.gian.delayed = true
            setTimeout(() => {
                npcState.gian.delayed = false
            }, 5000)
        }
    } if (calculateNPCDistance(linus, simonNPC) <= 200) {
        if (!npcState.simon.delayed && !npcState.simon.isPlayer) {
            playRandomDialogueSimon()
            npcState.simon.delayed = true
            setTimeout(() => {
                npcState.simon.delayed = false
            }, 5000)
        }
    } if (calculateNPCDistance(linus, nikiNPC) <= 200) {
        if (!npcState.niki.delayed && !npcState.niki.isPlayer) {
            playRandomDialogueNiki()
            npcState.niki.delayed = true
            setTimeout(() => {
                npcState.niki.delayed = false
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

        objectState.trashcanPLC.highlighted = trashcanPLCDistance <= 80 && trashProgress <= 10;
        trashcanPLC.image =
            (objectState.trashcanPLC.interacted) ?
                trashcanPLC.sprites.inter :
                (objectState.trashcanPLC.highlighted ? trashcanPLC.sprites.high : trashcanPLC.sprites.init)

        objectState.trashcanLA.highlighted = trashcanLADistance <= 80 && trashProgress <= 10;
        trashcanLA.image =
            (objectState.trashcanLA.interacted) ?
                trashcanLA.sprites.inter :
                (objectState.trashcanLA.highlighted ? trashcanLA.sprites.high : trashcanLA.sprites.init)

    }

    // ------------------------- PROGRESS COUNT ---------------------------------

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
    } if (objectState.trashcanPLC.interacted && !objectState.trashcanPLC.increased) {
        interactablesDone++
        chübelGleert++
        objectState.trashcanPLC.increased = true
    } if (objectState.trashcanLA.interacted && !objectState.trashcanLA.increased) {
        interactablesDone++
        chübelGleert++
        objectState.trashcanLA.increased = true
    }

    document.getElementById('sterckerliisteUsmache').textContent = steckerliisteUsgmacht
    document.getElementById('gschirrspüelerIruume').textContent = gschirrspüelerIgruumt
    document.getElementById('tasseUfruume').textContent = tasseUfgruumt
    document.getElementById('druckerUfruume').textContent = druckerUfgruumt
    document.getElementById('chübelLeere').textContent = chübelGleert
    document.getElementById('gameTime').textContent = gameTime

    if (trashProgress === 20) {
        document.getElementById('trash-alert').textContent = 'Jetz isch de Müllsack aber volle, gang ihn schnell dusse go leere!'
    }

    // ------------------------- CHARACTER SELECTION ---------------------------------

    if (characterSelected === 0) {
        playerIsLinus()
        document.getElementById('start-text').textContent = 'ey perfekt, lets go'
    } if (characterSelected === 1) {
        playerIsKevin()
        document.getElementById('start-text').textContent = "s'Bijou!!"
    } if (characterSelected === 2) {
        playerIsZeri()
        document.getElementById('start-text').textContent = 'lecteurgo!'
    } if (characterSelected === 3) {
        playerIsGian()
        document.getElementById('start-text').textContent = 'ey perfekt, lets go'
    } if (characterSelected === 4) {
        playerIsSimon()
        document.getElementById('start-text').textContent = 'ey perfekt, lets go'
    } if (characterSelected === 5) {
        playerIsNiki()
        document.getElementById('start-text').textContent = 'ey perfekt, lets go'
    }

    // ------------------------- CHARACTER SELECTION ---------------------------------



}

// ------------------------- KEY PRESS REGISTRATION ---------------------------------

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


