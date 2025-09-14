let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-bars"); // Toggle fa-bars off
  menuBtn.classList.toggle("fa-times"); // Toggle fa-times on
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slide", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoHeight: true, // Add this
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      // Add this breakpoint
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoHeight: true, // Add this
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      // Add this breakpoint
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
