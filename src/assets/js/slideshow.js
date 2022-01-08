const slideInterval = 1000 * 10
const img = document.querySelector("#slideimage")

const images = [
    "assets/img/rijksmuseum.jpg",
    "assets/img/inside.jpg",
    "assets/img/ship.jpg",
]
let imgIndex = 0

setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length
    img.setAttribute('src', images[imgIndex])
}, slideInterval)