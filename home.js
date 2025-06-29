
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
    window.location.href = "https://7ds-adarsh.github.io/wave2.0/home.html";
});

document.getElementById("nav-shop").addEventListener("click", () => {
    window.location.href = "https://7ds-adarsh.github.io/wave2.0/plp.html";
});

document.getElementById("ntab-about").addEventListener("click", () => {
    window.location.href = "https://7ds-adarsh.github.io/wave2.0/about.html";
});

document.getElementById("login").addEventListener("click", () => {
    window.location.href = "https://7ds-adarsh.github.io/wave2.0/login.html";
});

document.getElementsByClassName("pd").addEventListener("click", () => {
    window.location.href = "https://7ds-adarsh.github.io/wave2.0/pdp.html";
});

// welcome on login tab

const storedUSER = JSON.parse(localStorage.getItem('waveUser'));

if (storedUSER && storedUSER.username) {
  document.getElementById('welcome').textContent = `Welcome ${storedUSER.username}`;
  document.getElementById('login').style.display = "none";
} else {
  document.getElementById('welcome').textContent = "Welcome";
}
