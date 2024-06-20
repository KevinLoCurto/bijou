"use strict";

// ------------------------- KEY SETUP --------------------------------- 

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

const movementKeys = [
    'w',
    'a',
    's',
    'd'
]

// ------------------------- UNIVERSALLY USED VARIABLES --------------------------------- 

let characterSelected = 0
let movementSpeed = 0
let trashCapacity = 0
let largeMax = 0
let mediumMax = 0
let smallMax = 0
let petaluMax = 0

// these track how many of each interactable have already been completed. interactablesDone is purely internal, it's later used to check whether
// or not the player has completed everything and then that determines which ending should be shown. the others are used to update the progress
// counter in the in-game user interface.
let interactablesDone = 0
let steckerliisteUsgmacht = 0
let tasseUfgruumt = 0
let gschirrspüelerIgruumt = 0
let druckerUfgruumt = 0
let chübelGleert = 0

// these are used so that the timer displays correctly and also counts correctly. 
let gameTime = 0
let timerInterval

// gameEnded completely blocks you from doing anything once you hit the gong a second time and finish the game. timerRunning makes sure that 
// you're unable to interact with stuff before starting the timer using the gong
let gameEnded = false
let timerRunning = false

// both of these are simply there to control when exactly which specific audio should be played
let bijouStarted = false
let bijouComplete = false

// these are used to hide and show the different floors and everything that is on them. after finding out that you can just have variables that 
// have a string as a value, my life got like 50 times easier
let currentFloor = 'EG'
let activeEG = true
let activeOG = false

// these are used to handle the player's trash, PET and alu inventories and whether or not picking up more of each is possible
let trashProgress = 0
let petProgress = 0
let aluProgress = 0
let smallTrashPossible = true
let mediumTrashPossible = true
let largeTrashPossible = true
let petPossible = true
let aluPossible = true

// ------------------------- COLLISIONS --------------------------------- 

// the two arrays boundairesEG and boundariesOG are both storing map boundary data of each floor. Tiled Map Editor doesn't let you export your 
// map in a way that javascript can read very easily but there is a way to do it. by exporting your map file as a json file, it spits out empty 
// tiles as 0s and painted tiles as 1s. this can then be read as shown down here. if you go over to the collisions.js file, that's where you'll
// see a pretty crazy amount of 0s and 1s that look exactly like the game's map looks, or at least all the map boundaries on it that the player
// shouldn't be able to walk through. all the 0s are tiles the player can walk on, all the 1s are not. now, in the tutorial i watched to figure
// out how to do this among a few other basic things like moving the player etc., using the same process the guy was able to extract the numbers
// out of his json file exactly in the format that it's in in collisions.js. mine did not at all look like this. what this meant was that i had to
// basically build the map 0 by 0 and 1 by 1 until it finally worked. later on i had to repeat the entire process with the upstairs boundaries as 
// well of course. 


const boundariesEG = []
const boundariesOG = []

function createCollisionsMap(collisions) {
    const collisionsMap = []
    for (let i = 0; i < collisions.length; i += 91) {
        collisionsMap.push(collisions.slice(i, 91 + i))
    }
    return collisionsMap
}

function pushBoundaries(array, collisionsMap) {
    collisionsMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 1)
                array.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    }))
        })
    })
}

const collisionsMapEG = createCollisionsMap(collisionsEG)
const collisionsMapOG = createCollisionsMap(collisionsOG)
pushBoundaries(boundariesEG, collisionsMapEG)
pushBoundaries(boundariesOG, collisionsMapOG)

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

