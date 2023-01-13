const burger = document.querySelector(".Bar")
const navLinks = document.querySelector(".nav")

burger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile_menu')
})