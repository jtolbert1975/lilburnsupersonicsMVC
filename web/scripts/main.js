//window.LS = JSON.parse(document.querySelector('head meta[name=LS]').content);

requirejs.config({

    baseUrl: '/scripts',

    waitSeconds: 600,
    paths: {
        jquery: 'vendor/jquery/2.1.4/jquery.min',
        //bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
        scriptsjs: 'js/scripts',
        moderniz: 'vendor/modernizer/modernizer',
        domReady: 'vendor/domReady/domReady',
        //hideaddbr: 'js/hideaddressbar',
        picFill: 'vendor/picturefill/picturefill',
        bxslider: 'vendor/jquery/bxslider/jquery.bxslider.min',
        owlcar: 'vendor/owlcarousel/owl.carousel.min',
        menu: 'js/modules/menu',
        swiper: 'vendor/swiperjs/swiper.min',




    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        /* bootstrap: {
         exports: 'bootstrap'
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

        bxslider: {
            exports: 'bxslider'
        },

        owlcar: {
            exports: 'owlcar'
        },

        menu:{
            exports: 'menu'
        },

        swiper:{
            exports: 'swiper'
        },



    }
});



require(['jquery','domReady!' ], function ( $, doc) {
    require(['jquery','domReady!','scriptsjs',  'moderniz', 'picFill','bxslider', 'swiper', 'menu' ], function ($,doc,  scriptsjs, moderniz, picFill, bxslider, swiper, menu ) {
        //console.dir(bootstrap)

    });
});
//TODO: Add all of the javaScript files and plugins that need to be loaded. Also look into RequireJS CSS

