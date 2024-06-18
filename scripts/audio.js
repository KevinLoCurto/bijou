// all the general audio stuff. Howl is a javascript extension i added that's supposed to make audio playing easier and faster but to be honest,
// i really don't see a difference at all so this is really the only place i use it.
const audio = {
    sBijou: new Howl({
        src: '/audio/environment/sbijou.wav'
    }),
    bell: new Howl({
        src: '/audio/environment/PING.wav',
    }),
    cups: new Howl({
        src: '/audio/environment/cups.wav',
    }),
    click: new Howl({
        src: '/audio/environment/click.wav',
    }),
    sink: new Howl({
        src: '/audio/environment/gschirrspüeler.wav',
    }),
    gong: new Howl({
        src: '/audio/environment/gong.wav',
        volume: 0.2
    }),
    crumble: new Howl({
        src: '/audio/environment/crumble.wav',
    }),
    harryZemeschiss: new Howl({
        src: '/audio/environment/harryZemeschiss.wav',
    }),
    nikiSoundtrack: new Howl({
        src: '/audio/player/niki/nikiSoundtrack.wav'
    })
}

let soundtrackPlaying = false

function playNikiSoundtrack() {
    if (!soundtrackPlaying) {
        audio.nikiSoundtrack.play()
    }
    soundtrackPlaying = true
}

// the npcAudio and playerAudio arrays store the audio files of each NPC and of each player respectively. this way they can be easily 
// accessed without taking up so much space.
const npcAudio = {
    linus: [
        '/audio/npc/linus/linus1.wav',
        '/audio/npc/linus/linus2.wav',
        '/audio/npc/linus/linus3.wav',
        '/audio/npc/linus/linus4.wav',
        '/audio/npc/linus/linus5.wav'
    ],
    kevin: [
        '/audio/npc/kevin/kevin1.wav',
        '/audio/npc/kevin/kevin2.wav',
        '/audio/npc/kevin/kevin3.wav',
        '/audio/npc/kevin/kevin4.wav',
        '/audio/npc/kevin/kevin5.wav'
    ],
    zeri: [
        '/audio/npc/zeri/zeri1.wav',
        '/audio/npc/zeri/zeri2.wav',
        '/audio/npc/zeri/zeri3.wav',
        '/audio/npc/zeri/zeri4.wav',
        '/audio/npc/zeri/zeri5.wav'
    ],
    gian: [
        '/audio/npc/gian/gian1.wav',
        '/audio/npc/gian/gian2.wav',
        '/audio/npc/gian/gian3.wav',
        '/audio/npc/gian/gian4.wav',
        '/audio/npc/gian/gian5.wav'
    ],
    simon: [
        '/audio/npc/simon/simon1.wav',
        '/audio/npc/simon/simon2.wav',
        '/audio/npc/simon/simon3.wav',
        '/audio/npc/simon/simon4.wav',
        '/audio/npc/simon/simon5.wav'
    ],
    niki: [
        '/audio/npc/niki/niki1.wav',
        '/audio/npc/niki/niki2.wav',
        '/audio/npc/niki/niki3.wav',
        '/audio/npc/niki/niki4.wav',
        '/audio/npc/niki/niki5.wav'  
    ]
}

const playerAudios = {
    linus: {
        sbijou: '/audio/player/linus/linusBijou.wav',
        select: '/audio/player/linus/linusSelect.wav',
        start: '/audio/player/linus/linusStart.wav',
        end: '/audio/player/linus/linusEnd.wav'
    },
    kevin: {
        sbijou: '/audio/player/kevin/kevinBijou.wav',
        select: '/audio/player/kevin/kevinSelect.wav',
        start: '/audio/player/kevin/kevinStart.wav',
        end: '/audio/player/kevin/kevinEnd.wav'
    },
    zeri: {
        sbijou: '/audio/player/zeri/zeriBijou.wav',
        select: '/audio/player/zeri/zeriSelect.wav',
        start: '/audio/player/zeri/zeriStart.wav',
        end: '/audio/player/zeri/zeriEnd.wav'
    },
    gian: {
        sbijou: '/audio/player/gian/gianBijou.wav',
        select: '/audio/player/gian/gianSelect.wav',
        start: '/audio/player/gian/gianStart.wav',
        end: '/audio/player/gian/gianEnd.wav'
    },
    simon: {
        sbijou: '/audio/player/simon/simonBijou.wav',
        select: '/audio/player/simon/simonSelect.wav',
        start: '/audio/player/simon/simonStart.wav',
        end: '/audio/player/simon/simonEnd.wav'
    },
    niki: {
        sbijou: '/audio/player/niki/nikiBijou.wav',
        select: '/audio/player/niki/nikiSelect.wav',
        start: '/audio/player/niki/nikiStart.wav',
        end: '/audio/player/niki/nikiEnd.wav'
    },
}

