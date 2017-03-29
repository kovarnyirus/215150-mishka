/*Мобильное меню*/
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav-toggle');

navToggle.addEventListener('click', function() {
  navMain.classList.contains('main-nav--closed') ?
    navMain.classList.remove('main-nav--closed') : navMain.classList.add('main-nav--closed')
});
