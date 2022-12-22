const previousButton = document.querySelector(".previous-button")
const nextButton = document.querySelector(".next-button")
const slideImage = document.querySelectorAll(".slide-image")
const randomButton = document.querySelector(".random-button-container")

let currentSlide = 0

function hideSlide() {
    slideImage.forEach(image => image.classList.remove("active"))
}

function showSlide() {
    slideImage[currentSlide].classList.add("active")
}

function nextSlide() {
    if(currentSlide < slideImage.length - 1) {
        currentSlide ++
    }
    else {
        currentSlide = 0
    }
    hideSlide()
    showSlide()
}

function previousSlide() {
    if(currentSlide === 0) {
        currentSlide = slideImage.length - 1
    }
    else {
        currentSlide--
    }
    hideSlide()
    showSlide()
}

function randomSlide() {
   currentSlide = Math.floor(Math.random() * slideImage.length)
   hideSlide()
   showSlide()
}

nextButton.addEventListener("click", nextSlide)
previousButton.addEventListener("click", previousSlide)
randomButton.addEventListener("click", randomSlide)