// the way this works is completely different from html. while the different pages are built using html, switching between them is done in 
// javascript. while in html, when clicking on a link or a button or whatever it would just change the website's page to something else,
// here it just hides all the pages that we don't want to be seeing and shows only the one that we do want to be seeing. this means you can keep
// all the user interface elements and menus and such on one single html page and therefore have your game run always on the same exact website page.
function spawnPlayer() {
    document.getElementById('character-selection-screen').style.display = 'none'
    document.getElementById('game-screen').style.display = 'block'
    document.getElementById('timer').style.display = 'block'
    document.getElementById('tasklist').style.display = 'block'
    audio.sBijou.play()
    selectionAudioUnplayable = true
}
function openPatchNotes() {
    document.getElementById('main-menu').style.display = 'none'
    document.getElementById('testimage').style.display = 'none'
    document.getElementById('patch-notes').style.display = 'block'
    document.getElementById('back-1').style.display = 'block'
}
function closePatchNotes() {
    document.getElementById('main-menu').style.display = 'block'
    document.getElementById('testimage').style.display = 'block'
    document.getElementById('end-screen').style.display = 'none'
    document.getElementById('patch-notes').style.display = 'none'
    document.getElementById('back-1').style.display = 'none'
}
function openInstructions() {
    document.getElementById('main-menu').style.display = 'none'
    document.getElementById('testimage').style.display = 'none'
    document.getElementById('instruction-screen').style.display = 'block'
    document.getElementById('back-2').style.display = 'block'
}
function closeInstructions() {
    document.getElementById('main-menu').style.display = 'block'
    document.getElementById('testimage').style.display = 'block'
    document.getElementById('end-screen').style.display = 'none'
    document.getElementById('instruction-screen').style.display = 'none'
    document.getElementById('back-2').style.display = 'none'
}
// due to characterSelected being set to 0 which is Linus's value as soon as the game website is opened, it would play his selection screen audio
// file on load each time so i had to make it so this only happens once the character selection screen button is pressed
function openCharacterSelection() {
    document.getElementById('main-menu').style.display = 'none'
    document.getElementById('testimage').style.display = 'none'
    document.getElementById('character-selection-screen').style.display = 'block'
    if (selectionAudioUnplayable) {
        const playerAudio = new Audio(playerAudios.linus.select)
        playerAudio.play()
        selectionAudioUnplayable = false 
    }
}
// this function is actually not used, at least not yet. initially, the player was able to click on a button on the end screen that would restart
// the game, basically just executing spawnPlayer() again. all the interactables however were still interacted, meaning i'd have to set up some 
// logic to reset everything back to how it was but i was just too lazy to do this. i'm sure i'll implement this in the future.
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
// this was really fun, Harry actually agreed to record a little example of what he'd say to someone who didn't finish the Bijou correctly.
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
    document.getElementById('loading-screen').style.display = 'flex'
    document.getElementById('character-selection-screen').style.display = 'none'
    // this loading screen was a failed attempt at solving the problem that images wouldn't render in time or incorrectly when starting the game.
    // my logic was that if i set a loading screen that lasts 5 seconds, surely it'd be enough to have all the images load before the game starts.
    // i was wrong. i'll leave this in here in case i want to use it again but i've set the timeout from 5 seconds to 0 so there won't be a loading
    // screen for now.
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none'
        spawnPlayer()
        displayTimer()

        npcsEG.forEach((npc, index) => {
            if (characterSelected === index) {
                npc.isPlayer = true
                npc.isSelected = true
            }
        })
    }, 0)
})
document.getElementById('patch-notes-button').addEventListener('click', () => {
    openPatchNotes()
})
document.getElementById('instructions').addEventListener('click', () => {
    openInstructions()
})
document.getElementById('back-1').addEventListener('click', () => {
    closePatchNotes()
})
document.getElementById('back-2').addEventListener('click', () => {
    closeInstructions()
})
document.getElementById('restart').addEventListener('click', () => {
    restartGame()
})

// ------------------------- TRASH INVENTORY TRACKING --------------------------------- 

// this code handles what happens when the player empties a trash can. if you work here you know that the black trash cans that are partly closed
// are much larger than the little open trash bins that are strewn about everywhere so there had to be some sort of differenciation there.
const trashProgressImage = document.getElementById(`trashProgressbar`)
trashProgressImage.src = `/assets/user-interface/trash/progress-${trashProgress}.png`

