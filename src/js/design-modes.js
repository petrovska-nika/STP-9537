import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const designSwiper = new Swiper('.design-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  loop: false,
});
