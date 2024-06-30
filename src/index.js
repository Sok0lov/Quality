import $ from 'jquery';
import './js/owl.carousel.js';
import './js/owl.carousel.min.js';
import './scss/main.scss';


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,

        items: 1,
        responsive: {
            0: {
               dots: true
            },
            768: {
                dots: false,
                nav: true,
                navText:[
                    '',
                    ''
                ],
            }
        }
    });
});

$(document).ready(function () {
    $('.burger-menu').click(function () {
        $('.burger-menu').toggleClass('active');
        $('.menu').toggleClass('active');
    });
});