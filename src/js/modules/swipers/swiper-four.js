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
    

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
