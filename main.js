$(document).ready(function () {
  
  $(".next").click(function () {
    nextImg();
    
  });
  $(".prev").click(function () {
     prevImg();
    
  });
  $('#c1').click(function(){
    var activeImg = $(".active");
    var img = $('#img1');
    activeImg.removeClass('active');
    img.addClass('active');
    $('#c1').addClass('active');
  });
  $('#c2').click(function(){
    var activeImg = $(".active");
    var img = $('#img2');
    activeImg.removeClass('active');
    img.addClass('active');
    $('#c2').addClass('active');
  });
  $('#c3').click(function(){
    var activeImg = $(".active");
    var img = $('#img3');
    activeImg.removeClass('active');
    img.addClass('active');
    $('#c3').addClass('active')
  });
  $('#c4').click(function(){
    var activeImg = $(".active");
    var img = $('#img4');
    activeImg.removeClass('active');
    img.addClass('active');
    $('#c4').addClass('active');
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
  };

  
});
