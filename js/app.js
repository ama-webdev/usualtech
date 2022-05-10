$(document).ready(function () {
    $('.u-nav-toggler').click(function (e) { 
        $('.u-menu ul').toggle('fast');
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },            
            1100:{
                items:3
            }
        }
    });
});