[10:13 pm, 29/03/2026] Akash: const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",    // 0 normal
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",  // 1 confused
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",             // 2 pleading
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",             // 3 sad
    "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",       // 4 sadder
    "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",             // 5 devastated
    "https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif",               // 6 very devastated
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"  // 7 crying runaway
]

const noMessages = [
    "No",…
[10:17 pm, 29/03/2026] Akash: // ===== VARIABLES =====
let yesClicked = false;
let noClickCount = 0;
let runawayEnabled = false;

const catGif = document.getElementById('cat-gif')
const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const music = document.getElementById('bg-music')

// ===== YES BUTTON =====
function handleYesClick() {

    yesClicked = true;

    // change to your final image
    catGif.src = "triochaos.jpg";

    // play music
    music.currentTime = 0;
    music.muted = false;
    music.play().catch(() => {});
}

// ===== NO BUTTON =====
const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
    "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",
    "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",
    "https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"
]

const noMessages = [
    "No",
    "Vabila? 🤔",
    "Arekbar vabila... 🥺",
    "Dobara sochlo...",
    "Dek vabia shunia bhujia no kois... 😢",
    "MAIN NHI DIKHAUNGA ??? ",
    "Atotuk ni amrr friendship...",
    "Ami vbsi na tora ita korbe! 😭",
    "Fzlmi ni doria dekha 😜"
]

function handleNoClick() {

    if (yesClicked) return;

    noClickCount++;

    // change text
    const msgIndex = Math.min(noClickCount, noMessages.length - 1)
    noBtn.textContent = noMessages[msgIndex]

    // grow YES button
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize)
    yesBtn.style.fontSize = '${currentSize * 1.35}px'

    const padY = Math.min(18 + noClickCount * 5, 60)
    const padX = Math.min(45 + noClickCount * 10, 120)
    yesBtn.style.padding = '${padY}px ${padX}px'

    // shrink NO
    if (noClickCount >= 2) {
        const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize)
        noBtn.style.fontSize = '${Math.max(noSize * 0.85, 10)}px'
    }

    // change GIF
    const gifIndex = Math.min(noClickCount, gifStages.length - 1)
    catGif.src = gifStages[gifIndex]

    // enable runaway
    if (noClickCount >= 5 && !runawayEnabled) {
        enableRunaway()
        runawayEnabled = true
    }
}

// ===== RUNAWAY BUTTON =====
function enableRunaway() {

    // desktop (mouse)
    noBtn.addEventListener('mouseover', runAway);

    // mobile (touch)
    noBtn.addEventListener('touchstart', function(e) {
        if (runawayEnabled) {
            runAway();
        }
    });
}

function runAway() {
    const margin = 20

    const maxX = window.innerWidth - noBtn.offsetWidth - margin
    const maxY = window.innerHeight - noBtn.offsetHeight - margin

    const randomX = Math.random() * maxX
    const randomY = Math.random() * maxY

    noBtn.style.position = 'fixed'
    noBtn.style.left = '${randomX}px'
    noBtn.style.top = '${randomY}px'
}
