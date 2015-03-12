$(document).ready(function(){

  //These Offsets determine the offsets when the hamburger top-bar expands in height
  var navOffset;
  var extraOffset;

  /* The Hamburger Icon closes after selecting a destination */
  $('#navScrollAbout, #navScrollReasons, #navScrollCompare, #navScrollApply').click(function(evt){
    $('.menu-icon').click();
      navOffset = 45;
      extraOffset = 0;
  });

  /* Navigation Smooth Scrolling */
   $('#navScrollHome, #navScrollApply, #navScrollCompare, #navScrollAbout, #navScrollReasons, #orb1, #orb2, #orb3, #orb4').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top - navOffset + extraOffset - 48}, 650);
      return false;
    });

  /* Navigation Position Indicator */
  $(window).scroll(function(){
    var windowPos = $(window).scrollTop(); //offset from top of page

    //Whenever the current window y position is in view of a section, we had the "highlight" class to the text
    //When it is out of view, then we remove it
    if (windowPos >= ($('#apply').position().top) - navOffset){
        $('#ApplyOn').addClass("nav-active");
    }
    else
        $('#ApplyOn').removeClass("nav-active");

    if (windowPos >= ($('#compare').position().top - navOffset) && windowPos < $('#apply').position().top - navOffset){
        $('#CompareOn').addClass("nav-active");
    }
    else
        $('#CompareOn').removeClass("nav-active");
    if (windowPos >= ($('#reasons').position().top - navOffset) && windowPos < $('#compare').position().top - navOffset ){
        $('#ReasonsOn').addClass("nav-active");
      }
    else
        $('#ReasonsOn').removeClass("nav-active");
    if (windowPos >= ($('#about').position().top - navOffset) && windowPos < ($('#reasons').position().top - navOffset)){
        $('#DiscoverOn').addClass("nav-active");
      }
    else 
        $('#DiscoverOn').removeClass("nav-active");
  });

  /* Adjusts the Nav Bar height and font shrink */
  var initHeight = $(".top-bar").outerHeight();
  var Normalsize = $(".Normal").css('font-size');
  var Boldsize = $(".Bold").css('font-size');
  var UltraBoldsize = $(".UltraBold").css('font-size');

  var navShrinkHeight = 32; //5em
  $(document).on("scroll",function(){
      if($(document).scrollTop()>navShrinkHeight){
          $(".top-bar").addClass("heightback");
          $('.Normal').css({"font-size": "14px"});
          $('.Bold').css({"font-size": "12px"});
          $('.UltraBold').css({"font-size": "14px"});

      } else{
          $(".top-bar").removeClass("heightback");
          $('.Normal').css({"font-size": Normalsize});
          $('.Bold').css({"font-size": Boldsize});
          $('.UltraBold').css({"font-size": UltraBoldsize});
      }
  });

  /* Ensure that the Image Overlay on the Carousel is always in the proportionally right position */
  $(".imageText").css({"top": $(".example-orbit").outerHeight()/4});
  $(window).resize(function(){
  	$(".imageText").css({"top": $(".example-orbit").outerHeight()/4});
  });
    
  /* Adjusts Height of NavBar when hamburger icon is selected*/
  var hamburgered = false;
  $('.menu-icon').click(function(){
    if (!hamburgered && $(window).outerWidth() < 624){
      $('.top-bar').addClass("heightlarge");
        navOffset = 240;
        extraOffset = 10;
        hamburgered = true;
      }
    else if (hamburgered && $(window).outerWidth() < 624){
      $('.top-bar').removeClass("heightlarge");
        hamburgered = false;
      }
  });


});
