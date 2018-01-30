$(document).ready(function() {
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
  $("#fremy-image").click(function() {
    if (window.innerWidth <= 768) {
      $("#fremy-image").fadeToggle(200, 'linear');
      $("#fremy-figure-caption").fadeToggle(200, 'linear');
      $("#fremy-description").delay(200).fadeToggle(200, 'linear');
    } 
  });

  $("#fremy-description").click(function() {
    if (window.innerWidth <= 768) {
      $("#fremy-description").fadeToggle(200, 'linear');
      $("#fremy-image").delay(200).fadeToggle(200, 'linear');
      $("#fremy-figure-caption").fadeToggle(200, 'linear');
    }
  });

  // Toggle project description
  $("#Projects img").click(function(e) {
    var projects = $("#Projects img");
    
    // Toggle the other projects' visibilities on tablet-and-up screen sizes
    if (window.innerWidth >= 768) {
      for (i = 0; i < projects.length; i++) {
        if (projects[i].id !== e.target.id) {
            $(projects[i]).parent().fadeToggle(200, 'linear');
        } else {
          var selectedProjIndex = i + 1;
        }
      }

      // Toggle centering the clicked project and showing description
      if (projects.length % 2 === 1) {
        if (selectedProjIndex % 2 === 1 && selectedProjIndex !== 1) {
          $(e.currentTarget).toggleClass("right");
          $(e.currentTarget).toggleClass("selected-project");
        } else {
          $(e.currentTarget).toggleClass("left");
          $(e.currentTarget).toggleClass("selected-project");
        }
      } else {
        if (selectedProjIndex % 2 === 1 ) {
          $(e.currentTarget).toggleClass("right");
          $(e.currentTarget).toggleClass("selected-project");
        } else {
          $(e.currentTarget).toggleClass("left");
          $(e.currentTarget).toggleClass("selected-project");
        }
      }
    }

    var paragraph = $($(e.currentTarget.offsetParent).children()[1]);
    paragraph.toggleClass("hide");
  });
});
