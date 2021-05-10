(function(){

  window.addEventListener('DOMContentLoaded', () => {

  $('.instaslider').slick({
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: false
   });

  });
  
}());
