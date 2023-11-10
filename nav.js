const toggle_nav = () => {
  document.querySelector("body > .mobile-nav").classList.toggle("active");
};
document.querySelector(".mobile-toggle").addEventListener("click", toggle_nav);

document.querySelector(".close-mobile").addEventListener("click", toggle_nav);

$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    var $mobile_toggle = $(".mobile-toggle > span");
    $mobile_toggle.toggleClass(
      "scrolled",
      $(this).scrollTop() > $mobile_toggle.height()
    );
  });
});

const scroll_to = (section, toggle) => {
  console.log(section);
  window.scrollTo(0, document.querySelector(section).offsetTop - 100);
  toggle && toggle_nav();
};
