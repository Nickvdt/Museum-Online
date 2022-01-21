const slideInterval = 1000 * 10
const img = document.querySelector("#slideimage")

const images = [
    "assets/img/rijksmuseum.jpg",
    "assets/img/inside.jpg",
    "assets/img/ship.jpg",
    "assets/img/nacht.jpg",
    "assets/img/nacht2.jpg"
]
let imgIndex = 0

setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length
    img.setAttribute('src', images[imgIndex])
}, slideInterval)

const exhibs = [
    document.querySelector("#exhibitionOne"),
    document.querySelector("#exhibitionTwo"),
    document.querySelector("#exhibitionThree"),
]

const exhibLinks = [
    document.querySelector("#exhibitionOneLink"),
    document.querySelector("#exhibitionTwoLink"),
    document.querySelector("#exhibitionThreeLink"),
]

function showExhib(num) {
    for (link of exhibLinks) {
        link.classList.remove("active")
    }
    for (exhib of exhibs) {
        exhib.classList.add("hidden")
    }
    exhibs[num].classList.remove("hidden")
    exhibLinks[num].classList.add("active")
}