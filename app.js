const items = document.querySelectorAll(".menu__link");

for (const item of items) {
  item.addEventListener("click", () => {
    clearActiveClasses();
    item.classList.add("menu__link_active");
  });
}

function clearActiveClasses() {
  items.forEach((item) => {
    item.classList.remove("menu__link_active");
  });
}

//--------owlCarousel---------------------------

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    dots: true,
    dotsEach: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1200: {
        items: 2,
      },
      1600: {
        items: 3,
      },
    },
  });
});
