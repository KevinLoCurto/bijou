const interactableNamesEG = [
    'gong', //0
    'adminBell', //1
    'container187', //2
    'adminDesk', //3
    'adminTable', //4
    'plcTable1', //5
    'plcTable2', //6
    'plcTable3', //7
    'plcTable4', //8
    'plcTable5', //9
    'plcTable6', //10
    'plcTable7', //11
    'plcTable8', //12
    'plcTable9', //13
    'plcTable10', //14
    'plcTable11', //15
    'plcTable12', //16
    'plcTable13', //17
    'cups', //18
    'sink', //19
    'printer', //20
    'trashcanEingang', //21
    'trashcanLA', //22
    'trashcanPLC', //23
    'trashbinAdmin', //24
    'trashbinChristine', //25
    'trashbinCutter', //26
    'trashbinRosa', //27
]

const interactablePositionsEG = [
    { x: 470, y: 200 }, //0
    { x: -250, y: 0 }, //1
    { x: 1190, y: -880 }, //2
    { x: -370, y: 80 }, //3
    { x: -690, y: 200 }, //4
    { x: 150, y: 1000 }, //5
    { x: 150, y: 720 }, //6
    { x: 110, y: -600 }, //7
    { x: 350, y: -600 }, //8
    { x: 510, y: 1200 }, //9
    { x: 510, y: 880 }, //10
    { x: 110, y: -80 }, //11
    { x: 510, y: 680 }, //12
    { x: 350, y: -80 }, //13
    { x: 790, y: -80 }, //14
    { x: 790, y: -320 }, //15 
    { x: -130, y: 1240 }, //16
    { x: -130, y: 960 }, //17
    { x: -930, y: 0 }, //18
    { x: -530, y: 0 }, //19
    { x: -130, y: 560 }, //20
    { x: 830, y: 1320 }, //21
    { x: -370, y: 440 }, //22
    { x: 790, y: 160 }, //23
    { x: -450, y: 360 }, //24
    { x: 390, y: -200 }, //25
    { x: 230, y: 600 }, //26
    { x: 190, y: 200 }, //27
]

// you'll notice that there's two extra arrays here. this is because there was initially in issue with detecting the distance between the player
// and an interactable. using calculateMidpointDistance, what's different to regular old calculateDistance is that it uses the object's width
// and height to calculate its midpoint. before creating these two arrays and then implementing them into the creation of the interactable objects
// further down, the interactables didn't have a width nor a height assigned to them so the function would just not work. 
const interactableWidthsEG = [
    120, //0
    80, //1
    120, //2
    120, //3
    240, //4
    240, //5
    240, //6
    200, //7
    200, //8
    200, //9
    200, //10
    200, //11
    200, //12
    200, //13
    120, //14
    120, //15
    120, //16
    120, //17
    80, //18
    280, //19
    160, //20
    40, //21
    40, //22
    40, //23
    40, //24
    40, //25
    40, //26
    40, //27
]

const interactableHeightsEG = [
    40, //0
    280, //1
    160, //2
    200, //3
    200, //4
    200, //5
    200, //6
    240, //7
    240, //8
    240, //9
    240, //10
    120, //11
    120, //12
    120, //13
    200, //14
    200, //15
    200, //16
    200, //17
    240, //18
    120, //19
    80, //20
    40, //21
    40, //22
    40, //23
    40, //24
    40, //25
    40, //26
    40, //27
]

// this function is used to change the object's image to its highlighted variant when its state is 'Highlighted' and to the interacted variant
// when it's set to 'Interacted'
function updateInteractableState(object, state) {
    object.state = state
    const newSrc = `/assets/interactables/${object.name}${object.state}.png`
    object.image.src = newSrc
}

const interactablesEG = []

interactableNamesEG.forEach((name, index) => {
    const object = {
        name: name,
        position: interactablePositionsEG[index],
        width: interactableWidthsEG[index],
        height: interactableHeightsEG[index],
        state: 'Initial',
        interacted: false,
        image: new Image(),
    }
    object.image.src = `/assets/interactables/${object.name}${object.state}.png`
    interactablesEG.push(object)
})

