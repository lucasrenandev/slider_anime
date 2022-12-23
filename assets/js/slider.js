// Elementos
const previousButton = document.querySelector(".previous-button")
const nextButton = document.querySelector(".next-button")
const slideImage = document.querySelectorAll(".slide-image")
const randomButton = document.querySelector(".random-button")

// Slide atual
let currentSlide = 0

// Remover slide ativo
function hideSlide() {
    slideImage.forEach(image => image.classList.remove("active"))
}

// Adicionar slide ativo
function showSlide() {
    slideImage[currentSlide].classList.add("active")
}

// Próximo slide
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

// Slide anterior
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

// Slide aleatório
function randomSlide() {
   currentSlide = Math.floor(Math.random() * slideImage.length)
   hideSlide()
   showSlide()
}

// Adicionar evento aos elementos
nextButton.addEventListener("click", nextSlide)
previousButton.addEventListener("click", previousSlide)
randomButton.addEventListener("click", randomSlide)