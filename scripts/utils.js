// this is where the canvas is created
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const offset = {
    x: -1890,
    y: -960
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

// this is where i created all the distance calculation functions.
function calculateDistance(object1, object2) {
    const dx = object1.position.x - object2.position.x
    const dy = object1.position.y - object2.position.y
    return Math.sqrt(dx * dx + dy * dy)
}

function calculateMidpointDistance(object1, object2) {
    const dx = object1.position.x - (object2.position.x + object2.width / 2)
    const dy = object1.position.y - (object2.position.y + object2.height / 2)
    return Math.sqrt(dx * dx + dy * dy)
}

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

// so i'm writing this down because i'm absolutely mind blown. GPT 3.5 was able to do things like
// string interpolation and stuff right and that's cool and all but then GPT 4 comes around and just blows it out of the park
// i needed my code to first check if the player is near an NPC and then randomly play an audio file out of a pool of 5 files per NPC
// the issue was that there was nothing that determined which audio pool to pull from, meaning that 
// it would just play one file for each NPC at once which is obviously bad. i therefore asked chatGPT for help
// and he found a really good solution immediately. the code down below is using two different things: the first one being the object containing all the audio file arrays. it looks like this:
// npcAudio = {
//     linus: [
//         '/audio/npc/linus/linus1.wav',
//         '/audio/npc/linus/linus2.wav',
//         '/audio/npc/linus/linus3.wav',
//         '/audio/npc/linus/linus4.wav',
//         '/audio/npc/linus/linus5.wav'
//     ],
//     etc etc etc, just the same thing for each NPC
// }
// the other thing is the NPC's image URL, that being for example '/sbijou/assets/characters/npcs/linus.png'.
// now, just from looking at this i would not have been able to really do anything with this information but GPT 4 surely was able to. npcAudio[ ... ] first makes sure that whatever is the result 
// of the complicated looking code inside of the brackets is then chosen as the array of audio files that the game should randomize. so, for example, if the result is 'linus', it will then 
// randomly pick an audio file to play from the linus array. 

// npc.src then accesses the NPC's image file URL.
// split('/') gets rid of the forward slashes in the URL and then makes an array that contains each of the words that remain as objects in said array, like this:
// ['sbijou', 'assets', 'characters', 'npcs', 'linus.png']
// pop() then takes the last object in this array and returns it, leaving only 'linus.png'. 
// split('.') removes the dot in linus.png and creates yet another array containing the two remaining words, like this:
// ['linus', 'png']
// shift() then takes the first object in that array and again returns it, making the final result simply the word 'linus' which is then used to determine that in this specific case,
// one random audio file from the linus array should be played. just wow.
// upon initially asking him what the hell this long complicated looking code does, he then also realized it could be optimized further by defining this fairly long and ugly looking line of code
// as a const, npcName, so that it's only there once and can then be accessed quickly and easily without having to go through the hassle of writing the entire extraction logic over again. 
 
function randomizeDialogue(npc) {
    const npcName = npc.src.split('/').pop().split('.').shift()
    const randomIndex = Math.floor(Math.random() * npcAudio[npcName].length)
    const selectedAudio = npcAudio[npcName][randomIndex]

    const npcDialogue = new Audio(selectedAudio)
    npcDialogue.play()
}

