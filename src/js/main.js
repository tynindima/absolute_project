$(document).ready(function () {

  $('#menu-button').on('click', function () {
    $(this).toggleClass('open');
  });

  $('#search-mobile-btn').on('click', function () {
      $(this).attr('src', function(_, attr) {
        return attr === './img/header/search-mobile.png' ? './img/header/search-close.svg' : './img/header/search-mobile.png';
      });

  });
});
