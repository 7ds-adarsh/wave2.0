
// <!-- JS: Toggle mobile menu -->

const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
});

// managing link redirections

document.getElementById("logo").addEventListener("click", () => {
    window.location.href = `${window.location.origin}/homepage/home.html`;
});

document.getElementById("nav-shop").addEventListener("click", () => {
    window.location.href = `${window.location.origin}/plp/plp.html`;
});
