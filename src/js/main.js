$(document).ready(function() {
  function resize() {
    const width = $(window).width();
    const menuIsShow = width >= 1200 ? 'show' : '';
    const searchIsShow = width >= 768 ? 'show' : '';

    $('#menu-cnt-top').removeClass('show').addClass(menuIsShow);
    $('#input-cnt-top').removeClass('show').addClass(searchIsShow);
  }

  $(window).on('resize', resize).trigger('resize');

  $('#menu-button').on('click', function() {
    $(this).toggleClass('open');
    $('#menu-cnt-top').collapse('toggle');
  });

  $('#search-mobile-btn').on('click', function() {
    $(this).attr('src', function(_, attr) {
      return attr === './img/header/search-mobile.png' ?
        './img/header/search-close.svg' :
        './img/header/search-mobile.png';
    });

    $('#input-cnt-top').collapse('toggle');
  });
});
