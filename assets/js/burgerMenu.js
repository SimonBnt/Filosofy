const burgerMenuBtn = document.getElementById("burgerMenuOpenerContainer") 
const burgerMenu = document.getElementById("burgerMenuContentContainer") 
const closeBtn = document.getElementById("closeBurgerMenu")

burgerMenuBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("hideBurgerMenu")
})

closeBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("hideBurgerMenu")
})