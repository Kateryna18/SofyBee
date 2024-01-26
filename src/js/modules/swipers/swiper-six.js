import Swiper from "swiper/bundle";

const optionsSwiper = {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  grabCursor: true,
  slidesOffsetBefore: 12,

  breakpoints: {
    744: {
      spaceBetween: 24,
    },
    1280: {
        slidesOffsetBefore: 20,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}

const productPageSwiper = document.querySelector(".swiper__six");

if (productPageSwiper) {
  new Swiper(productPageSwiper, optionsSwiper);
}