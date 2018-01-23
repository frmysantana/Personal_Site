$(document).ready(function() {
  // Trying to store the original classes of the projects so that they
  // may later be toggled
  var originalClasses = $("#Projects img").classList;
  $("#Projects img").map(function(i) {
    console.log($(this)[i]);
    // return el.classList;
  });
  
  // Toggle image and description when on mobile.  
  $("figure").click(function() {
      $("figure").addClass("vanish");
      $("div p").removeClass("vanish");
  });

  $("div p").click(function() {
      $("div p").addClass("vanish");
      $("figure").removeClass("vanish");
  });

  // Toggle project description
  $("#Projects img").click(function(e) {
    var projects = $("#Projects img");
    
    // Toggle the other projects' visibilities
    for (i = 0; i < projects.length; i++) {
        if (projects[i].id !== e.target.id) {
          $(projects[i]).parent().toggleClass("hide");
        }
    }
  
    // Toggle centering the clicked project and show description
    if (!e.currentTarget.classList.contains("selected-project")) {
      $(e.currentTarget).toggleClass();
      $(e.currentTarget).addClass("selected-project");
    } else {
      $(e.currentTarget).toggleClass();
    }

    var paragraph = $($(e.currentTarget.offsetParent).children()[1]);
    paragraph.toggleClass("hide");
  });
});
