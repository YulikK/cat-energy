var navMain = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__open-menu');

navMain.classList.remove('main-nav--nojs');
console.log("тут");

navButton.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
