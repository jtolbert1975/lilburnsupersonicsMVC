define([
    'jquery',
    'swiper',
    'js/modules/expandableDivs'
   


], function($){


    

    $("#aboutNav").on("click", function(){
        //alert("Hello Big Balls");
        $("#home").css("display", "none");
        $("#about").css("display", "inline-flex");


    });

    $('.circular1').wrap('<a href="home.html"></a>');

    //var winwidth = $(window).width();
    //alert(winwidth);

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });



}





);

$(document).ready(function() {

  // $("#main_carousel").owlCarousel();

});

