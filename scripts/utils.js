

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

function calculateAdminBellDistance(object1, object2) {
    const dx = object1.position.x - (object2.position.x + 70)
    const dy = object1.position.y - (object2.position.y + 270)
    return Math.sqrt(dx * dx + dy * dy)
}