(function(){

  window.addEventListener('DOMContentLoaded', () => {

  $('.imgcontentslider').slick({
     dots: true,
     infinite: true,
     speed: 1000,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 5000,
     arrows: true,
     fade: true,
   });

  });
  
}());
