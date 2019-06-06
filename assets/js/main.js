$(document).ready(() => {
  $("#burger-icon").click(function() {
    $("body").toggleClass("burger-is-active");
  });

  $(window).resize(() => {
    if ($(this).width() > 1024) {
      $("body").removeClass("burger-is-active");
    }
  });

  $("#mainMenu a").click(function() {
    $(this)
      .closest("ul")
      .find(".active")
      .removeClass("active");

    $(this).addClass("active");
  });

  $("#mobileMenu a").click(() => {
    setTimeout(() => {
      $("body").removeClass("burger-is-active");
    }, 300);
  });

  // Smooth Scroll Initialization
  smoothScroll.init();

  // Scroll tracking
  $.appear("[data-section]");

  $("[data-section]").on("appear", function(e, $el) {
    const section = $el.data("section");

    $("#mainMenu .active").removeClass("active");
    $(`#mainMenu a[href*=${section}]`).addClass("active");
  });
});
