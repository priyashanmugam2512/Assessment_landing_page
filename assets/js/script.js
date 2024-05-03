// slider for brand section 
$(document).ready(function(){
  $('.brand_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          arrows:false,
          dots:true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows:false,
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows:false,
          dots:true
        }
      }
    ]
  });
});