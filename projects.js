const imgs = ['./imgs/tracelink.png', './imgs/val_batch1_pred.jpg', './imgs/sonicfusion.png', './imgs/ifit.jpg']
const titles = ['TraceLink', 'License Plate Tracker', 'Voice Converter', 'Fitness Tracker']
const descs = [
    'A system that verifies product authenticity, and lets customers have access to detailed history of the product. Has a website interface that stores data on the blockchain, and robotic assistance for inspections conducted by authorities.',
    'An application detects license plates, reads the number and looks for it in nearby cams!',
    'Implemented voice separation algorithm described in a paper, in MATLAB, and used a model called so-vits-svc to train on voice data.',
    'App & smartwatch that recorded movement & used an algorithm to predict repitions, along with features like real-time equipment availability.'
]
console.log('starting')
var count = 0

function nextProject() {
    document.getElementById('img').src = imgs[count]
    document.getElementById('title').innerText = titles[count]
    document.getElementById('desc').innerText = descs[count]
    document.getElementById('number').innerText = String(count + 1) + '/' + String(imgs.length)
    count += 1
    return
}

function firstProject() {
    count = 0
    nextProject()
    console.log('first project displayed')
    return
}
firstProject()

function nextWCheck() {
    if (count == -1) {
        count = count + 2
    }
    if (count < imgs.length) {
        nextProject()
    }
    else {
        firstProject()
    }
    console.log('Changed')
    return
}

function backProject() {
    document.getElementById('img').src = imgs[count]
    document.getElementById('title').innerText = titles[count]
    document.getElementById('desc').innerText = descs[count]
    document.getElementById('number').innerText = String(count + 1) + '/' + String(imgs.length)
    count -= 1
    return
}
function lastProject() {
    count = imgs.length - 1
    backProject()
    console.log('last project displayed')
    return
}
function backWCheck() {
    if (count == imgs.length) {
        count = count - 2
    }
    if (count >= 0) {
        backProject()
    }
    else {
        lastProject()
    }
    console.log('Changed')
    return
}
