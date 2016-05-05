define([
    'jquery'




],(function($) {

    $('.expandable-panel-heading').on('click', function(e){

        var header = $(this);
        var activePanel = $(header).parent().attr('id');

        console.log(activePanel);

        var current  = $('.expandable-panel-content-active');
        var currentHeader = $('.header-active');

        var currentActPanelId = $('.header-active').parent().attr('id');

       var actPanelIdNum = idScrub(activePanel);
            console.log("The actPanelIdNum = " + actPanelIdNum);

       var currActPanelIdNum = idScrub(currentActPanelId);
             console.log("The currActPanelIdNum = " + currActPanelIdNum);


        if($(header == currentHeader)) {
            console.log('I am the Active Header');

            removeActiveHeader(currentHeader, e);




        }

        //Panel currently marked Active onClick
        var prevpanel = $('#accordion').find('panel-active').attr('id');
        var currentCloseIcon = $('#accordion').find('span.icon-close');



        if(currentCloseIcon,e) {
            removeClose(currentCloseIcon, e);
        }


        //If there is a previous active panel then remove
        if(prevpanel) {
            removeActPanel(prevpanel,e);
        }

        //('.expandable-panel-heading').find('header-active');

        //console.log(currentHeader);

        removeActive(current, currentHeader,e);
        var u = undefined

       // var content = $(header).find('.expandable-panel-content');
//Comparing the clicked panel to the current Active panel. The code should only run when the values are different
      //  console.log("The length is: " + currentActPanelId.length());
         console.log($.type(currentActPanelId));
        //if ($.type(currentActPanelId) == 'undefined') {
           if(actPanelIdNum != currActPanelIdNum || $.type(currentActPanelId) == 'undefined'){
                console.log("The active panel is: " + activePanel + " The current Act Panel is: " + currentActPanelId);
                addActive(header,e);
                actPanel(activePanel,e);
                selectIcon(header, e)
            //}
        }

        e.preventDefault();

    })


    //Determines which selected content to display
    function addActive(selpanel, e){
       // console.log(selpanel);

        //var self = this;

        var selcontent =  $(selpanel).next();
        //find('.expandable-panel-content');
            //$('.expandable-panel-content');
            //$(selpanel).find('.expandable-panel-content');

        console.log('The Selected Cntetn: ' + selcontent);

       selcontent.addClass('expandable-panel-content-active');

        activeHeader(selpanel,e);

        //activePanel(activePanel);

       e.preventDefault;
    }


//Makes the selected Header active to change header background to Gold
    function  activeHeader(selectHeader,e){
        $(selectHeader).addClass('header-active');

        e.preventDefault;
    }

    //Makes the selected Panel Active to add a top margin -20px
    function actPanel(activePanel, e){

      //  console.log("The Active Panel is: " + activePanel)
        if(activePanel != 'cp-1'){
            $('#' + activePanel).addClass('panel-active');


        }

        e.preventDefault;
    }

    function removeActive(active, currentHeader, e){

        //console.log(active);


        $(active).removeClass('expandable-panel-content-active');

        removeActiveHeader(currentHeader,e);


        e.preventDefault;
    }

    function removeActiveHeader(currentHeader, e){

        $(currentHeader).removeClass('header-active');

        e.preventDefault;
    }

    function removeActPanel(prevpanel,e) {


        //console.log(prevpanel);

        $(prevpanel).removeClass('panel-active');

        e.preventDefault;
    }

  function  selectIcon(selectedHeader, e){

      var selectedIcon = $(selectedHeader).find('span');

      $(selectedIcon).addClass('icon-close');
      if(selectedIcon) {
          changeIcon(selectedIcon, e);
      }



      e.preventDefault;
  }

    function changeIcon(selectedIcon, e){

        $(selectedIcon).removeClass('icon-open');

        e.preventDefault;
    }
    function removeClose(currentCloseIcon, e){

       // console.log("Closed is: " + currentCloseIcon);
       // $(currentCloseIcon).removeClass('icon-close');

        var activespan = currentCloseIcon

            //console.log("Span is: " + activespan);

        $(activespan).removeClass('icon-close');
        $(activespan).addClass('icon-open')

        //$(currentCloseIcon).addClass('icon-open');

        e.preventDefault;

    }

    function idScrub(panelId){

        if($.type(panelId) == 'undefined'){

            return false;
        } else {
            var stripNum = panelId.split("-").pop();

            return stripNum;
        }
    }

  })//End of the Function Closure

)
