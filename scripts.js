$(document).ready(function() {
  // Hack approach. Fix with enquire.js.
  // document.addEventListener('animationend', function() {
  //   console.log('reloading');
  //   location.reload();
  // });

  // Toggle image and description when on mobile.  
  $("figure").click(function() {
    if (window.innerWidth <= 768) {
      $("figure").fadeToggle(200, 'linear');
      $("div p").delay(200).fadeToggle(200, 'linear');
    } 
  });

  $("div p").click(function() {
    if (window.innerWidth <= 768) {
      $("div p").fadeToggle(200, 'linear');
      $("figure").delay(200).fadeToggle(200, 'linear');
    }
  });

  // Toggle project description
  $("#Projects img").click(function(e) {
    var projects = $("#Projects img"), selectedProjIndex;
    
    // Toggle the other projects' visibilities on tablet-and-up screen sizes
    if (window.innerWidth >= 768) {
      for (i = 0; i < projects.length; i++) {
        if (projects[i].id !== e.target.id) {
            $(projects[i]).parent().fadeToggle(200, 'linear');
        } else {
          selectedProjIndex = i + 1;
        }
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
    paragraph.fadeToggle('200', 'linear');
  });
});