// there is no small trash anywhere in the game yet but it will be implemented either in the classrooms or as a part of interacting with certain
// objects that already exist. what's important is that the logic already exists so i'm saving myself some effort
function smallTrashPickup() {
    if (trashCapacity === 15) {
        trashProgress = (trashProgress + 4)
    } if (trashCapacity === 20) {
        trashProgress = (trashProgress + 2)
    } if (trashCapacity === 25) {
        trashProgress = (trashProgress + 1)
    } if (trashCapacity === 30) {
        trashProgress = (trashProgress + 1)
    }
}
// what this basically does is change the progress bar image, filling it up if you will. of course a character with a trash capacity of 15 will
// not have as much room for trash as one with a trash capacity of 30 so for each capacity the increase rate needs to be different. that way for 
// example Niki can carry a lot more trash than Zeri can before their inventories are full and no more trash can be picked up.
function mediumTrashPickup() {
    if (trashCapacity === 15) {
        trashProgress = (trashProgress + 6)
    } if (trashCapacity === 20) {
        trashProgress = (trashProgress + 5)
    } if (trashCapacity === 25) {
        trashProgress = (trashProgress + 4)
    } if (trashCapacity === 30) {
        trashProgress = (trashProgress + 3)
    }
}
function largeTrashPickup() {
    if (trashCapacity === 15) {
        trashProgress = (trashProgress + 15)
    } if (trashCapacity === 20) {
        trashProgress = (trashProgress + 10)
    } if (trashCapacity === 25) {
        trashProgress = (trashProgress + 7)
    } if (trashCapacity === 30) {
        trashProgress = (trashProgress + 6)
    }
}

// the logic for PET and Alu are pretty much the same, they also both have exactly the same increase rates. as of version 3.0, this code does not 
// do anything yet, however it'll be one of the first things to be implemented from here on out. both will also have seperate objects that'll 
// empty the inventories similar to how container187 does it.
const petProgressImage = document.getElementById(`petProgressbar`)
petProgressImage.src = `/assets/user-interface/pet/progress-${petProgress}.png`

function petPickup() {
    if (trashCapacity === 15) {
        petProgress = (petProgress + 20)
    } if (trashCapacity === 20) {
        petProgress = (petProgress + 15)
    } if (trashCapacity === 25) {
        petProgress = (petProgress + 10)
    } if (trashCapacity === 30) {
        petProgress = (petProgress + 7)
    }
}

const aluProgressImage = document.getElementById(`aluProgressbar`)
aluProgressImage.src = `/assets/user-interface/alu/progress-${aluProgress}.png`

function aluPickup() {
    if (trashCapacity === 15) {
        aluProgress = (aluProgress + 20)
    } if (trashCapacity === 20) {
        aluProgress = (aluProgress + 15)
    } if (trashCapacity === 25) {
        aluProgress = (aluProgress + 10)
    } if (trashCapacity === 30) {
        aluProgress = (aluProgress + 7)
    }
}
// ------------------------- CHARACTER SELECTION LOGIC --------------------------------- 

// these two relatively small blocks of code are probably the most important pieces that control how characters work in this game. it's all coming
// from the character selection screen, which increases or decreases the value of characterSelected depending on which button the user is pressing
// to select different characters. each value from 0 to 5 is assigned to a different character. this also means that if more characters are added
// in the future, it'll be easy to just adjust the logic.
document.getElementById('next-character').addEventListener('click', () => {
    if (characterSelected <= 5) {
        characterSelected++
    }
})
document.getElementById('prev-character').addEventListener('click', () => {
    if (characterSelected > 0) {
        characterSelected--
    }
})

// all this does is simply change the character and character info that's displayed on the character selection screen depending on the current
// value of characterSelected.

