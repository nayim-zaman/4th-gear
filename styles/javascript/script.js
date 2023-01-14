const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

let isToggled = false;

menu.addEventListener('click', () => {
    if (!isToggled) {
        navbar.classList.add('active')
        menu.innerHTML = '<i class="fa-solid fa-x"></i>'
        isToggled = true;
    } else {
        navbar.classList.remove('active')
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>'
        isToggled = false;
    }
})