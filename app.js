$(document).ready(function(){

});

//Large Screen Check Scroll Event
var screenSize = window.matchMedia("(min-width: 992px)");
scrollFade(screenSize);
screenSize.addListener(scrollFade);

function scrollFade(screenSize){

   if (screenSize.matches){ // if media query matches
     $(window).scroll(function(){
       $(".logo").css("opacity", 1 - $(window).scrollTop() / 600);
     });//do the thing
  } else {
    $(".logo").
  }
}


  //Hamburger Mobile Menu Dropdown
  $(".drop-button").click(function() {
  $("body").toggleClass("overflowFreeze");
  $(".nav-dropdown").toggleClass("mnavHeight");
  });
