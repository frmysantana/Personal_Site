$(document).ready(function() {
  // Toggle image and description when on mobile.  
  $("figure").click(function() {
      $("figure").addClass("js-hide-mobile");
      $("div p").removeClass("js-hide-mobile");
  });

  $("div p").click(function() {
      $("div p").addClass("js-hide-mobile");
      $("figure").removeClass("js-hide-mobile");
  });

  // Toggle project description
  $("#Projects img").click(function(e) {
    var projects = $("#Projects img"), selectedProjIndex;
    
    // Toggle the other projects' visibilities
    for (i = 0; i < projects.length; i++) {
        if (projects[i].id !== e.target.id) {
            $(projects[i]).parent().toggleClass("js-hide-desktop");
        } else {
          selectedProjIndex = i + 1;
        }
    }
  
    // Toggle centering the clicked project and showing description
    if (selectedProjIndex % 2 === 0) {
      $(e.currentTarget).toggleClass("left");
      $(e.currentTarget).toggleClass("selected-project");
    } else if (selectedProjIndex < projects.length) {
      $(e.currentTarget).toggleClass("right");
      $(e.currentTarget).toggleClass("selected-project");
    } else {
      $(e.currentTarget).toggleClass("center");
      $(e.currentTarget).toggleClass("selected-project");
    }

    var paragraph = $($(e.currentTarget.offsetParent).children()[1]);
    paragraph.toggleClass("js-hide-desktop");
    // Using a different class because I only want the project description to
    // change in display, not any of the other projects as well.
    paragraph.toggleClass("js-hide-mobile");
  });
});
