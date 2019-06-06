$(document).ready(() => {
  $("body").addClass("page-loaded"); // Used for animating h1

  $("#burger-icon").click(function() {
    $("body").toggleClass("burger-is-active");
  });

  $(window).resize(() => {
    if ($(this).width() > 1024) {
      $("body").removeClass("burger-is-active");
    }
  });

  $("#mainMenu a").click(function() {
    setTimeout(() => {
      $(this)
        .closest("ul")
        .find(".active")
        .removeClass("active");

      if ($(this).attr('href').includes("#")) {
        $(this).addClass("active");
      }
    }, 300);
  });

  $("#mobileMenu a").click(() => {
    setTimeout(() => {
      $("body").removeClass("burger-is-active");
    }, 300);
  });

  // Smooth Scroll Initialization
  smoothScroll.init();

  // Scroll Tracking
  $.appear("[data-section]");

  $("[data-section]").on("appear", function(e, $el) {
    const section = $el.data("section");

    $("#mainMenu .active").removeClass("active");
    
    if (section == "contact") {
      $("#mainMenu a").last().addClass("active");
    } else {
      $(`#mainMenu a[href*=${section}]`).addClass("active");
    }
  });

  // Pause/Play Video
  $("video").click(function() {
    this.paused ? this.play() : this.pause();
  });
});
