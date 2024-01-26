import Swiper from "swiper/bundle";

const categoriesSwiper = document.querySelector(".swiper__two");
const categoriesNewSwiper = document.querySelector(".swiper__free");

const optionsSwiper = {
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  breakpoints: {
    744: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    1560: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

if (categoriesSwiper) {
  new Swiper(categoriesSwiper, optionsSwiper);
}
if (categoriesNewSwiper) {
  new Swiper(categoriesNewSwiper, optionsSwiper);
}
