$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

document.addEventListener("scroll", () => {
  document.querySelector(".bg-roll").play();
});

const nav_observer = new IntersectionObserver(
  (e) => {
    console.log(e[0].intersectionRatio);
    if (e[0].intersectionRatio > 0.5) {
      document.querySelector("#nav_bar").classList.add("scrolled-dark");
      document.querySelectorAll(".mobile-toggle > span").forEach((e) => {
        e.classList.add("scroll-dark");
      });
    } else if (e[0].intersectionRatio < 0.1) {
      document.querySelector("#nav_bar").classList.remove("scrolled-dark");
      document.querySelectorAll(".mobile-toggle > span").forEach((e) => {
        e.classList.remove("scroll-dark");
      });
    }
  },
  {
    threshold: [0, 0.5],
  }
);

const nav_dark = document.querySelector("#nav_dark");

nav_observer.observe(nav_dark);
