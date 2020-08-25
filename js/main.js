$(document).ready(function() {
  function resize() {
    const width = $(window).width();
    const menuIsShow = width >= 1200 ? 'show' : '';
    const searchIsShow = width >= 768 ? 'show' : '';

    if (width < 768) {
      $('.footer__title').on('click', function() {
        $(this).next('ul').collapse('toggle');
        $(this).children().toggleClass("open");
        $(this).toggleClass("click-color");
      });
    }

    $('#menu-cnt-top').removeClass('show').addClass(menuIsShow);
    $('#input-cnt-top').removeClass('show').addClass(searchIsShow);
    $('.footer__list').removeClass('show').addClass(searchIsShow);
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

  for (let i = 1; i <= 5; i++) {
    $(`#star--${i}`).on('click', function() {
      $('#rating')
        .removeClass('stars--1 stars--2 stars--3 stars--4 stars--5')
        .addClass(`stars--${i}`);
    });
  }

  for (let i = 0; i <= 4; i++) {
    $(`#carousel-ind-${i}`).on('click', function() {
      $('#carouselExampleCaptions').carousel(i);
    });
  }

  $('#carousel-btn-next').on('click', function() {
    $('#carouselExampleCaptions').carousel('next');
  });

  $('#carousel-btn-prev').on('click', function() {
    $('#carouselExampleCaptions').carousel('prev');
  });
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });


}
