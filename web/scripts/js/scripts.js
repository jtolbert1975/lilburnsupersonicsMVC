define([
    'jquery',
    'owlcar'

   


], function($){


        $(".rslides").responsiveSlides({
            auto: true,
            speed: 750,
            timeout: 5000,
            pager: true,
            nav: false,
            navContainer: "rslides_nav",
            pause: true,
            pauseControls: true,
            "prevText": "Previous",
            "nextText": "Next",
            namespace: "rslides",
            manualControls: "rslides_nav"

        });


    $('#carousel').owlCarousel({
        margin: 0,
        loop: true,
        autoplay:  true

    });

     // $('.bslides__list')

  /*  $("#aboutNav").on("click", function(){
        //alert("Hello Big Balls");
        $("#home").css("display", "none");
        $("#about").css("display", "inline-flex");


    });*/

  /*  $('.circular1').wrap('<a href="home.html"></a>');*/

    //var winwidth = $(window).width();
    //alert(winwidth);





    //var rtprev = $('.rslides_button .prev');

        var navGrp = $('.rslides_nav');
            //.find('.rslides_button .prev');

        $(navGrp).on('click','.rslides_button.prev',function(){
            console.log('You Want To Go Back');


            //e.preventDefault;
        });

        $(navGrp).on('click','.rslides_button.next',function(){
            console.log('You Want To Go Forward');


            //e.preventDefault;
        });

        function move(btn){


            return false;
        }
}





);

$(document).ready(function() {



  // $("#main_carousel").owlCarousel();

});