function setPlayer(name) {
    players.forEach(player => {
        document.getElementById(player).style.display = player === name ? 'block' : 'none'
    })
}

function resetSelection() {
    npcsEG.forEach(npc => {
        npc.isSelected = false
    })
}

// ------------------------- IMAGE DRAWING & MOVING SETUP --------------------------------- 

// to ensure that i won't have to type out an entire drawImage function each time i want to render something on screen, i created this simple 
// function. drawImage is a preset function that comes with javascript.
function draw(object) {
    c.drawImage(
        object.image,
        object.position.x,
        object.position.y
    )
}

// to ensure that all the objects will actually be able to move, i added them all to one central array so that i wouldn't have to apply the logic to
// each one of these individually.
const movables = [
    backgroundEG, backgroundOG, ...boundariesEG, ...boundariesOG,
    ...interactablesEG, ...stoicObjectsEG,
    ...npcsEG,
    ...floorIncreasers, ...floorDecreasers
]

// ------------------------- PLAYER MOVEMENT LOGIC --------------------------------- 

function checkCollision(dx, dy) {
    function selectArray(array) {
        for (let i = 0; i < array.length; i++) {
            const boundary = array[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x + dx,
                            y: boundary.position.y + dy
                        }
                    }
                })
            ) {
                return true
            }
        }
        return false
    }

    if (currentFloor === 'EG') {
        return selectArray(boundariesEG)
    } else if (currentFloor === 'OG') {
        return selectArray(boundariesOG)
    } else {
        return false
    }
}

function movePlayer(direction) {
    let dx = 0, dy = 0
    if (direction === 'Up') {dy = movementSpeed}
    if (direction === 'Down') {dy = -movementSpeed}
    if (direction === 'Left') {dx = movementSpeed}
    if (direction === 'Right') {dx = -movementSpeed}

    if (!checkCollision(dx, dy)) {
        movables.forEach(movable => {
            movable.position.x += dx
            movable.position.y += dy
        })
        player.moving = true
        facing = direction
    }
}


// ------------------------- GAME LOOP --------------------------------- 

