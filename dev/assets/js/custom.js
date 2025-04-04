const burger = document.querySelector('.button-burger');
const mobileContainer = document.querySelector(".mobile-container")

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})