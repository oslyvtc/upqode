var navigation = (function() {

  return {
    navigateOnClick: navigateOnClick,
    navigateOnScroll: navigateOnScroll
  }

  function navigateOnClick() {
    $('#home').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page1").offset().top 
      }, 1000);
      return false;
    });
  
    $('#whyUs').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page2").offset().top - 70
      }, 1000);
      return false;
    });
  
    $('#products').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page3").offset().top - 70
      }, 1000);
      return false;
    });
  
    $('#about').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page4").offset().top - 70
      }, 1000);
      return false;
    });
  
    $('#contact').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page5").offset().top - 70
      }, 1000);
      return false;
    });
  
  };
  
  
  function navigateOnScroll() {
    var page1Top = 0;
    var page2Top = $("#page2").offset().top - (($("#page3").offset().top - $("#page2").offset().top) / 2);
    var page3Top = $("#page3").offset().top - (($("#page4").offset().top - $("#page3").offset().top) / 2);
    var page4Top = $("#page4").offset().top - (($("#page5").offset().top - $("#page4").offset().top) / 2);
    var page5Top = $("#page5").offset().top - (($(document).height() - $("#page5").offset().top) / 2);

    $(".menu__item a").removeClass("active"); 

    if ($(document).scrollTop() >= page1Top && $(document).scrollTop() < page2Top) {
      $("#home").addClass("active");
    } else if ($(document).scrollTop() >= page2Top && $(document).scrollTop() < page3Top) {
      $("#whyUs").addClass("active");
    } else if ($(document).scrollTop() >= page3Top && $(document).scrollTop() < page4Top) {
      $("#products").addClass("active");
    } else if ($(document).scrollTop() >= page4Top && $(document).scrollTop() < page5Top) {
      $("#about").addClass("active");
    } else if ($(document).scrollTop() >= page5Top) {
      $("#contact").addClass("active");
    };
  };

})();