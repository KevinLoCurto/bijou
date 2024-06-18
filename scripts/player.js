let facing = 'Down'
let currentPlayer = 'linus'
let selectionAudioUnplayable = true

// both of these arrays are currently not used. if i do need to use string interpolation with just the player names, this is where i could pull 
// them from.
const players = [
    "linus",
    "kevin",
    "zeri",
    "gian",
    "simon",
    "niki"
]

const playerNames = [
    'Linus',
    'Kevin',
    'Zeri',
    'Gian',
    'Simon',
    'Niki',
]

// here's where the data for each player's stats is stored. 
const playerStats = {
    linus: {
        movementSpeed: 4,
        trashCapacity: 20,
        largeMax: 10,
        mediumMax: 15,
        smallMax: 18,
        petaluMax: 5
    },
    kevin: {
        movementSpeed: 4,
        trashCapacity: 25,
        largeMax: 13,
        mediumMax: 16,
        smallMax: 19,
        petaluMax: 10
    },
    zeri: {
        movementSpeed: 5,
        trashCapacity: 15,
        largeMax: 5,
        mediumMax: 14,
        smallMax: 16,
        petaluMax: 0
    },
    gian: {
        movementSpeed: 3,
        trashCapacity: 25,
        largeMax: 13,
        mediumMax: 16,
        smallMax: 19,
        petaluMax: 10
    },
    simon: {
        movementSpeed: 5,
        trashCapacity: 15,
        largeMax: 5,
        mediumMax: 14,
        smallMax: 16,
        petaluMax: 0
    },
    niki: {
        movementSpeed: 5,
        trashCapacity: 30,
        largeMax: 14,
        mediumMax: 17,
        smallMax: 19,
        petaluMax: 15
    }

}

const playerImage = new Image()

const player = new Sprite({
    // this puts the player perfectly in the middle of the screen
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    frames: { max: 4 },
    // playerImage is going to be continually updated in the animate function, as you can see in main.js.
    image: playerImage,
    moving: false,
})



