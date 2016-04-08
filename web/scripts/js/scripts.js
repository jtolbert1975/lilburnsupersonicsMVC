define([
    'jquery',
    'swiper',


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


        //$('.owl-carousel').owlCarousel
        /*$('#main_carousel').owlCarousel({
            dots: true,
            dotsEach: true,
            loop:true,
            margin:10,
            nav:false,
            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            itemElement: 'div',
            stageElement: 'div',
            items: 1
            /!*responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }*!/
        })

*/            /*function supportsTemplate() {
                return 'content' in document.createElement('template');
            }

        if (supportsTemplate()) {
            alert("Good to Go");
        } else {
            // Use old templating techniques or libraries.
            alert("No Dice");
        }*/
}





);

$(document).ready(function() {

  // $("#main_carousel").owlCarousel();

});

