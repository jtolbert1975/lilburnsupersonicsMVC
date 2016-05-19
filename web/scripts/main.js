//window.LS = JSON.parse(document.querySelector('head meta[name=LS]').content);

requirejs.config({

    baseUrl: '/scripts',

    waitSeconds: 600,
    paths: {
        jquery: 'vendor/jquery/2.1.4/jquery.min',
        //bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
       // jqueryui: 'http://code.jquery.com/ui/1.11.4/jquery-ui.min',
       // corejs: 'vendor/jquery/bower_components/jquery-ui/ui/core',
       // widgetjs:  'vendor/jquery/bower_components/jquery-ui/ui/widget',
        //accordion: 'vendor/jquery/bower_components/jquery-ui/ui/accordion',
        scriptsjs: 'js/scripts',
        moderniz: 'vendor/modernizer/modernizer',
        domReady: 'vendor/domReady/domReady',
        //hideaddbr: 'js/hideaddressbar',
        picFill: 'vendor/picturefill/picturefill',
        //bxslider: 'vendor/jquery/bxslider/jquery.bxslider.min',
        owlcar: 'vendor/owlcarousel/owl.carousel.min',
        menu: 'js/modules/menu',
        swiper: 'vendor/swiperjs/swiper.min',
        expandDiv: 'js/modules/expandableDivs',
        respslides: 'vendor/responsiveslides/responsiveslides.min',





    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        /* bootstrap: {
         exports: 'bootstrap'
         },*/

        jqueryui:{
          exports: 'jqueryui'
        },

        /*corejs: {
            exports: 'corejs'
        },*/

    /*    widgetjs: {
            exports: 'widgetjs'
        },*/
      /*  accordion:{
            exports: 'accordion'
        },*/
        scriptsjs: {
            exports: 'scriptsjs'
        },
        moderniz: {
            exports: 'stupidtbl'
        },
        domReady: {
            exports: 'domReady'
        },

        /* hideaddbr: {
         exports: 'hideaddbr'
         },*/

        picFill: {
            exports: 'picFill'
        },

       /* bxslider: {
            exports: 'bxslider'
        },*/

        owlcar: {
            exports: 'owlcar'
        },

        menu:{
            exports: 'menu'
        },

        swiper:{
            exports: 'swiper'
        },

        expandDiv: {
            exports: 'expandDiv'
        },

        respslides: {
            exports: 'respslides'
        }



    }
});



require(['jquery','domReady!' ], function ( $, doc) {
    require(['scriptsjs',  'moderniz', 'picFill','bxslider', 'swiper', 'menu', 'expandDiv', 'respslides', 'owlcar' ], function ($,doc, scriptsjs, moderniz, picFill, bxslider, swiper, menu, expandDiv, respslides, owlcar ) {
        //console.dir(bootstrap)

    });
});
//TODO: Add all of the javaScript files and plugins that need to be loaded. Also look into RequireJS CSS

