const hamburger = document.querySelector(".open-hamburger-menu")
hamburger.addEventListener("click", () => {
    document.querySelector(".hamburger-menu").style.display = "block"
})

const  hamburgerClose = document.querySelector(".close-hamburger-menu")
hamburgerClose.addEventListener("click", () => {
    document.querySelector(".hamburger-menu").style.display = "none"
})