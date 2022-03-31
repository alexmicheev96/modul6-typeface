document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu__list'),   // класс со всеми элементами обычно это UL
    menuItem = document.querySelectorAll('.nav-menu__item'),    // это списки li
    hamburger = document.querySelector('.hamburger');    // класс гамбургера

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('nav-menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('nav-menu__list_active');
        });
    });
});