$(document).ready(function() {

  // Toggle image and description when on mobile.  
  $("figure").click(function() {
      $("figure").addClass("vanish");
      $("div p").removeClass("vanish");
  });

  $("div p").click(function() {
      $("div p").addClass("vanish");
      $("figure").removeClass("vanish");
  });

});
