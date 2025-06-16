// HAMBURGER
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// SWIPER
const swiper = new Swiper(".wrapper", {
  loop: true,
  spaceBetween: 30,

//   Autoplay
autoplay: {
    delay: 10000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
},

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // RESPONSOVE
  breakpoints : {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    }
  }
});
