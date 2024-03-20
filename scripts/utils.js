

function calculateMidpoint(object) {
    const middleX = object.position.x + object.width / 2
    const middleY = object.position.y + object.height / 2
    return {
        x: middleX,
        y: middleY
    }
}

function calculateFourtableVerticalDistance(object1, object2) {
    const dx = object1.position.x - (object2.position.x + 85)
    const dy = object1.position.y - (object2.position.y + 35)
    return Math.sqrt(dx * dx + dy * dy)
}

function calculateGongDistance(object1, object2) {
    const dx = object1.position.x - (object2.position.x + 35)
    const dy = object1.position.y - (object2.position.y - 15)
    return Math.sqrt(dx * dx + dy * dy)
}

function calculateCupsDistance(object1, object2) {
    const dx = object1.position.x - (object2.position.x - 60)
    const dy = object1.position.y - (object2.position.y + 30)
    return Math.sqrt(dx * dx + dy * dy)
}

function calculateSinkDistance(object1, object2) {
    const dx = object1.position.x - (object2.position.x - 30)
    const dy = object1.position.y - (object2.position.y + 60)
    return Math.sqrt(dx * dx + dy * dy)
}

function calculatePrinterDistance(object1, object2) {
    const dx = object1.position.x - (object2.position.x + 80)
    const dy = object1.position.y - (object2.position.y + 45)
    return Math.sqrt(dx * dx + dy * dy)
}

function calculateAdminBellDistance(object1, object2) {
    const dx = object1.position.x - (object2.position.x + 70)
    const dy = object1.position.y - (object2.position.y + 270)
    return Math.sqrt(dx * dx + dy * dy)
}

function calculateNPCDistance(object1, object2) {
    const dx = object1.position.x - object2.position.x
    const dy = object1.position.y - object2.position.y
    return Math.sqrt(dx * dx + dy * dy)
}

function playRandomDialogueKevin() {
    var randomIndex = Math.floor(Math.random() * kevinAudio.length)
    var kevinDialogue = new Audio(kevinAudio[randomIndex])

    kevinDialogue.play()
}

function playRandomDialogueLinus() {
    var randomIndex = Math.floor(Math.random() * linusAudio.length)
    var linusDialogue = new Audio(linusAudio[randomIndex])

    linusDialogue.play()
}

