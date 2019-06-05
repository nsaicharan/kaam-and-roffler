$(document).ready(() => {
  $("#burger-icon").click(function() {
    $("body").toggleClass("burger-is-active");
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

  smoothScroll.init();

  appear({
    elements: function elements() {
      return $("[data-section]");
    },
    appear: function appear(el) {
      const section = $(el).data("section");
      // console.log({section});

      $("#mainMenu .active").removeClass("active");
      $(`#mainMenu a[href*=${section}]`).addClass("active");
    },
    bounds: 100,
    reappear: true
  });

  $(window).resize(() => {
    if ($(this).width() > 1024) {
      $("body").removeClass("burger-is-active");
    }
  });
});
