var burgerMenu = document.querySelector('.burger__menu');
var menuResponsive = document.querySelector('.top__right');
var overlayMenu = document.querySelector('.overlay__menu');

function toggleBurgerMenu(element, menu, overlay) {
    element.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

burgerMenu.addEventListener('click', function () {
    toggleBurgerMenu(burgerMenu, menuResponsive, overlayMenu);
});

overlayMenu.addEventListener('click', function () {
    toggleBurgerMenu(burgerMenu, menuResponsive, overlayMenu);
})