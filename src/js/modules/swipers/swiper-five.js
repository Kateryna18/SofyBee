import Swiper from "swiper/bundle";

const optionsSwiper = {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  grabCursor: true,
}

const preFooterSwiper = document.querySelector(".swiper__five");

if (preFooterSwiper) {
  new Swiper(preFooterSwiper, optionsSwiper);
}