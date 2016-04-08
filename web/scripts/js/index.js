/**
 * We need to parse the json out the DS meta tag and assign it to the window
 * This can't be assigned directly to window.DS in a <script> tag due to us not allowing in-line scripts via our Content-Security-Policy header.
 */
//window.DS = JSON.parse(document.querySelector('head meta[name=DS]').content);

requirejs.config({
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
        bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',

    },
    shim: {
        jquery: {
          exports: 'jQuery'
        },
        bootstrap: {
          exports: 'bootstrap'
        },
      
    }
});




require(['domReady!', 'jquery'], function (doc, $) {
    require(['jquery', 'bootstrap'], function ($, bootstrap) {
        console.dir(bootstrap)

    });
});








