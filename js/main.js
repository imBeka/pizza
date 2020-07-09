var burger = $('.burger');
var nav_mobile = $('.nav-mobile');
function fade() {
  burger.on('click', function () {
    burger.toggleClass('burger-active');
    nav_mobile.slideToggle();
  })
}
fade();

// if (burger.hasClass('burger-active')) {
  
// }