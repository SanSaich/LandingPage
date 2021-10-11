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
    items: 3,
    margin: 20,
    dots: true,
    dotsEach: true,
  });
});
