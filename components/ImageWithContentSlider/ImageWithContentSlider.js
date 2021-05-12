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

  var lastnumb = $('.imgcontentslider .slick-dots li:last-child button').html();
  var lastSpan = '<span>'+lastnumb+'</span>';
  $('.imgcontentslider .slick-dots li:last-child').append(lastSpan);

  });
  
}());
