/* line-header start */
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());
/* line-header end */

/* burger start */
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());
/* burger end */

/* collaps start */
// $("[data-collaps]").on("click", function (event) {
//     event.preventDefault();

//     var $this = $(this),
//         blockId = $this.data('collaps');

//     $(blockId).slideToggle();
// });

$(function () {
    $("#accordion").accordion();
});

/* collaps end */