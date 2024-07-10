

document.addEventListener('click', function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.menu-icon')) {
        document.documentElement.classList.toggle('menu-open');
    }

    if (targetElement.closest('.header__link')) {
        document.documentElement.classList.remove('menu-open');
    }
});

