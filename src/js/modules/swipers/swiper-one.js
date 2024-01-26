import Swiper from 'swiper/bundle';
// import 'swiper/css';


// Banner автоматично скролиться кожні 8 секунд, 
// або Стрілками (ButtonCircle_Fill_Orange). 
// Після останнього слайду йде знову перший.
const bannerSwiper = document.querySelector(".swiper__one");
if (bannerSwiper) {
    new Swiper(bannerSwiper, {
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 8000,
          },
      

        pagination: {
          el: '.swiper-pagination',
        },
      

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}