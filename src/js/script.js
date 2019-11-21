$(document).ready(function(){
    $('.carousel_inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev" style="outline: none"><img src="icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"  style="outline: none"><img src="icons/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
              }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
              }
            },
        ]
      });
  });

$(document).ready(function(){
    $('.carousel_news').slick({
        dots: true,
        dotClass: "dots",
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev" style="outline: none"><img src="icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next" style="outline: none"><img src="icons/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
              }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
              }
            },
        ]
      });
  });
$(document).ready(function(){
    $('.single_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        autoplay: true
      });
  });

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar'),
    dropdown = document.querySelectorAll('.dropdown'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active'),
        navbar.classList.toggle('navbar_active');
    });

    dropdown.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active'),
            navbar.classList.toggle('navbar_active')
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const search_input = document.querySelector('.search_input'),
    search_btn = document.querySelector('.search_btn');

    search_btn.addEventListener('click', () => {
        search_input.classList.toggle('search_input_active');
    });
});
$('html').click(function() {
    $('.search_input').hide();
    
 });
$('.search').click(function(event){
     event.stopPropagation();
});

$('.search_btn').click(function(event){
     $('.search_input').toggle();
});











