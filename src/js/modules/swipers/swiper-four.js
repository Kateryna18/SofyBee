import Swiper from "swiper/bundle";

// При натисненні на Стрілки (ButtonCircle_Fill_Orange)
// відгуки листаються по 1 штуці вперед/назад.
// Після останнього відгуку йде знов перший.
const reviewsSwiper = document.querySelector(".swiper__four");
if (reviewsSwiper) {
  new Swiper(reviewsSwiper, {
    direction: "horizontal",
    loop: true,
    grabCursor: true,
    // rewind: true,
    slidesPerView: 1,
    // spaceBetween: 20,
    // slidesOffsetBefore: 60,
    // slidesPerGroup: 1,

    breakpoints: {
      744: {
          slidesPerView: 4,
      },
      // 1280: {
      //     slidesPerView: 4,
      // },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
