// ------------------------- BACKGROUND ----------------------------------

// the backgrounds are the most simple objects in the entire game. they have a static position and a static image source and that's it.
const backgroundEG = {
    position: {
        x: -2730,
        y: -1440
    },
    src: '/assets/world/EG.png',
    image: new Image()
}
backgroundEG.image.src = backgroundEG.src

const backgroundOG = {
    position: {
        x: -2730,
        y: -1440
    },
    src: '/assets/world/OG.png',
    image: new Image()
}
backgroundOG.image.src = backgroundOG.src

// ------------------------- STOIC OBJECTS ----------------------------------
// -------------- EG --------------

// you'll see this method of creating multiple objects at a time a couple of times in this code so i'll just explain it once here. first there are
// two arrays, one storing all the objects's names the other their corresponding positions.
const stoicObjectNamesEG = [
    "christineTable",
    "edoTable",
    "jokiTable",
    "karinTable",
    "rosaTable",
    "ursTable",
    "glassTable1",
    "glassTable2",
    "glassTable3",
    "schrank"
]

const stoicObjectPositionsEG = [
    { x: 430, y: -280 },
    { x: 710, y: 280 },
    { x: 270, y: 1320 },
    { x: 110, y: -280 },
    { x: 110, y: 240 },
    { x: 990, y: 0 },
    { x: -530, y: 920 },
    { x: -890, y: 800 },
    { x: -810, y: 1120 },
    { x: -810, y: 0 }
]

// then another array is created that will store the final products, aka the actual objects that will be rendered into the game
const stoicObjectsEG = []

// for each object, an actual javascript object in form of a constant has to be created and then pushed into the final array. the code pulls 
// the object's position out of the positions array using the object's index. so, if the object has an index value of 4, it'll take the pair 
// of coordinates from the positions array that have the index value of 4 as well. again using simple string interpolation, the correct image
// URL is also picked out for each of the objects.
stoicObjectNamesEG.forEach((name, index) => {
    const position = stoicObjectPositionsEG[index]
    const object = {
        position: {
            x: position.x,
            y: position.y
        },
        src: `/assets/world/${name}.png`,
        image: new Image()
    }
    object.image.src = object.src
    stoicObjectsEG.push(object)
})

// ------------------------- NPCs --------------------------------------------

const npcNamesEG = [
    "linus",
    "kevin",
    "zeri",
    "gian",
    "simon",
    "niki"
]

const npcPositionsEG = [
    { x: 270, y: 75 },
    { x: -170, y: 200 },
    { x: 110, y: -375 },
    { x: 730, y: 80 },
    { x: 100, y: 835 },
    { x: 550, y: -625 }
]

const npcsEG = []

npcNamesEG.forEach((name, index) => {
    const object = {
        position: npcPositionsEG[index],
        src: `/characters/npcs/${name}.png`,
        image: new Image(),
        isPlayer: false,
        onDelay: false,
        isSelected: false
    }
    object.image.src = object.src
    npcsEG.push(object)
})

// ----------------------------------- FLOOR CHANGING LOGIC -------------------------------------

// here there are no name arrays for either of these, that's because they aren't supposed to be visible in-game. the rest still works exactly
// the same as with all the other kinds of objects.
const floorDecreaserPositions = [
    { x: -1050, y: 1640 },
    { x: -1010, y: 1640 },
    { x: -970, y: 1640 },
    { x: -930, y: 1640 },
    { x: -890, y: 1640 },
    { x: -850, y: 1640 }
]

const floorIncreaserPositions = [
    { x: -690, y: 1800 },
    { x: -650, y: 1800 },
    { x: -610, y: 1800 },
    { x: -570, y: 1800 },
    { x: -530, y: 1800 },
    { x: -490, y: 1800 }
]

const floorIncreasers = []
const floorDecreasers = []

// note to self: if you want to use the index of an array in a forEach loop and only put "index" as the thing the loop should iterate over,
// it's just gonna use "index" as the name for each of the objects in the array and so you'll just end up listing the entire object and not the index number. 
// so, always put another argument in front of it, even if it's not even used in the loop

floorIncreaserPositions.forEach((placeholder, index) => {
    const increaser = {
        position: floorIncreaserPositions[index],
        width: 40,
        height: 40
    }
    floorIncreasers.push(increaser)
})

floorDecreaserPositions.forEach((placeholder, index) => {
    const decreaser = {
        position: floorDecreaserPositions[index],
        width: 40,
        height: 40
    }
    floorDecreasers.push(decreaser)
})
