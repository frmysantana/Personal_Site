$(document).ready(function() {
//   function hideProjectDetails(hoverEvent) {

//   }

  function showProjectDetails(hoverEvent) {
    var projects = $("#Projects img");
    for (i = 0; i < projects.length; i++) {
        if (projects[i].id !== hoverEvent.target.id) {
          $(projects[i].offsetParent).toggleClass("hide");
        }
    }
    $(hoverEvent.currentTarget).removeClass().addClass("center");
    var paragraph = $($(hoverEvent.currentTarget.offsetParent).children()[1]);
    paragraph.removeClass("hide").attr("id", "project-description");
  }

  // Toggle image and description when on mobile.  
  $("figure").click(function() {
      $("figure").addClass("vanish");
      $("div p").removeClass("vanish");
  });

  $("div p").click(function() {
      $("div p").addClass("vanish");
      $("figure").removeClass("vanish");
  });

  $("#Projects img").hover(showProjectDetails(e), hideProjectDetails(e));
});
