$(document).ready(function () {
  
  $(".next").click(function () {
    nextImg();
    
  });
  $(".prev").click(function () {
     prevImg();
    
  });
  
  //funzioni
  function nextImg() {
    var activeImg = $(".images img.active");
    var activeDot = $(".nav i.active");
    var first = $(".images img.first");
    var firstDot = $(".nav i.first");
    activeImg.removeClass("active");
    activeDot.removeClass("active");

    if (activeImg.hasClass("last")) {
      first.addClass("active");
      firstDot.addClass("active");
    } else {
      activeImg.next().addClass("active");
      activeDot.next().addClass("active");
    }
  }
  function prevImg() {
    var activeImg = $(".images img.active");
    var last = $(".images img.last");
    var activeDot = $(".nav i.active");
    var lastDot = $(".nav i.last");

    activeImg.removeClass("active");
    activeDot.removeClass("active");

    if (activeImg.hasClass("first")) {
      last.addClass("active");
      lastDot.addClass("active");
    } else {
      activeImg.prev().addClass('active');
      activeDot.prev().addClass('active');
    }
  }
  function dotsChange(){
    
  }
  
});
