const imgs = ['val_batch1_pred.jpg', 'IoT.png']
const titles = ['License Plate Tracker', 'Speed Detector']
const descs = ['This system detects license plates, reads the number and looks for it in nearby cams.', 'Uses Arudino with IR sensors & RFID module to identify vehicle and measure speed. Sends data to ThingSpeak with HTTP protocol.']

console.log('starting')
var count = 0

function nextProject ()  {
    document.getElementById('img').src = imgs[count]
    document.getElementById('title').innerText = titles[count]
    document.getElementById('desc').innerText = descs[count]
    document.getElementById('number').innerText = String(count+1)+'/'+String(imgs.length)
    count += 1
    return
}

function firstProject ()  {
    count = 0
    nextProject()
    console.log('first project displayed')
    return
}
firstProject()

function nextWCheck ()  {
    if (count < imgs.length)  {
        nextProject()
    }
    else if (count >= imgs.length)  {
        firstProject()
    }
    console.log('Changed')
    return
}

function backProject ()  {
    document.getElementById('img').src = imgs[count]
    document.getElementById('title').innerText = titles[count]
    document.getElementById('desc').innerText = descs[count]
    count -= 1
    return
}
function lastProject ()  {
    count = imgs.length-1
    backProject()
    console.log('last project displayed')
    return
}
function backWCheck ()  {
    if (count >= 0)  {
        backProject()
    }
    else if (count = imgs.length-1)  {
        lastProject()
    }
    console.log('Changed')
    return
}
