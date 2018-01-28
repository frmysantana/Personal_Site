$(document).ready(function() {
  // Hack approach. Fix with enquire.js.

  var body = document.querySelector('body');
  
  var mql = window.matchMedia('(min-width: 768px)');
  
  function screenTest(e) {
    if (e.matches) {
      /* the viewport is 768 pixels wide or more */
      location.reload();
    } else {
      /* the viewport is less than than 768 pixels wide */
      location.reload();
    }
  }
  
  mql.addListener(screenTest);

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
    if (selectedProjIndex % 2 === 1 ) {
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
