$(document).ready(function(){
  $("#navigation li a").on("click", function(e){
    e.preventDefault();
    var hrefval = $(this).attr("href");
    
    console.log(hrefval);

    if(hrefval == "#notepad") {
      var distance = $('#mainpage').css('left');

    console.log(distance);
      
      if(distance == "auto" || distance == "0px") {
        $(this).addClass("open");
        openSidepage();
      } else {
        closeSidepage();
      }
    }
  }); // end click event handler
});

$(document).ready(function(){
  $("#navigation li a").on("click", function(e){
    e.preventDefault();
    var hrefval = $(this).attr("href");
    
    console.log(hrefval);

    if(hrefval == "#nodeContent") {
      var distance = $('#mainpage').css('left');

    console.log(distance);
      
      if(distance == "576px" || distance == "0px") {
        $(this).addClass("open");
        openRightpage();
      } else {
        closeSidepage();
      }
    }
  }); // end click event handler
});


  // $('#openNote').on('click', function( e ) {
  //   e.preventDefault();

  //   openSidepage();
  // }); 

// end click event handler

  
  $("#navigation li a").on("hover", function(){
    var classval = $(this).hasClass("hovertrigger");
    
    if(classval == true) {
      var distance = $('#mainpage').css('left');
      
      if(distance == "auto" || distance == "0px") {
        $(this).addClass("open");
        openSidepage();
      }
    }
  }); // end hover event handler
  
  $("#closebtn").on("click", function(e){
    e.preventDefault();
    closeSidepage();
  }); // end close button event handler

  function openSidepage() {
    $('#mainpage').animate({
      left: '45%'
    }, 400, 'easeOutBack'); 
  }

    function openRightpage() {
    $('#mainpage').animate({
      left: '90%'
    }, 400, 'easeOutBack'); 
  }
  
  function closeSidepage(){
    $("#navigation li a").removeClass("open");
    $('#mainpage').animate({
      left: '0px'
    }, 400, 'easeOutQuint');  
  };