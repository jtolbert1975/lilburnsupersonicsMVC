(function($) {
    $(document).ready(function () {
        /*-------------------- EXPANDABLE PANELS ----------------------*/
        var panelspeed = 500; //panel animate speed in milliseconds
        var totalpanels = 3; //total number of collapsible panels
        var defaultopenpanel = 1; //leave 0 for no panel open
        var accordian = true; //set panels to behave like an accordian, with one panel only ever open at once

        var panelheight = new Array();
        var currentpanel = defaultopenpanel;
        var iconheight = parseInt($('.icon-close-open').css('height'));
        var highlightopen = true;

        //Initialise collapsible panels
        function panelinit() {
               
            for (var i=1; i<=totalpanels; i++) {
                panelheight[i] = parseInt($('#cp-'+i).find('.expandable-panel-content').css('height'));
                $('#cp-'+i).find('.expandable-panel-content').css('margin-top', -panelheight[i]);
                if (defaultopenpanel == i) {
                    $('#cp-'+i).find('.icon-close-open').css('background-position', '0px -'+iconheight+'px');
                    $('#cp-'+i).find('.expandable-panel-content').css('margin-top', 0);
                }
            }
        }

        $('.expandable-panel-heading').click(function() {
                console.log("You Clicked Me");
            var obj = $(this).next();
            var objid = parseInt($(this).parent().attr('ID').substr(3,2));
            currentpanel = objid;
            if (accordian == true) {
                resetpanels();
            }

            if (parseInt(obj.css('margin-top')) <= (panelheight[objid]*-1)) {
                console.log(panelheight[objid]);
                obj.clearQueue();
                obj.stop();
                obj.prev().find('.icon-close-open').css('background-position', '0px -'+iconheight+'px');
                obj.animate({'margin-top':0}, panelspeed);
                if (highlightopen == true) {
                    $('#cp-'+currentpanel + ' .expandable-panel-heading').addClass('header-active');
                }
            } else {
                obj.clearQueue();
                obj.stop();
                obj.prev().find('.icon-close-open').css('background-position', '0px 0px');

               console.log("2 times" + panelheight[objid]);
                obj.animate({'margin-top':(panelheight[objid]* -1)}, panelspeed);
                if (highlightopen == true) {
                    $('#cp-'+currentpanel + ' .expandable-panel-heading').removeClass('header-active');
                }
            }
        });

        function resetpanels() {
            for (var i=1; i<=totalpanels; i++) {
                if (currentpanel != i) {
                    $('#cp-'+i).find('.icon-close-open').css('background-position', '0px 0px');
                    $('#cp-'+i).find('.expandable-panel-content').animate({'margin-top':-panelheight[i]}, panelspeed);
                    if (highlightopen == true) {
                        $('#cp-'+i + ' .expandable-panel-heading').removeClass('header-active');
                    }
                }
            }
        }

        //Uncomment these lines if the expandable panels are not a fixed width and need to resize
        /* $( window ).resize(function() {
         panelinit();
         });*/

        $(window).load(function() {
                console.log("Im loading");
            panelinit();
        }); //END LOAD
    }); //END READY
})(jQuery);