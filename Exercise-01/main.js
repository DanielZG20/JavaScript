function load() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('img')
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    msg.innerHTML = `Now is ${hours} hours and ${minutes} minutes.`

    if (hours >= 0 && hours < 12) {
        img.src = 'img/morning.jpg'
        document.body.style.background = '#F4E3B2'
    } else if (hours >= 12 && hours < 18) {
        img.src = 'img/afternoon.jpg'
        document.body.style.background = '#CEA62D'
    } else {
        img.src = 'img/night.jpg'
        document.body.style.background = '#0A090C'
    }
}