// this function contains all the more technical stuff about this game's code. window.requestAnimationFrame makes it so that the function is reloaded
// every frame (i think) which is important for a lot of things that will have to be continuously checked and updated.
function animate() {
    window.requestAnimationFrame(animate)

    // s'Bijou!!
    if (keys.b.pressed) {
        keys.b.pressed = false
        audio.sBijou.play()
    }

    // from here on, characterSelected isn't used anymore and it's instead transferred to currentPlayer, which as the name says just tracks the
    // character the player is currently playing as. 

    players.forEach((player, index) => {
        if (characterSelected === index) {
            currentPlayer = `${player}`
            setPlayer(player)
            document.getElementById(`${player}text`).style.display = 'block'
        } else { 
            document.getElementById(`${player}text`).style.display = 'none'
        }
    })
    // each player has their own stats, which you can see in the player.js file. as you can see, i'm still using the npcsEG array to apply these 
    // even though this code isn't actually dealing with NPCs anymore but rather with players. this is because in that array, each NPC and therefore
    // automatically also each player is present as an object that i can interact with through forEach loops. there is a constant that's just called
    // "player" but due to it just being one single object, there isn't a seperate object for each character, making it useless for this situation.
    npcsEG.forEach((npc, index) => {
        if (characterSelected === index) {
            movementSpeed = playerStats[currentPlayer].movementSpeed
            trashCapacity = playerStats[currentPlayer].trashCapacity
            largeMax = playerStats[currentPlayer].largeMax
            mediumMax = playerStats[currentPlayer].mediumMax
            smallMax = playerStats[currentPlayer].smallMax
            petaluMax = playerStats[currentPlayer].petaluMax

            // this plays the currently viewed character's selection audio when on the selection screen
            if (!npc.isSelected && !selectionAudioUnplayable) {
                const audio = playerAudios[currentPlayer].select
                const selectionAudio = new Audio(audio)
                selectionAudio.play()
                npc.isSelected = true
            }
            resetSelection()
            npc.isSelected = true
        }
        // this plays the current player character's ending audio whenever all the interactables are finished and your trash inventories are empty.
        // after hearing this voiceline, if you proceed to hit the gong, you'll get the good ending.
        if (!bijouComplete && interactablesDone === 25 && trashProgress === 0) {
            const audio = playerAudios[currentPlayer].end
            const endAudio = new Audio(audio)
            endAudio.play()
            bijouComplete = true
        }
    })

    // here's where i think explaining string interpolation makes sense. if you want to use it, you'll need to put your string in these: `` and not
    // like usual in either these: "" or these: ''. now, in between the curly brackets that have a dollar sign in front of them, you can put any 
    // value. this is usually a variable or something, could also be a const though. how it works is that whatever the value of the thing in the 
    // brackets is, is then placed into the string exactly as it is. so, if currentPlayer is 'linus', it will put the word linus wherever there's
    // a ${currentPlayer}. 

    // this makes sure that the player's image is always the one that corresponds to the character the user selected at the beginning. facing is a
    // variable created in player.js, just like currentPlayer is. it's used to determine which direction the player is facing so that the game 
    // knows which player direction image to render. if the player is Gian and facing is set to 'Up', the image to render would be gianUp.png.
    playerImage.src = `/characters/players/${currentPlayer}/${currentPlayer}${facing}.png`

    // ------------------------- FLOOR DETECTION ---------------------------------

    // this is pretty funny so i'll write it down. this is the code that handles changing the current floor. upon changing the floor from EG to OG, the background and any and all other elements
    // from the EG are hidden and replaced with all of the ones from the OG. to do this, i placed two lines of tiles on the stairs that the player is forced to walk through whenever they walk up 
    // and/or down the stairs. one of them will change the floor to OG when the player walks up the stairs, the other will change it back to EG once the player walks back down the stairs. 
    // all this is done using a function that detects whether a player is colliding with a tile, that being rectangularCollision().
    // thinking i was oh so smart i wanted to prevent issues that would certainly arise due to overlapping if both types of tiles were in the same exact location, so i moved the floor decreasers 
    // a little down the stairs, aka a little up the y-axis. during testing i noticed that not only did the floors rapidly switch back and forth whenever the player collided with a floor increaser,
    // AND also when going back down the stairs and colliding with the floor decreaser the floor would correctly change to EG as it should but then immediately went back to OG. i was comfused and 
    // not even chatGPT with its new GPT-4o model was able to help me. after an entire afternoon of pain and misery, the next day i had a revelation (two actually but we'll get to that.): 
    // the player is almost double the length that one tile is, that being 40 pixels, while the player object is something like 70 or 80 pixels. the problem was increadibly simple: the two types 
    // of tiles were just not far enough away from each other. whenever the player collided with the floor increaser, it would disappear with the rest of the EG as planned, BUT just a split 
    // second later the floor decreaser that spawned alongside the OG appeared right in the player's face, therefore creating a collision and making the floor go back to EG, making the floor 
    // increaser reappear right in the player's foot, therefore repeating the process over and over until the player left the area. but that's not it right, there's more. the other issue was 
    // similarly simple, which made me even more disappointed in my java skills. rectangularCollision() uses both the x and y position of the tile to determine where it is, which is obvious. 
    // because the two lines of tiles were both on the same coordinate on the x-axis which completely screwed up the function upon execution. i now put the floor increaser on the other side 
    // of the stairs and it works perfectly. god damnit

    if (activeEG) {
        floorIncreasers.forEach(tile => {
            if (rectangularCollision({ rectangle1: player, rectangle2: tile })) {
                currentFloor = 'OG'
                console.log('floor changed to OG')
                activeEG = false
                activeOG = true
            }
        })
    }

    if (activeOG) {
        floorDecreasers.forEach(tile => {
            if (rectangularCollision({ rectangle1: player, rectangle2: tile })) {
                currentFloor = 'EG'
                console.log('floor changed to EG')
                activeEG = true
                activeOG = false
            }
        })
    }

    // ------------------------- PLAYER MOVEMENT ---------------------------------
    if (!gameEnded) {
        let moving = false
        movementKeys.forEach(key => {
            if (keys[key].pressed) {
                movePlayer(
                    key === 'w' ? 'Up' :
                    key === 's' ? 'Down' :
                    key === 'a' ? 'Left' : 'Right'
                )
                moving = true
            }
        })
        if (!moving) {
            player.moving = false
        }
    }

    // ------------------------- IMAGE RENDERING ---------------------------------

    if (currentFloor === 'EG') {
        // using the previously defined draw function, i'm now rendering the images on screen.
        draw(backgroundEG)

        stoicObjectsEG.forEach((object) => {
            draw(object)
        })

        interactablesEG.forEach(object => {
            draw(object)
        })

        npcsEG.forEach(npc => {
            // here i'm making sure that all NPCs are rendered except for the one that is already the player character. after all it wouldn't 
            // make sense for a Niki NPC to be standing around when the player is playing as Niki already.
            if (!npc.isPlayer) {
                draw(npc)
            }

            // using a simple distance calculation that i created in utils.js, the game detects if the player is near an NPC and if they are,
            // it picks out one of five different voice lines belonging to that NPC at random and plays it. 
            if (calculateDistance(player, npc) <= 160 && !npc.isPlayer && !npc.onDelay) {
                randomizeDialogue(npc)
                npc.onDelay = true
                // to make sure that this doesn't happen every frame, annihilating the user's ears, i made it so there's always a 5 second delay
                // before the NPC's voice line can be played again.
                setTimeout(() => {
                    npc.onDelay = false
                }, 5000);
            }
        })

        boundariesEG.forEach(boundary => {
            boundary.draw()
        })

    } if (currentFloor === 'OG') {
        draw(backgroundOG)

        boundariesOG.forEach(boundary => {
            boundary.draw()
        })
    }

    player.draw()

    // ------------------------- TRASH PROGRESS LOGIC ---------------------------------

    // each kind of trash has it's own "max", meaning the maximum of said kind of trash that the player can hold. now i had to make sure that
    // if this maximum is passed during gameplay, no more of that specific one can be picked up. so, if you don't have enough room for another
    // large trash can's worth of trash, you won't be able to empty any more large trash cans.
    if (trashProgress > largeMax) {
        largeTrashPossible = false
        mediumTrashPossible = true
        smallTrashPossible = true
    } if (trashProgress > mediumMax) {
        largeTrashPossible = false
        mediumTrashPossible = false
        smallTrashPossible = true
    } if (trashProgress > smallMax) {
        largeTrashPossible = false
        mediumTrashPossible = false
        smallTrashPossible = false
    } if (petProgress > petaluMax) {
        petPossible = false
    } if (aluProgress > petaluMax) {
        aluPossible = false
    }

    // ------------------------- INTERACTABLE OBJECTS ---------------------------------

    // this was by far the most insanely overcomplicated part of my code before version 3.0. you'll be able to look at my old code in the files
    // if you want to, there you can see how absolutely insane it used to be. this made the refactoring of all the interactable object logic seem
    // like quite the daunting task at first and so i left it for last. turns out that, apart from a few issues that i was able to solve with a 
    // bit of console debugging, it really wasn't that bad. i managed to cut the mile long code that i had previously to one singular forEach loop
    // that has a length of less than 100 lines of code. pretty crazy if you ask me.
    interactablesEG.forEach((object, index) => {
        // when using calculateDistance, it measures the distance between two objects using their x and y coordinates. this means that the point 
        // at which it measures the distance isn't in the middle of the target object but on one of its corners. now this is not a problem when
        // the target objects are just one tile wide like the NPCs are but it does become pretty annoying when the objects are larger, like the 
        // PLC-tables are. in my old code i "solved" this issue by just making a seperate distance calculation function for each object but this
        // creates a lot of unnecessary and really ugly code. i then realized that i can just find out the midpoint of an object using very simple
        // math that even i as a math hater should know well, meaning that now i can use the same function, calculateMidpointDistance, for every
        // object, saving a LOT of space in this document.
        const distanceToPlayer = calculateMidpointDistance(player, object)
        if (distanceToPlayer <= 160 && object.state !== 'Interacted') {
            // for all the objects except for the gong (because you need to be able to interact with it from the start) and the little bell
            // at the counter in entrance area, i don't want them to be interactable until the player hits the gong and starts the timer. this and
            // a lot of other stuff in this code block is done using the value of "index". forEach loops like this one that everything here is in
            // can 1. iterate the loop's contents over each of the objects in the targeted array and 2. access the array's index values. in the 
            // very first line of this block i declared two arguments, object and index, that are used in different ways. object is a placeholder
            // for the objects the array contains, meaning anything that i declare using "object" inside of this loop will be applied to each of
            // the objects in this array. in an array, objects are assigned an "index" value based on their position in that array. the first 
            // object has the value 0, the second one 1 and so on. this means that i can be a lot more specific about what should happen to which
            // of the objects in the array, which is necessary because i can't just access the objects like you usually would since in the 
            // interactablesEG array, they are nameless.
            if (index >= 2) {
                if (timerRunning) {
                    updateInteractableState(object, 'Highlighted')
                }
            } else {
                updateInteractableState(object, 'Highlighted')
            }
        } else if (distanceToPlayer > 160 && object.state !== 'Interacted') {
            updateInteractableState(object, 'Initial')
        }

        if (keys.f.pressed && !gameEnded) {
            if (object.state === 'Highlighted') {
                // the gong has the index value of 0. when pressed, it'll detect if it's the first time it's been hit to start the game or if it's
                // the second time to end the game. 
                if (index === 0) {
                    // in almost all cases, i don't want audio to be able to overlap every frame causing very loud audio. setting the value of
                    // keys.f.pressed to false ensures that the audio will only play again if the interactable is interacted with again, which in
                    // most cases isn't even possible.
                    keys.f.pressed = false
                    audio.gong.play()
                    // if the player is playing as Niki, starting the timer will play really low quality and really loud gym music.
                    if (currentPlayer === 'niki') {
                        playNikiSoundtrack()
                    }
                    // the first time the player hits the gong, it'll enable all other interactables, start the timer and also play the current
                    // player character's starting audio file. 
                    if (!timerRunning) {
                        startTimer()

                        if (!bijouStarted) {
                            const audio = playerAudios[currentPlayer].start
                            const startAudio = new Audio(audio)
                            startAudio.play()
                            bijouStarted = true
                        }

                        timerRunning = true
                        // if the player then hits the gong again, this code determines which ending you'll get. if the player correctly completes
                        // the game, interacting with all currently 25 objects and completely emptying out all the trash into the container187,
                        // they will get the good ending, where they'll also be provided with the time they took to beat the game in seconds. if 
                        // this is not the case, the bad ending will be given and the player will be scholded by Harry. 
                    } else {
                        gameEnded = true
                        timerRunning = false
                        if (interactablesDone === 25 && trashProgress === 0) {
                            stopTimer()
                            goodEnding()
                        } else {
                            stopTimer()
                            badEnding()
                        }
                    }
                    // note that here i'm not setting keys.f.pressed to false again. this is on purpose. go to the bell, hold down F and see.
                } if (index === 1) {
                    audio.bell.play()
                    // the index value 2 corresponds to container187
                } if (index === 2) {
                    keys.f.pressed = false
                    // you might notice that the "crumble" audio file is used quite a lot, i'm planning on adding more diversity in the future.
                    audio.crumble.play()
                    // this basically just resets the player's trash, PET and alu inventories completely.
                    if (trashProgress > 0) {
                        trashProgress = 0
                        largeTrashPossible = true
                        mediumTrashPossible = true
                        smallTrashPossible = true
                        petPossible = true
                        aluPossible = true
                        trashProgressImage.src = `/assets/user-interface/trash/progress-${trashProgress}.png`
                        petProgressImage.src = `/assets/user-interface/trash/progress-${petProgress}.png`
                        aluProgressImage.src = `/assets/user-interface/trash/progress-${aluProgress}.png`
                    }
                    // every other interactable doesn't have anything special happen when being interacted with and it will just go straight into
                    // the interacted state.
                } if (index >= 3 && timerRunning) {
                    updateInteractableState(object, 'Interacted')
                }
            }
        }

        if (object.state === 'Interacted') {
            // there's still some differentiation that's needed here. one difference between all the interactables is the sound they play when interacted
            // with, the other being the value they increase on the progress counter that's on the in-game user interface. another that's exclusive
            // to trash-related interactables is the trash/PET/alu pickup function that needs to be executed. 
            if (!object.interacted) {
                interactablesDone++
                if (index >= 3 && index <= 17) {
                    audio.click.play()
                    steckerliisteUsgmacht++
                } if (index === 18) {
                    audio.cups.play()
                    tasseUfgruumt++
                } if (index === 19) {
                    audio.sink.play()
                    gschirrspüelerIgruumt++
                } if (index === 20) {
                    audio.crumble.play()
                    druckerUfgruumt++
                } if (index >= 21 && index <= 23 && largeTrashPossible) {
                    audio.crumble.play()
                    chübelGleert++
                    largeTrashPickup()
                    trashProgressImage.src = `/assets/user-interface/trash/progress-${trashProgress}.png`
                } if (index >= 24 && index <= 27 && mediumTrashPossible) {
                    audio.crumble.play()
                    chübelGleert++
                    mediumTrashPickup()
                    trashProgressImage.src = `/assets/user-interface/trash/progress-${trashProgress}.png`
                }
                object.interacted = true
            }
        }
    })

    // ------------------------- BIJOU PROGRESS COUNTER ---------------------------------

    document.getElementById('sterckerliisteUsmache').textContent = steckerliisteUsgmacht
    document.getElementById('gschirrspüelerIruume').textContent = gschirrspüelerIgruumt
    document.getElementById('tasseUfruume').textContent = tasseUfgruumt
    document.getElementById('druckerUfruume').textContent = druckerUfgruumt
    document.getElementById('chübelLeere').textContent = chübelGleert
    document.getElementById('gameTime').textContent = gameTime

    // ------------------------- TRASH COUNTER ---------------------------------

    // i thought it'd be a good quality of life addition if the player was able to see how much and/or which kind of trash they can still
    // pick up.
    if (largeTrashPossible && mediumTrashPossible && smallTrashPossible) {
        document.getElementById('trash-counter').textContent = 'hesch no easy viel platz für Müll, jetz gang aber a dSäck, sBijou mue gmacht werde!'
    } if (!largeTrashPossible && mediumTrashPossible && smallTrashPossible) {
        document.getElementById('trash-counter').textContent = 'do magsch aber kein 60-Liter Müllsack meh, suech dir viellicht no paar 30-Liter-Säck zeme'
    } if (!largeTrashPossible && !mediumTrashPossible && smallTrashPossible) {
        document.getElementById('trash-counter').textContent = 'jetz wär au en 30-Liter Müllsack zviel, bitzeli Gefötzel wör aber no goh'
    } if (!largeTrashPossible && !mediumTrashPossible && !smallTrashPossible) {
        document.getElementById('trash-counter').textContent = 'jetze lieged au nödmol meh chlini Fötzel drin. Dis Inventar isch randvolle! Gangs schnell go leere!'
    }
}
animate()

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


