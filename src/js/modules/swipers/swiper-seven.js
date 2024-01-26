import Swiper from "swiper/bundle";

const optionsSwiper = {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,

  breakpoints: {
    744: {
        slidesPerView: 2,
    },
    1280: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}

const productSimilarSwiper = document.querySelector(".swiper__seven");

if (productSimilarSwiper) {
  new Swiper(productSimilarSwiper, optionsSwiper);
}