(function(){

  window.addEventListener('DOMContentLoaded', () => {

  $('.instaslider').slick({
     dots: false,
     infinite: true,
     speed: 500,
     autoplay: true,
     autoplaySpeed: 5000,
     arrows: false,
     slidesToShow: 4,
     slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
   ]
   });

  });
  
}());
