// Animating the navbar
window.onscroll = (() => {
    if (document.documentElement.clientWidth > 320 && document.documentElement.clientWidth < 768) {
        scrollFunction();
    }
});

function scrollFunction() {
    const header = document.querySelector("HEADER");

    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        header.classList = 'scrolled';
    } else {
        header.classList = '';
    }
}

// Opening and closing the lateral menu
const menuIcon = document.querySelector('.hamburger_menu');
const menu = document.querySelector('.sideMenu');
const closeMenu = document.querySelector('.closeMenu');

menuIcon.addEventListener('click', () => {
    menu.style.left = "0";
});
closeMenu.addEventListener('click', () => {
    menu.style.left = "-1000px";
});