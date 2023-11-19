$(document).ready(function(){
    $('.customers__stars').starRating({
        totalStars: 5,
        strokeColor: '#F1b90b',
        ratedColor: '#f1b90b',
        starSize: 23,
        readOnly: true,
        strokeWidth: 20
      });
});

// slider

$('.customers__slider').slick({
    infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="btn slider__btn slider__prev"></button>',
nextArrow: '<button class="btn slider__btn slider__next active"></button>',
});

$('.slider__btn').click(function(){
  $('.slider__btn').removeClass('active');
  $(this).addClass('active')
})

