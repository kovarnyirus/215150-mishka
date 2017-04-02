/*Мобильное меню*/
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav-toggle");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var popap = document.querySelector('.popap');
var popapOverlay = document.querySelector(".popap-overlay");
var buy = document.querySelector("#buy");

buy.addEventListener("click", function() {
    popap.classList.remove("popap--closed");
    popap.classList.add("popap--opened");
    popapOverlay.classList.remove("popap--closed");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popap.classList.contains("popap--opened")) {
      popap.classList.remove("popap--opened");
      popap.classList.add("popap--closed");
      popapOverlay.classList.add("popap--closed");
    }
  }
});
