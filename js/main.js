$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items:3,
        autoplay:true,
        responsiveClass:true,
        responsiveRefreshRate:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

  });